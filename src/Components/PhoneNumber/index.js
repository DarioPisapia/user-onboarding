import { useState } from "react"
import PhoneFlagsDropdown from "../PhoneFlagsDropdown"
import italyFlag from "../../img/flags/italyFlag.jpeg"
import usaFlag from "../../img/flags/usaFlag.jpeg"
import styles from "./styles.css"


export default function PhoneNumber({data, setData}){
    const [active, setActive] = useState(false)
    const [flagShown, setFlagShown] = useState(italyFlag)
    const [dropdownActive, setDropdownActive] = useState(false)

    const flags = [
        {img: italyFlag, value: '+39'},
        {img: usaFlag, value: '+1'}
    ]

    function handlePhone(e){
        setData({...data, phone: e.target.value})
    }

    function handleFlagSelection(value, img){
        setDropdownActive(!dropdownActive)
        setFlagShown(img)
        setData({...data, prefix: value})
    }

    return (
        <>
            <div 
                className={`phoneNumber ${active || dropdownActive ? "phoneActive" : ""}` /* || `phoneNumber ${dropdownActive ? "phoneActive" : ""}` */} 
                id="phone"
                onFocus={(e) => setActive(!active)}
                onBlur={(e) => setActive(!active)}
            >
                <label 
                    for="phone" 
                    className={`labels ${active ||dropdownActive ? "activelabel" : ""}`}
                    id='phones'
                    >
                    Phone number
                </label>
                <PhoneFlagsDropdown
                    flags={flags}
                    onChange={handleFlagSelection}
                    flagShown={flagShown}
                    dropdownActive={dropdownActive}
                    setDropdownActive={setDropdownActive}
                />

                <span className="number">{data.prefix} </span>
                <input className='number' id='number' value={data.phone} onChange={handlePhone}
                ></input>
            </div>
        </>     
    )
}