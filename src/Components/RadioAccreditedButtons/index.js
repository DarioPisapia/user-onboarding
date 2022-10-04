import styles from "./styles.css"
import { useState, useContext } from "react"
import { DataContext } from "../FormComponent"

export default function RadioButton ({label, onChange, value, active, setActive }){
    const [id] = useState(Math.random().toString().replace('.','-'))
    const [data, setData] = useContext(DataContext)

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
        <label for={id} className={`radioLabel ${data.accredited === value ? 'active' : ''}`}>
            <input 
                id={id}
                type="radio"
                value={value}
                name="accredited"
                style={{margin: "0px 10px 0px 10px"}} 
                onChange={onSelected}
                checked={data.accredited === value}
            >
            </input>
            {label}
        </label>
    )
}