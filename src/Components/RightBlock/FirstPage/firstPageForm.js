import { useState } from "react"
import arrow from "../../../img/Arrow.png"
import { handleInputFocus } from "../formComponent"
import italyFlag from "../../../img/flags/italyFlag.jpeg"
import usaFlag from "../../../img/flags/usaFlag.jpeg"

export default function FirstPageForm({data, setData}){
    return(
        <>
            <div className="form">
                <div className="firstLine">
                    <Name data={data} setData={setData}/>
                    <PhoneNumber data={data} setData={setData}/>
                </div>
                <Email data={data} setData={setData}/>
                <Country data={data} setData={setData} />
                <p className="title" style={{marginTop: '20px', fontSize: '14px'}}>Privacy policy</p>
                <p className="description">We know you care about how your personal information is used and shared, so we take your privacy seriously</p>
                <p className="privacy">Lost or have trouble?
                    <a href="https://www.youtube.com/watch?v=i6tRNyzRj88" target="_blank"> Expand privacy policy <img className="freccettasx" src={arrow}/></a> 
                </p>
            </div>
        </>
    )
}


function Name({data, setData}){
    const [active, setActive] = useState(false)

    function handleName(e){
        setData({...data, name: e.target.value})
    }

    return (
        <div >
            <label id="nameLabel" for="name" className={`labels ${active ? "activelabel" : ""}`}>Full name</label>
            <input id="name" className={`name ${active ? "active" : ""}`}
                onFocus={(e) => setActive(!active)}
                onBlur={(e) => setActive(!active)}
                onChange={handleName}
                value={data.name} 
                >
                </input>
        </div>
    ) 
}

function PhoneNumber({data, setData}){
    const [active, setActive] = useState(false)

    function handlePhone(e){
        setData({...data, phone: e.target.value})
    }

    return (
        <>
            <div className={`phoneNumber ${active ? "phoneActive" : ""}`} id="phone"
            onFocus={(e) => setActive(!active)}
            onBlur={(e) => setActive(!active)}
            >
                <label for="phone" className={`labels ${active ? "phonelabel" : ""}`} id='phones'>Phone number</label>
                <select className='flags'id='flags'
                onChange={(e) => {
                    setData({...data, prefix: e.target.value})
                }}
                >
                    <option value="+39" >Ita{<img src={italyFlag}/>}</option>{/* qui mettere le immagini */}
                    <option value="+1">U.S.A.<img src={usaFlag}/></option>
                </select>
                <span className="number">{data.prefix} </span>
                <input className='number' id='number' value={data.phone} onChange={handlePhone}
                ></input>
            </div>
        </>
        
    )
}

function Email({data, setData}){
    const [active, setActive] = useState(false)

    function handleMail(e){
        setData({...data, email: e.target.value})
    }

    return (
        <>
            <label for="email" className={`labels ${active ? "activelabel" : ""}`} id='emailLabel'>E-mail address</label>
            <input type="email" className={`email ${active ? "active" : ""}`} id='email'
            onFocus={(e) => setActive(!active)}
            onBlur={(e) => setActive(!active)}
            onChange={handleMail}
            value={data.email}
            >
                
            </input>
        </>
        
    )
}

function Country ({data, setData}) {
    const [active, setActive] = useState(false)

    function handleCountry(e){
        setData({...data, country: e.target.value})
    }

    return(
        <>
            <label for="country" className={`labels ${active ? "activelabel" : ""}`} id='countryLabel'>Country</label>
            <select className={`country ${active ? "active" : ""}`} id="country"
            onFocus={(e) => setActive(!active)}
            onBlur={(e) => setActive(!active)}
            onChange={handleCountry}
            >
                    <option value="italy">Italy</option>
                    <option value="usa">U.S.A</option>
                </select>
        </>
    )
    
}
