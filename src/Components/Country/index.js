import { useState, useContext } from "react";
import styles from "./styles.css"
import { DataContext } from "../FormComponent";

export default function Country () {
    const [active, setActive] = useState(false)
    const [data, setData] = useContext(DataContext)

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