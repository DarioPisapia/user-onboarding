import FormComponent from "../FormComponent/index"
import arrow from "../../img/Arrow.png"
import { useState } from "react"
import styles from "./styles.css"

export default function RightBlock({page, setPage}){


    return(
        <>
        <div className="header">
            <span className="headerTextLeft">STEP {page} OF 3</span>
            <span className="headerRight">Lost or have trouble?
                <a href="https://www.youtube.com/watch?v=2Q_ZzBGPdqE" target="_blank"> Get help <img src={arrow}/></a> 
            </span>
        </div>
        <FormComponent page={page} setPage={setPage}/>   
        </>
        
    )
}





