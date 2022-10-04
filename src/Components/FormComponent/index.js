import { useState, createContext } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./styles.css"

import FirstPageForm from "../FirstPageForm/index"
import SecondPageForm from "../SecondPageForm/index"
import ThirdPageForm from "../ThirdPageForm/index"
import Footer from "../Footer"
import validateFirstPage from "../FirstPageForm/validationFunctions.js"
import validateSecondPage from "../SecondPageForm/validationFunctions.js"
import validateThirdPage from "../ThirdPageForm/validatationFunctions"

export const DataContext = createContext()

export default function FormComponent({ page }){

    const [data, setData] = useState({
        name : "",
        prefix: "+39", 
        phone: "", 
        email: "", 
        country:"Italy", 
        minMoney:"10000",
        maxMoney: "50000",
        accredited:"", 
        interestedIn:[]})  
                                        
    const navigate = useNavigate()   

    const handleObj = [
        {"path": "/home"},
        {"path": "/", "action": validateFirstPage},
        {"path": "/step2", "action": validateSecondPage},
        {"path": "/step3", "action": validateThirdPage},
    ] 

    function handleNextClick(){
        if(page < handleObj.length - 1){
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
         navigate(handleObj[page + 1]["path"])
    }

    const handleBack = () => {
        page > 1 ? navigate(handleObj[page - 1]["path"]) : alert("Home page under construction")
    }

    return(
        <>  
        <DataContext.Provider value={[data, setData]}>
            <div className="titleDescription">
                <div className="title">Investment preferences</div>
                <div className="description">This will help us figure out what your investment option are so that we can show you only possibly intresting for you deals</div>
            </div> 
            {page===1 && <FirstPageForm />}
            {page===2 && <SecondPageForm />}
            {page===3 && <ThirdPageForm />}
            <Footer page={page} skip={handleSkip} back={handleBack} onSubmit={handleNextClick}/>
        </DataContext.Provider>
        </>
    )
}
