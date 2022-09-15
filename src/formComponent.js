import { useState } from "react"
import arrow from "./img/Arrow.png"
import FirstPageForm from "./firstPageForm"
import SecondPageForm from "./secondPageForm"

export default function FormComponent({page}){
    if(page===1){
        return(
            <>
            <div className="titleDescription">
                <div className="title">Contact details</div>
                <div className="description">Welcome to United Properties, we are glad to see you! Let’s get started by letting us know a little bit about you</div>
            </div> 
            <FirstPageForm />
            </>
        )
    }

    if (page===2){
        return(
            <>
            <div className="titleDescription">
                <div className="title">Investment plans</div>
                <div className="description">Let us know about your investment plans. This will help us get you to the right expert who will help you further</div>
            </div> 
            <SecondPageForm />
                
            </>
        )


    }
}

export function handleInputFocus(active, label, input){
    const labelMod = document.getElementById(label)
    const inputMod = document.getElementById(input)
    if (active){
            labelMod.style.color = '#35A0EE'
            inputMod.style.caretColor = '#35A0EE'
    }
    else{
        labelMod.style.color = '#A4AEB4'
    }

}