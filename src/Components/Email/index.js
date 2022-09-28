import { useState } from "react"
import styles from "./styles.css"

export default function Email({data, setData}){
    const [active, setActive] = useState(false)

    function handleMail(e){
        setData({...data, email: e.target.value})
    }

    return (
        <>
            <label
                for="email" 
                className={`labels ${active ? "activelabel" : ""}`} 
                id='emailLabel'
            >
                E-mail address
            </label>
            <input 
                type="email" 
                className={`email ${active ? "active" : ""}`} id='email'
                onFocus={(e) => setActive(!active)}
                onBlur={(e) => setActive(!active)}
                onChange={handleMail}
                value={data.email}
            >
            </input>
        </>      
    )
}
