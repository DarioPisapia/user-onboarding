import { useState } from "react"
import styles from "./styles.css"

import FirstPageForm from "../FirstPage/index"
import SecondPageForm from "../SecondPage/index"
import ThirdPageForm from "../ThirdPage/index"
import Footer from "../Footer"
import validateFirstPage from "../FirstPage/validationFunctions.js"
import validateSecondPage from "../SecondPage/validationFunctions.js"
import validateThirdPage from "../ThirdPage/validatationFunctions"

export default function FormComponent({ page, setPage }){

    const [data, setData] = useState({name : "", prefix: "+39", phone: "", email: "", country:"Italy", minMoney:"10000",
                                        maxMoney: "50000", accredited:"", interestedIn:[]})    
                                        
                                        
    function handleNextClick(){
        if (page===1){
            if(validateFirstPage(data)){
                setPage(page+1) 
            }
        }
        if (page===2){
            if(validateSecondPage(data))
            setPage(page+1)
        }
        if (page===3){
            if (validateThirdPage(data)){
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
        page < 3 ? setPage(page+1) : alert('torna indietro non fare il furbo')
    }

    const handleBack = () => {
        page > 1 ? setPage(page - 1) : alert('occhio ad andare troppo indietro')
    }
    
    if(page===1){
        return(
            <>
            <div className="titleDescription">
                <div className="title">Contact details</div>
                <div className="description">Welcome to United Properties, we are glad to see you! Let’s get started by letting us know a little bit about you</div>
            </div> 
            <FirstPageForm data={data} setData={setData} />
            <Footer page={page} skip={handleSkip} back={handleBack} onSubmit={handleNextClick} />
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
            <Footer page={page} skip={handleSkip} back={handleBack} onSubmit={handleNextClick}  />         
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
            <Footer page={page} skip={handleSkip} back={handleBack} onSubmit={handleNextClick} />
            </>
        )
    }
}
