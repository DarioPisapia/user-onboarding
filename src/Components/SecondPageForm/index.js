import { useState } from "react"
import HowManyMoney from "../HowManyMoney/index.js"
import RadioAccredited from "../RadioAccredited"
import style from "./styles.css"


export default function SecondPageForm (){

    return(
        <>
        <div className="form">
            <p className="title" style={{marginTop: '20px', fontSize: '14px'}}>Ho much are you planning to invest in this year?</p> 
            <HowManyMoney />
            <p className="title" style={{marginTop: '20px', fontSize: '14px'}}>Are you an accredited investor?</p>
            <div className="radioPage2" >
               <RadioAccredited />
            </div>   
        </div>
        </>
    )
}


