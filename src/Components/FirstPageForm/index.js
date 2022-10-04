import { useState } from "react"
import arrow from "../../img/Arrow.png"
import style from "./styles.css"
import Name from "../Name"
import PhoneNumber from "../PhoneNumber/index"
import Email from "../Email/index"
import Country from "../Country/index.js"

export default function FirstPageForm(){
    return(
        <>
            <div className="form">
                <div className="firstLine">
                    <Name />
                    <PhoneNumber />
                </div>
                <Email />
                <Country  />
                <p className="title" style={{marginTop: '20px', fontSize: '14px'}}>Privacy policy</p>
                <p className="description">We know you care about how your personal information is used and shared, so we take your privacy seriously</p>
                <p className="privacy">Lost or have trouble?
                    <a href="https://www.youtube.com/watch?v=i6tRNyzRj88" target="_blank"> Expand privacy policy <img className="freccettasx" src={arrow}/></a> 
                </p>
            </div>
        </>
    )
}
