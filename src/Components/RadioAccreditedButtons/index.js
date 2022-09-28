import styles from "./styles.css"
import { useState } from "react"

export default function RadioButton ({label, onChange, value, active, setActive, data, setData}){
    const [id] = useState(Math.random().toString().replace('.','-'))


    function onSelected(e){
        const update = {"Yes": !active['Yes'], "No": !active['No']}
        setData({...data, accredited: e.target.value})

        if (active['Yes'] === active['No']){
            if (value==="Yes") {
                setActive({...active, "Yes": true})
                onChange({...active, "Yes": true})
            }else{
                setActive({...active, "No": true})
                onChange({...active, "No": true})
            }
        }else{
            setActive(update)
            onChange(update) 
        }
    }

    return(
        <label for={id} className={`radioLabel ${active[value] ? 'active' : ''}`}>
            <input 
                id={id}
                type="radio"
                value={value}
                name="accredited"
                style={{margin: "0px 10px 0px 10px"}} 
                onChange={onSelected}
                checked={active[value]}
            >
            </input>
            {label}
        </label>
    )
}