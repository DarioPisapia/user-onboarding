import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./styles.css"

import FirstPageForm from "../FirstPageForm/index"
import SecondPageForm from "../SecondPageForm/index"
import ThirdPageForm from "../ThirdPageForm/index"
import Footer from "../Footer"
import validateFirstPage from "../FirstPageForm/validationFunctions.js"
import validateSecondPage from "../SecondPageForm/validationFunctions.js"
import validateThirdPage from "../ThirdPageForm/validatationFunctions"

export default function FormComponent({ page }){

    const [data, setData] = useState({name : "", prefix: "+39", phone: "", email: "", country:"Italy", minMoney:"10000",
                                        maxMoney: "50000", accredited:"", interestedIn:[]})    
                                        
    const navigate = useNavigate()   

    /* i have tried to make the handle functions (nextClick, skip, back) more abstract possibile using this obj. 
    So if in the future i'll need a lot of pages i'll only have to modify this obj */
    const handleObj = [
        {"path": "You can't go back more than this"},
        {"path": "/", "action": validateFirstPage},
        {"path": "/step2", "action": validateSecondPage},
        {"path": "/step3", "action": validateThirdPage},
        {"path": "You can't skip this"}
    ] 

    function handleNextClick(){
        if(page < handleObj.length - 2){
            if (handleObj[page]["action"](data)){
              navigate(handleObj[page + 1]["path"])  
            }       
        }else{
            if (handleObj[page]["action"](data)){
                alert(
                    `Name: ${data.name}
                    Phone: ${data.prefix} ${data.phone}
                    Email: ${data.email}
                    Country: ${data.country}
                    Investment between ${data.minMoney}$ and ${data.maxMoney}$
                    Accredited: ${data.accredited}
                    Interests: ${data.interestedIn}  `)
            }       
        }
    }

    const handleSkip = () => { 
        page < 3 ? navigate(handleObj[page + 1]["path"]) : alert(handleObj[handleObj.length - 1]["path"])
    }

    const handleBack = () => {
        page > 1 ? navigate(handleObj[page - 1]["path"]) : alert(handleObj[0]["path"])
    }
    
    if(page===1){
        return(
            <>
            <div className="titleDescription">
                <div className="title">Contact details</div>
                <div className="description">Welcome to United Properties, we are glad to see you! Let’s get started by letting us know a little bit about you</div>
            </div> 
            <FirstPageForm data={data} setData={setData} />
            <Footer page={page}  skip={handleSkip} back={handleBack} onSubmit={handleNextClick}  />
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
            <Footer page={page} skip={handleSkip} back={handleBack} onSubmit={handleNextClick}/>         
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
            <Footer page={page} skip={handleSkip} back={handleBack} onSubmit={handleNextClick}/>
            </>
        )
    }
}
