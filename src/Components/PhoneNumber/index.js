import { useState } from "react"
import italyFlag from "../../img/flags/italyFlag.jpeg"
import usaFlag from "../../img/flags/usaFlag.jpeg"
import styles from "./styles.css"


export default function PhoneNumber({data, setData}){
    const [active, setActive] = useState(false)

    function handlePhone(e){
        setData({...data, phone: e.target.value})
    }

    return (
        <>
            <div 
                className={`phoneNumber ${active ? "phoneActive" : ""}`} id="phone"
                onFocus={(e) => setActive(!active)}
                onBlur={(e) => setActive(!active)}
            >
                <label 
                    for="phone" 
                    className={`labels ${active ? "phonelabel" : ""}`} 
                    id='phones'
                    >
                    Phone number
                </label>
                <select 
                    className='flags'
                    id='flags'
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