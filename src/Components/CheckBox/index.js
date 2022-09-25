import styles from "./styles.css"
import { useState } from "react"

export default function CheckBox ({ name, id, data, setData }) {
    const [active, setActive] = useState(false)

    function handleChange(e){
       if(data.interestedIn.includes(e.target.name)){  
        setData({...data, interestedIn: [data.interestedIn.filter(b => b!==e.target.name)]})
       } else{
        setData({...data, interestedIn: [...data.interestedIn, e.target.name]})
       }
       setActive(!active) 

    }

    return(
        <>
        <label for={id} className={`checkboxLabel ${active ? "activeCheck" : ""}`}>
            <input 
                type="checkbox"
                id={id}
                name={name}
                value={name}
                onChange={handleChange}
                ></input>
            {name}</label>
        </>
    )
}