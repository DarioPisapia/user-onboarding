import { useState } from "react"
import styles from "./styles.css"
import CheckboxContainer from "../CheckboxContainer"

export default function ThirdPageForm({data, setData}){
    return (
        <div className="form">
    
            <p className="title" style={{marginTop: '20px', fontSize: '14px'}}>What kind of real estate are you interested in?</p>
            <CheckboxContainer data={data} setData={setData} />

        </div>
    )
}