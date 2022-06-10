import fetch from 'node-fetch'

process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0

const AUTH_ENDPOINT = 'https://vabelvcenter.hevs.ch/api/session'
const TAGGING_ENDPOINT = 'https://vabelvcenter.hevs.ch/api/cis/tagging/tag'

fetch(AUTH_ENDPOINT, {
  method: 'POST',
  headers: { Authorization: 'Basic ZGlvbi5vc21hbmlAaGV2cy5jaDozUFRNX29zbTAzMDE=' }
}).then((res) => {
  const VMWARE_API_SESSION_ID = res.headers.get('vmware-api-session-id')
  fetch(TAGGING_ENDPOINT, {
    method: 'GET',
    headers: { 'vmware-api-session-id': VMWARE_API_SESSION_ID }
  }).then((res) => res.json().then((data) => {
    data.forEach(urn => {
      fetch(`${TAGGING_ENDPOINT}/${urn}`, {
        method: 'DELETE',
        headers: { 'vmware-api-session-id': VMWARE_API_SESSION_ID }
      })
    })
  }))
})
