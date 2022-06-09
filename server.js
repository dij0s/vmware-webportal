import express from 'express'
import fetch from 'node-fetch'
import path from 'path'
import cryptoJs from 'crypto-js'
import nodemailer from 'nodemailer'
import ldap from 'ldapjs'
import { generateMail, NOTIFICATIONS } from './templates/EmailNotification.js'
import 'dotenv/config'
const app = express()
const __dirname = path.dirname('./client/build/index.html')

app.use(express.static(__dirname))
app.use(express.json())

const checkVMwareAPISession = (req, res, next) => {
  req.headers['vmware-api-session-id'] ? next() : res.redirect('/api/v1/auth')
}

const decryptVAPISID = (encryptedVAPISID) => {
  return cryptoJs.enc.Utf8.stringify(cryptoJs.AES.decrypt(encryptedVAPISID, process.env.API_SID_SECRETKEY))
}

app.post('/api/v1/:host/vmtemplate/library/deploy/:tli', (req, res) => {
  const SERVICE_ACCOUNT = process.env.API_ServiceAccount
  const wordArraySA = cryptoJs.enc.Utf8.parse(SERVICE_ACCOUNT)
  const SERVICE_ACCOUNT_B64 = cryptoJs.enc.Base64.stringify(wordArraySA)
  fetch('http://localhost:8000/api/v1/auth', {
    method: 'POST',
    headers: { Authorization: `Basic ${SERVICE_ACCOUNT_B64}` }
  }).then((response) => {
    if (response.status === 200) {
      const VMWARE_API_SESSION_ID = response.headers.get('vmware-api-session-id')
      const VMwareAPISession = decryptVAPISID(VMWARE_API_SESSION_ID)
      fetch(`https://${req.params.host}/api/vcenter/vm-template/library-items/${req.params.tli}?action=deploy`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'vmware-api-session-id': `${VMwareAPISession}`
        },
        body: JSON.stringify(req.body)
      }).then((response) => {
        response.json().then((data) => res.status(response.status).json(data))
        fetch('http://localhost:8000/api/v1/auth', {
          method: 'DELETE',
          headers: { 'vmware-api-session-id': `${VMwareAPISession}` }
        })
      }, (err) => {
        console.log(err)
      })
    } else res.sendStatus(response.status)
  }, (error) => console.log(error))
})

app.get('/api/v1/auth/userinformation', checkVMwareAPISession, (req, res) => {
  const VMwareAPISession = decryptVAPISID(req.headers['vmware-api-session-id'])
  fetch(`${process.env.VCENTER_URL}/api/session`, {
    headers: { 'vmware-api-session-id': `${VMwareAPISession}` }
  }).then((response) => {
    response.json().then((data) => {
      res.status(response.status).send(data.user)
    }, (error) => {
      console.log(error)
    })
  }, (error) => {
    console.log(error)
  })
})

app.delete('/api/v1/auth/logout', checkVMwareAPISession, (req, res) => {
  const VMwareAPISession = decryptVAPISID(req.headers['vmware-api-session-id'])
  fetch(`${process.env.VCENTER_URL}/api/session`, {
    method: 'DELETE',
    headers: { 'vmware-api-session-id': `${VMwareAPISession}` }
  }).then((response) => {
    res.sendStatus(response.status)
  }, (error) => {
    res.sendStatus(500)
    console.log(error)
  })
})

app.post('api/v1/cis/tags/attach', (req, res) => {
  const SERVICE_ACCOUNT = process.env.API_ServiceAccount
  const wordArraySA = cryptoJs.enc.Utf8.parse(SERVICE_ACCOUNT)
  const SERVICE_ACCOUNT_B64 = cryptoJs.enc.Base64.stringify(wordArraySA)
  fetch('http://localhost:8000/api/v1/auth', {
    method: 'POST',
    headers: { Authorization: `Basic ${SERVICE_ACCOUNT_B64}` }
  }).then((response) => {
    if (response.status === 200) {
      const VMWARE_API_SESSION_ID = response.headers.get('vmware-api-session-id')
      const VMwareAPISession = decryptVAPISID(VMWARE_API_SESSION_ID)
      fetch(`${process.env.VCENTER_URL}/api/cis/tagging/tag-association?action=attach-multiple-tags-to-object`, {
        method: 'POST',
        headers: {
          'vmware-api-session-id': `${VMwareAPISession}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(req.body)
      }).then((response) => {
        response.json().then((data) => res.status(response.status).json(data))
        fetch('http://localhost:8000/api/v1/auth', {
          method: 'DELETE',
          headers: { 'vmware-api-session-id': `${VMwareAPISession}` }
        })
      }, (error) => {
        console.log(error)
      })
    } else res.sendStatus(response.status)
  }, (error) => console.log(error))
})

app.get('/api/v1/cis/tags/get', (req, res) => {
  const SERVICE_ACCOUNT = process.env.API_ServiceAccount
  const wordArraySA = cryptoJs.enc.Utf8.parse(SERVICE_ACCOUNT)
  const SERVICE_ACCOUNT_B64 = cryptoJs.enc.Base64.stringify(wordArraySA)
  fetch('http://localhost:8000/api/v1/auth', {
    method: 'POST',
    headers: { Authorization: `Basic ${SERVICE_ACCOUNT_B64}` }
  }).then((response) => {
    if (response.status === 200) {
      const VMWARE_API_SESSION_ID = response.headers.get('vmware-api-session-id')
      const VMwareAPISession = decryptVAPISID(VMWARE_API_SESSION_ID)
      fetch(`${process.env.VCENTER_URL}/api/cis/tagging/tag`, {
        method: 'POST',
        headers: {
          'vmware-api-session-id': `${VMwareAPISession}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(req.body)
      }).then((response) => {
        response.json().then((data) => res.status(response.status).json(data))
        fetch('http://localhost:8000/api/v1/auth', {
          method: 'DELETE',
          headers: { 'vmware-api-session-id': `${VMwareAPISession}` }
        })
      }, (error) => {
        console.log(error)
      })
    } else res.sendStatus(response.status)
  }, (error) => console.log(error))
})

app.post('/api/v1/cis/tags/add', (req, res) => {
  const SERVICE_ACCOUNT = process.env.API_ServiceAccount
  const wordArraySA = cryptoJs.enc.Utf8.parse(SERVICE_ACCOUNT)
  const SERVICE_ACCOUNT_B64 = cryptoJs.enc.Base64.stringify(wordArraySA)
  fetch('http://localhost:8000/api/v1/auth', {
    method: 'POST',
    headers: { Authorization: `Basic ${SERVICE_ACCOUNT_B64}` }
  }).then((response) => {
    if (response.status === 200) {
      const VMWARE_API_SESSION_ID = response.headers.get('vmware-api-session-id')
      const VMwareAPISession = decryptVAPISID(VMWARE_API_SESSION_ID)
      fetch(`${process.env.VCENTER_URL}/api/cis/tagging/tag`, {
        method: 'POST',
        headers: {
          'vmware-api-session-id': `${VMwareAPISession}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(req.body)
      }).then((response) => {
        response.json().then((data) => res.status(response.status).json(data))
        fetch('http://localhost:8000/api/v1/auth', {
          method: 'DELETE',
          headers: { 'vmware-api-session-id': `${VMwareAPISession}` }
        })
      }, (error) => {
        console.log(error)
      })
    } else res.sendStatus(response.status)
  }, (error) => console.log(error))
})

app.post('/api/v1/auth', (req, res) => {
  const authHeader = req.headers.authorization
  const token = authHeader
  if (token === null) res.sendStatus(401)

  fetch(`${process.env.VCENTER_URL}/api/session`, {
    method: 'POST',
    headers: { Authorization: `${token}` }
  }).then((response) => {
    if (response.status !== 201) {
      res.sendStatus(response.status)
    } else {
      const VMWARE_API_SESSION_ID = response.headers.get('vmware-api-session-id')
      const vmwareAuthToken = cryptoJs.AES.encrypt(VMWARE_API_SESSION_ID, process.env.API_SID_SECRETKEY)
      res.set({ 'vmware-api-session-id': vmwareAuthToken }).sendStatus(200)
    }
  }, (error) => {
    console.log(error)
    res.sendStatus(503)
  })
})

app.post('/api/v1/notify', checkVMwareAPISession, (req, res) => {
  nodemailer.createTransport({
    host: process.env.SMTP_RELAY_HOST,
    port: process.env.SMTP_RELAY_PORT,
    secure: false
  }).sendMail({
    from: NOTIFICATIONS.FROM,
    to: NOTIFICATIONS.TO,
    subject: NOTIFICATIONS.SUBJECT,
    html: generateMail(req.body.user, req.body.vm, req.body.description, req.body.remarques)
  }).then(() => {
    res.sendStatus(200)
  }, (error) => {
    console.log(error)
    res.sendStatus(500)
  })
})

app.get('/api/v1/users', checkVMwareAPISession, (req, res) => {
  const ldapClient = ldap.createClient({ url: `${process.env.LDAP_PROTOCOL}://${process.env.LDAP_HOST}` })
  ldapClient.on('error', (err) => console.log(err))

  ldapClient.bind(process.env.LDAP_USER, process.env.LDAP_PASSWORD, (err) => {
    if (err) console.log(err)
    else {
      const ldapQuery = {
        scope: 'sub',
        filter: '(&(objectCategory=CN=Person,CN=Schema,CN=Configuration,DC=hevs,DC=ch)(employeeType=st*))',
        attributes: 'sAMAccountName'
      }
      ldapClient.search(process.env.LDAP_SEARCH_ROOT, ldapQuery, (err, response) => {
        const tempEntries = []
        if (err) console.log(err)
        else {
          response.on('searchEntry', function (entry) {
            tempEntries.push(entry.object.sAMAccountName)
          })
          response.on('error', function (err) {
            console.log(err)
          })
          response.on('end', () => {
            res.status(200).json(tempEntries.sort().map((entry) => ({ value: entry, label: entry })))
            ldapClient.unbind((err) => console.log(err))
          })
        }
      })
    }
  })
})

app.listen(8000)

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'))
})
