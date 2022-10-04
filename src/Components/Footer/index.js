import styles from "./styles.css"

import backArrow from "../../img/BackArrow.png"
import whiteArrow from "../../img/whiteArrow.png"

export default function Footer ({ page, skip, back, onSubmit}){
                            
    
    return(
        <>
        <div className="footer">
            <a onClick={back}><img src={backArrow}/> {page === 1 ? ' Back to the homepage' : ' Back to the previous step'}</a>
            <div className="buttons">
                <button 
                    type="button" 
                    className={`skipButton ${page===3 ? "disabled" : ""}`}
                    onClick={skip}
                    disabled={page===3}
                >
                    Skip for now
                </button>
                <button 
                    type="button" 
                    className= "nextButton"
                    onClick={onSubmit}
                >
                    {page < 3 ? (<> Next step <img src={whiteArrow}/></>) : 'Finish'}
                </button>
            </div>
        </div>
        </>
    )
}