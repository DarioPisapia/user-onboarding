import styles from "./styles.css"
import { useState } from "react"

export default function Money ({handleMinOrMax, value, id, name}) {
    const [active, setActive] = useState(false)

    return (
        <div >
            <label id="minMoneyLabel" for="name" className={`labels ${active ? 'activelabel' : ''}`}  style={{marginTop: '10px'}}>{name}</label>
            <input 
                onChange={handleMinOrMax} 
                value={value} 
                id={id} 
                className={`name ${active ? 'active' : ''}`}
                onFocus={(e) => setActive(!active)}
                onBlur={(e) => setActive(!active)} 
            >
            </input>
        </div>
    ) 
}
