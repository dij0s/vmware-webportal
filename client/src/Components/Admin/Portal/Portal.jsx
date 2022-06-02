import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie'

import { generateVMtemplate, TEMPLATES } from '../../../Templates/VMwareTemplate.tsx'

import { BiUser } from 'react-icons/bi'
import { RiArrowDropDownLine } from 'react-icons/ri'

import './Portal.css'

export default function Portal() {
    const [cookies, setCookie, removeCookies] = useCookies()
    const [username, setUsername] = useState('')
    
    const V_API_SID = cookies['v-api-sid']
    useEffect(() => {
        fetch(`${API_ROOT_ENDPOINT}/auth/userinformation`, { 
            method: 'GET',
            headers: { 
               'vmware-api-session-id': V_API_SID 
            } 
        }).then((data) => {
            if (data.status !== 401) { data.text().then((username) => setUsername(username)) } else { window.location.assign('/') }
        })
    }, [V_API_SID])

    const API_ROOT_ENDPOINT = '/api/v1'
       
    const [formInputs, setFormInputs] = useState([ {cn:'project', value:''}, {cn:'institut', value:''}, {cn: 'projectNumber', value:''}, {cn: 'unite', value:''}, {cn: 'responsableTechnique', value:''}, {cn: 'responsableMetier', value:''}, {cn: 'os', value:''}, {cn: 'description', value:''}, {cn: 'remarques', value:''} ])
    const [buttonActivated, setButtonActivated] = useState(false)

    const [dropdownActive, setDropdownActive] = useState(false)

    const handleFormInput = (e) => {
        const i = formInputs.findIndex((input) => input.cn === e.target.dataset.cn)
        setFormInputs([ 
            ...formInputs.slice(0, i),
            Object.assign({}, formInputs[i], { cn:e.target.dataset.cn, value:e.target.value }),
            ...formInputs.slice(i+1)]
        )
    }

    const handleDropdown = () => {
        setDropdownActive(!dropdownActive)
    }

    const handleLogout = () => {
        fetch(`${API_ROOT_ENDPOINT}/auth/logout`, {
            method: 'DELETE',
            headers: { 
                'vmware-api-session-id': V_API_SID,
            }
        }).then(() => {
            removeCookies('v-api-sid')
        })
    }

    useEffect(() => {
        const formCompletedStatus = formInputs.every((input) => input.value !== '')
        setButtonActivated(formCompletedStatus)
    }, [formInputs])

    const handleFormSubmit = () => {
        if (buttonActivated) {
            const institut = formInputs.at(formInputs.findIndex((item) => item.cn === 'institut')).value
            let site = ''
            if (institut === 'II') {site = 'BEL'} else {site = 'ENP'}

            const os = formInputs.at(formInputs.findIndex((item) => item.cn === 'os')).value
            const projectName = formInputs.at(formInputs.findIndex((item) => item.cn === 'project')).value.replace(/\s/g, '').toUpperCase()
            const vmDescription = formInputs.at(formInputs.findIndex((item) => item.cn === 'description')).value
            const vmRemarques = formInputs.at(formInputs.findIndex((item) => item.cn === 'remarques')).value
            const vmName = `V${os.charAt(0)}${site}${projectName}`
            const TLI = TEMPLATES[site][os]
            const HOST = TEMPLATES[site].HOST

            fetch(`${API_ROOT_ENDPOINT}/${HOST}/vmtemplate/library/deploy/${TLI}`, {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json'
                },
                body: generateVMtemplate(vmName, vmDescription, site)
            }).then((res) => {
                if(res.status === 200){
                    fetch(`${API_ROOT_ENDPOINT}/notify`, {
                        method: 'POST',
                        headers: { 
                            'vmware-api-session-id': V_API_SID,
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            user: username,
                            vm: vmName,
                            description: vmDescription,
                            remarques: vmRemarques
                        })
                    }).then(() => {
                        setCookie('v-last', vmName)
                        // window.location.assign('/confirmation')
                    })
                }
            }, (err) => {
                console.log(err)
            })
        }
    }

    return (
        <div id='request-portal'>
            <header id='request-portal-header'>
                <h1 id='request-portal-title'>Demande de cr&eacute;ation d&#39;une machine virtuelle</h1>
                <div id='request-portal-user-wrapper'>
                    <BiUser />
                    <span id='request-portal-user'>{username}</span>
                    <RiArrowDropDownLine id='request-portal-dropdown' onClick={() => {handleDropdown()}}/>
                    <div id={`request-portal-user-actions${dropdownActive ? '-active' : ''}`}>
                        <span id='request-portal-user-actions-logout' onClick={() => {handleLogout()}}>D&eacute;connexion</span>
                    </div>
                </div>
                <div id='request-portal-logo'></div>
            </header>
            <div id='request-wrapper'>
                <div id='request-form'>
                    <input type='text' data-cn='project' name='request-form-project' id='request-form-project' spellCheck='false' className='request-form-input' placeholder='Nom du projet' onInput={(e) => (handleFormInput(e))} />
                    <select data-cn='institut' name='request-form-institut' id='request-form-institut' className='request-form-select' defaultValue='' onInput={(e) => (handleFormInput(e))}>
                        <option value='' disabled>Institut</option>
                        <option value='II'>II</option>
                        <option value='SYND'>SYND</option>
                    </select>
                    <div id='request-form-project-details-wrapper'>
                        <input type='text' data-cn='projectNumber' name='request-form-project-numero' id='request-form-project-numero' spellCheck='false' className='request-form-input' placeholder='Num&eacute;ro de projet' onInput={(e) => (handleFormInput(e))} />
                        <input type='text' data-cn='unite' name='request-form-project-unite' id='request-form-project-unite' spellCheck='false' className='request-form-input' placeholder='Unit&eacute;' onInput={(e) => (handleFormInput(e))} />
                    </div>
                    <input type='text' data-cn='responsableTechnique' name='request-form-resp-technique' id='request-form-resp-technique' spellCheck='false' className='request-form-input' placeholder='Responsable technique' onInput={(e) => (handleFormInput(e))} />
                    <input type='text' data-cn='responsableMetier' name='request-form-resp-metier' id='request-form-resp-metier' spellCheck='false' className='request-form-input' placeholder='Responsable métier' onInput={(e) => (handleFormInput(e))} />
                    <select data-cn='os' name='request-form-os' id='request-form-os' className='request-form-select' defaultValue='' onInput={(e) => (handleFormInput(e))} >
                        <option value='' disabled>Syst&egrave;me d&#39;exploitation</option>
                        <option value='MS_TLI'>Microsoft Windows Server 2019</option>
                        <option value='LX_TLI'>Linux (Base Debian, Ubuntu Server 20.04)</option>
                    </select>                    
                </div>
                <div id='request-more-wrapper'>
                    <div id="request-details-wrapper">
                        <textarea  data-cn='description' name='request-form-description' id='request-form-description' className='request-form-textarea' placeholder='Description'  onInput={(e) => (handleFormInput(e))}></textarea>
                        <textarea  data-cn='remarques' name='request-form-remarques' id='request-form-remarques' className='request-form-textarea' placeholder='Remarques' onInput={(e) => (handleFormInput(e))}></textarea>
                    </div>
                    <div id={`request-form-submit${buttonActivated ? '' : '-grayedout'}`} onClick={() => (handleFormSubmit())}>
                        <span id='login-form-submit-text'>Soumettre la demande</span>
                    </div>
                </div>     
            </div>
        </div>
    )
}
