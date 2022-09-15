import { useState } from "react"
import HowManyMoney from "./howManyMoney"

export default function SecondPageForm (){

    return(
        <>
        <div className="form">
            <p className="title" style={{marginTop: '20px', fontSize: '14px'}}>Ho much are you planning to invest in this year?</p> 
            <HowManyMoney />
            <p className="title" style={{marginTop: '20px', fontSize: '14px'}}>Are you an accredited investor?</p>
            <div className="radioPage2" >
                <RadioButton label="Yes" idBox="radio1"  />
                <RadioButton label="No"  idBox="radio2"/> 
               
            </div>   
        </div>
        </>
    )
}

function RadioButton({label, idBox}) {
    const [active, setActive] = useState(true)

    function onSelected(){
        setActive(!active)
        if (active){
           document.getElementById(idBox).classList.add("active") 
        }
        else{
            document.getElementById(idBox).classList.remove("active")
        }
    }

    return(
        <>
        <div className="radioButtonPage2" id={idBox}>
            <input id={label} type="radio"  value="yes" name="accredited" style={{margin: "0px 10px 0px 10px"}} 
            onFocus={onSelected} onBlur={onSelected}
            ></input>
            <label id="yesLabel" for="yes" className="radioText">{label}</label> 
        </div>
        </>
    )

}