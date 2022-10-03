import validateFirstPage from "../FirstPageForm/validationFunctions"
import validateSecondPage from "../SecondPageForm/validationFunctions"

export default function validateThirdPage(data){
    if (validateFirstPage(data)){
        if(validateSecondPage(data)){
            if(data.interestedIn.length===0){
                return alert('Please select your investment preferences')
            }else{
                return true
            }
        }else{
            alert('Fill all the second page required fields before continue')
        }
    }else{
        alert('Fill all the first page required fields before continue')
    } 
} 