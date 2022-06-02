import React, { useState, useEffect } from 'react'
import cryptoJS from 'crypto-js'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

import { BiErrorCircle } from 'react-icons/bi'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

export default function Login() {
    const API_ROOT_ENDPOINT = '/api/v1'
    // eslint-disable-next-line no-unused-vars
    const [cookies, setCookie] = useCookies()
    const navigate = useNavigate()

    const [usernameInput, setUsernameInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')
    const [buttonActivated, setButtonActivated] = useState(false)

    const [passwordVisibility, togglePasswordVisibility] = useState(false)
    const [keepSigned, setKeepSigned] = useState(false)
    const [authStatus, setAuthStatus] = useState('')

    document.addEventListener('keydown', (e) => {
        if (e.key === "Enter") handleFormSubmit()
    })

    useEffect(() => {
        if (usernameInput !== '' && passwordInput !== '') setButtonActivated(true)
        else setButtonActivated(false)
    }, [usernameInput, passwordInput])

    const handlePasswordVisibility = () => {
        togglePasswordVisibility(!passwordVisibility)
    }
    
    const handleKeepSignedChange = () => {
        setKeepSigned(!keepSigned)
    }

    const handleFormSubmit = () => {
        if (usernameInput !== '' && passwordInput !== '' && buttonActivated) {
            const wordArray = cryptoJS.enc.Utf8.parse(`${usernameInput}:${passwordInput}`)
            const payload = cryptoJS.enc.Base64.stringify(wordArray)
            fetch(`${API_ROOT_ENDPOINT}/auth`, {
                method: 'POST',
                headers: { 'Authorization': `Basic ${payload}` }
            }).then((response) => {
                if (response.status === 200) {
                    const VMWARE_API_SESSION_ID = response.headers.get('vmware-api-session-id')
                    const cookieOptions = keepSigned ? { path: '/', secure: true, expires: new Date(Date.now() + 7200000) } : { path:'/', secure:true }
                    setCookie('v-api-sid', VMWARE_API_SESSION_ID, cookieOptions)
                    navigate('/portal')
                } else setAuthStatus('-visible')
            }, (error) => {
                console.log(error)
            })
        }
    }
    
    return(
        <div id='login-form'>
            <header id='login-form-header'>
                <h1 id='login-form-title'>Authentification</h1>
                <div id='login-form-logo'></div>
            </header>
            <div id='login-form-wrapper'>
                <div id='login-form-inputs'>
                    <input type='text' name='login-form-username' id='login-form-username' className='login-form-input' placeholder='Nom d&#39;utilisateur' onInput={(e) => {setUsernameInput(e.target.value)}} />
                    <div id="login-form-password-wrapper">
                        <input type={passwordVisibility ? 'text' : 'password'} name='login-form-password' id='login-form-password' className='login-form-input' placeholder='Mot de passe' onInput={(e) => {setPasswordInput(e.target.value)}} />
                        {passwordVisibility ? <AiOutlineEyeInvisible className='login-form-password-vistoggle' onClick={handlePasswordVisibility} /> : <AiOutlineEye className='login-form-password-vistoggle' onClick={handlePasswordVisibility} />}
                    </div>
                </div>
                <div id='login-form-actions'>
                    <div id='login-form-keepsigned-wrapper'>
                        <input type='checkbox' name='login-form-keepsigned' id='login-form-keepsigned' checked={keepSigned} onChange={handleKeepSignedChange} />
                        <label htmlFor='login-form-keepsigned'>Rester authentifi&eacute;</label>
                    </div>
                    <div id={`login-form-submit${buttonActivated ? '' : '-grayedout'}`} onClick={() => handleFormSubmit()}>
                        <span id="login-form-submit-text">S&#39;authentifier</span>
                    </div>
                    <div id={`login-form-submit-status${authStatus}`}>
                        <BiErrorCircle />
                        <span id="login-form-submit-status-text">Les identifiants sont erron&eacute;s</span>
                    </div>
                </div>
            </div>
        </div>
    )
}