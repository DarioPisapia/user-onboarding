import { useState } from "react"
import arrow from "../../../img/Arrow.png"
import { handleInputFocus } from "../formComponent"
import italyFlag from "../../../img/flags/italyFlag.jpeg"
import usaFlag from "../../../img/flags/usaFlag.jpeg"
import  {Name, PhoneNumber, Email, Country} from "./firstPageComponents"
import style from "./firstPage.css"


export default function FirstPageForm({data, setData}){
    return(
        <>
            <div className="form">
                <div className="firstLine">
                    <Name data={data} setData={setData}/>
                    <PhoneNumber data={data} setData={setData}/>
                </div>
                <Email data={data} setData={setData}/>
                <Country data={data} setData={setData} />
                <p className="title" style={{marginTop: '20px', fontSize: '14px'}}>Privacy policy</p>
                <p className="description">We know you care about how your personal information is used and shared, so we take your privacy seriously</p>
                <p className="privacy">Lost or have trouble?
                    <a href="https://www.youtube.com/watch?v=i6tRNyzRj88" target="_blank"> Expand privacy policy <img className="freccettasx" src={arrow}/></a> 
                </p>
            </div>
        </>
    )
}
