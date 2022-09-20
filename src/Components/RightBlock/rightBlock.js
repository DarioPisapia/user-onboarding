import FormComponent from "./formComponent"
import arrow from "../../img/Arrow.png"
import backArrow from "../../img/BackArrow.png"
import whiteArrow from "../../img/whiteArrow.png"
import { useState } from "react"
import styles from "./rightBlock.css"
import validateFirstPage from "./FirstPage/validationFunctions.js"
/* import setPage from "../../App.js"
import page from "../../App.js" */
export default function RightBlock({page, setPage}){
    const [data, setData] = useState({name : "", prefix: "+39", phone: "", email: "", country:"", minMoney:"10000",
                                        maxMoney: "50000", accredited:"", interestedIn:[]})
/*     function handleNextClick() {
        page < 3 ? setPage(page+1) : alert(
            `Name: ${data.name}
Phone: ${data.prefix} ${data.phone}
Email: ${data.email}
Country: ${data.country}
Investment between ${data.minMoney}$ and ${data.maxMoney}$
Accredited: ${data.accredited}
Interests: ${data.interestedIn}  `)
        
    } */
    function handleNextClick(){
        if (page===1){
            if(validateFirstPage(data)){
               setPage(page+1) 
            }
        }
        if (page===2){
            /* ci andrà la validazione, per ora skippo */
            setPage(page+1)
        }
        if (page===3){
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

    const handleSkip = () => {
        page < 3 ? setPage(page+1) : alert('torna indietro non fare il furbo')
    }

    const handleBack = () => {
        page > 1 ? setPage(page - 1) : alert('occhio ad andare troppo indietro')
    }

    return(
        <>
        <div className="header">
            <span className="headerTextLeft">STEP {page} OF 3</span>
            <span className="headerRight">Lost or have trouble?
                <a href="https://www.youtube.com/watch?v=2Q_ZzBGPdqE" target="_blank"> Get help <img src={arrow}/></a> 
            </span>
        </div>
        <FormComponent page={page} data={data} setData={setData} />   
        <div className="footer">
            <a onClick={handleBack}><img src={backArrow}/> {page === 1 ? ' Back to the homepage' : ' Back to the previous step'}</a>
            <div className="buttons">
            <button type="button" className="skipButton" onClick={handleSkip}>Skip for now</button>
            <button type="button" className="nextButton" onClick={handleNextClick}>{page < 3 ? (<> Next step <img src={whiteArrow}/></>) : 'Finish'}</button>
            </div>
           
        </div>
        </>
        
    )
}





