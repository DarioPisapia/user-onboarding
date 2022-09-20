import { useState } from "react"
import HowManyMoney from "./howManyMoney"
import Radio from "./radio"
import style from "./secondPage.css"


export default function SecondPageForm ({data, setData}){

    return(
        <>
        <div className="form">
            <p className="title" style={{marginTop: '20px', fontSize: '14px'}}>Ho much are you planning to invest in this year?</p> 
            <HowManyMoney data={data} setData={setData} />
            <p className="title" style={{marginTop: '20px', fontSize: '14px'}}>Are you an accredited investor?</p>
            <div className="radioPage2" >
               <Radio data={data} setData={setData} />
            </div>   
        </div>
        </>
    )
}


