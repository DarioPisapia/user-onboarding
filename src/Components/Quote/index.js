import vector from "../../img/Vector.png"
import apex from "../../img/apex.png"
import styles from "./styles.css"


export default function LeftBlockQuote ({page}){
    let text = "We care about your time, that's why we created a 3-stage onboarding that will not take more than 5 minutes to complete"
    let author = "William Mac"
    let role = "CO-FOUNDER, INVESTOR"
    if (page === 2){
        text = "Save from thousands to millions on your deal. Secure the best possible. And get independent, unbiased advice for free"
        author = "Jodie Sears"
        role = "UNITEDPROPERTIES’ AGENT"
    }
    if (page===3){
        text = "United Properties is about fast & easy searching, buying, selling and investing ever — online, with an expert by our side"
        author = "Ollie Mcmahon"
        role = "MANAGING DIRECTOR"
    }
    return(
        <>
        <div className="lb-bottomsquare">
            <img className="lb-vector" src={vector}></img>
            <p className="lb-quotetext">{text}
            <p></p>
            <span className="lb-quoteAuthor">{author}</span>
            <br></br>
            {role}
            </p>
            <div className="UP">U<span style={{color: '#2696E8'}}>P</span></div>
        </div>
        
        <div className="lb-quotesquare"><img src={apex}></img></div>
        
        
        </>
    )
}