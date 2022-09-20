import { useState } from "react"

import FirstPageForm from "./FirstPage/firstPageForm"
import SecondPageForm from "./SecondPage/secondPageForm"
import ThirdPageForm from "./ThirdPage/thirdPageForm"

export default function FormComponent({page, data, setData}){
    if(page===1){
        return(
            <>
            <div className="titleDescription">
                <div className="title">Contact details</div>
                <div className="description">Welcome to United Properties, we are glad to see you! Let’s get started by letting us know a little bit about you</div>
            </div> 
            <FirstPageForm data={data} setData={setData} />
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
            <SecondPageForm  data={data} setData={setData}/>      
            </>
        )
    }

    if (page===3){
        return(
            <>
            <div className="titleDescription">
                <div className="title">Investment preferences</div>
                <div className="description">This will help us figure out what your investment option are so that we can show you only possibly intresting for you deals</div>
            </div> 
            <ThirdPageForm data={data} setData={setData}/>
            </>
        )
    }
}
