import { useState } from "react";
import styles from "./styles.css"

export default function Country ({data, setData}) {
    const [active, setActive] = useState(false)

    function handleCountry(e){
        setData({...data, country: e.target.value})
    }

    return(
        <>
            <label 
                for="country" 
                className={`labels ${active ? "activelabel" : ""}`} 
                id='countryLabel'
            >
                Country
            </label>
            <select 
                className={`country ${active ? "active" : ""}`} 
                id="country"
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