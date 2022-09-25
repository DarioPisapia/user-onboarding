import styles from "./styles.css"
import CheckBox from "../CheckBox"
import { useState } from "react"

export default function CheckboxContainer ({ onChange, choices }){

    let boxes = choices.map((c, id) => {
        return(
            <CheckBox 
                label={c.label}
                id={`box${id}`}
                active={c.active}
                onChange={onChange}
            />
        )
    })

    return(
        <div className="checkbox" >
            {boxes}
        </div>
    )
}
