import { useState } from "react"
import arrow from "./img/Arrow.png"
import { handleInputFocus } from "./formComponent"
import italyFlag from "./img/flags/italyFlag.jpeg"
import usaFlag from "./img/flags/usaFlag.jpeg"

export default function FirstPageForm(){
    return(
        <>
            <div className="form">
                <div className="firstLine">
                    <Name />
                    <PhoneNumber />
                </div>
                <Email />
                <Country />
                <p className="title" style={{marginTop: '20px', fontSize: '14px'}}>Privacy policy</p>
                <p className="description">We know you care about how your personal information is used and shared, so we take your privacy seriously</p>
                <p className="privacy">Lost or have trouble?
                    <a href="https://www.youtube.com/watch?v=i6tRNyzRj88" target="_blank"> Expand privacy policy <img className="freccettasx" src={arrow}/></a> 
                </p>
            </div>
        </>
    )
}


function Name(){
    const [active, setActive] = useState(true)
    
    const label = 'nameLabel'
    const input = 'name'
    return (
        <div >
            <label id="nameLabel" for="name" className="labels">Full name</label>
            <input id="name" className="name" onSelect
            onFocus={(e) => {setActive(false)
                handleInputFocus(active, label, input)}}
            onBlur={(e) => {
                setActive(true)
                handleInputFocus(active, label)}}></input>
        </div>
    ) 
}

function PhoneNumber(){
    const [active, setActive] = useState(true)
    const label = 'phones'
    const input = 'number'
    return (
        <>
            <div className="phoneNumber" id="phone">
                <label for="phone" className="labels" id='phones'>Phone number</label>
                <select className="flags" id='flags'
                onFocus={(e) => {setActive(false)
                    handleInputFocus(active, label)}}
                onBlur={(e) => {setActive(true)
                    handleInputFocus(active, label)}}
                >
                    <option value="italy">{<img src={italyFlag}/>}</option>
                    <option value="usa"><img src={usaFlag}/></option>
                </select>
                <input className="number" id='number'
                onFocus={(e) => {setActive(false)
                    handleInputFocus(active, label, input)}}
                onBlur={(e) => {setActive(true)
                    handleInputFocus(active, label)}}></input>
            </div>
        </>
        
    )
}

function Email(){
    const [active, setActive] = useState(true)
    const label = 'emailLabel'
    const input = 'email'
    return (
        <>
            <label for="email" className="labels" id='emailLabel'>E-mail address</label>
            <input type="email" className="email" id='email'
            onFocus={(e) => {setActive(false)
                handleInputFocus(active, label, input)}}
            onBlur={(e) => {setActive(true)
                handleInputFocus(active, label)}}
            ></input>
        </>
        
    )
}

function Country () {
    const [active, setActive] = useState(true)
    const label = 'countryLabel'
    const input = 'country'
    return(
        <>
            <label for="country" className="labels" id='countryLabel'>Country</label>
            <select className="country" id="country"
            onFocus={(e) => {setActive(false)
                handleInputFocus(active, label, input)}}
            onBlur={(e) => {setActive(true)
                handleInputFocus(active, label)}}>
                    <option value="italy">Italy</option>
                    <option value="usa">U.S.A</option>
                </select>
        </>
    )
    
}
