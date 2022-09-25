import styles from "./styles.css"
import { useState } from "react"

export default function Money ({handleMinOrMax, value}) {
    const [active, setActive] = useState(false)

    return (
        <div >
            <label id="minMoneyLabel" for="name" className={`labels ${active ? 'activelabel' : ''}`}  style={{marginTop: '10px'}}>From</label>
            <input onChange={handleMinOrMax} value={value} id="minMoney" className={`name ${active ? 'active' : ''}`}
            onFocus={(e) => setActive(!active)}
            onBlur={(e) => setActive(!active)}
            
            >
            </input>
        </div>
    ) 
}
