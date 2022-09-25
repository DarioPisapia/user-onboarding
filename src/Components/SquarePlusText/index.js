import styles from "./styles.css"


export default function SquarePlusText ({isActive, text, position}){
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