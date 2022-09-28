import { useState } from "react"
import styles from "./styles.css"

export default function Name({data, setData}){
    const [active, setActive] = useState(false)

    function handleName(e){
        setData({...data, name: e.target.value})
    }

    return (
        <div >
            <label 
                id="nameLabel" 
                for="name" 
                className={`labels ${active ? "activelabel" : ""}`}
            >
                Full name
            </label>
            <input 
                id="name" 
                className={`name ${active ? "active" : ""}`}
                onFocus={(e) => setActive(!active)}
                onBlur={(e) => setActive(!active)}
                onChange={handleName}
                value={data.name} 
            >
            </input>
        </div>
    ) 
}