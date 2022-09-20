import vector from "../../img/Vector.png"
import apex from "../../img/apex.png"


export function LeftBlockCenterSquare ({page}){
    return(
        <>
        <Tratts isActive = {page > 0} position = '37.15%' />
        <Tratts isActive = {page > 0} position = '39.15%' />
        <Tratts isActive = {page > 1} position = '45.65%' />
        <Tratts isActive = {page > 1} position = '47.65%' />
        <SquarePlusText isActive={page > 0} text='Contact details' position='32.9%' />
        <SquarePlusText isActive={page > 1} text='Investment plans' position='41.4%' />
        <SquarePlusText isActive={page > 2} text='Investment preferences' position='49.9%' />    
        </>
    )

}

export function LeftBlockQuote ({page}){
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

export function Tratts (props) {
if (props.isActive){
    return(
      <div className="tratt" style={{background:'#FFFFFF', top: props.position}}></div>  
    )
}else{
    return(
        <div className="tratt" style={{top: props.position}} ></div> 
)
}
}

export function SquarePlusText ({isActive, text, position}){
if (!isActive){
   return(
    <>
        <div className="lb-SqOut" style={{top: position}}></div>
        <div className="lb-text" style={{top: position}}>{text}</div>
    </>
    
   )
}else{
    return(
    <>
        <div className="lb-SqOut" style={{top: position, borderColor:"#FFFFFF"}}>
            <div className="lb-SqIn"></div>  
        </div>  
        <div className="lb-text" style={{top: position, color: '#FFFFFF'}}>{text}</div>
    </>
    )
}
}
