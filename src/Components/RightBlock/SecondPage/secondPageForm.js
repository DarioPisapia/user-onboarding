import { useState } from "react"
import HowManyMoney from "./howManyMoney"
import style from "./secondPage.css"

export default function SecondPageForm ({data, setData}){

    return(
        <>
        <div className="form">
            <p className="title" style={{marginTop: '20px', fontSize: '14px'}}>Ho much are you planning to invest in this year?</p> 
            <HowManyMoney data={data} setData={setData} />
            <p className="title" style={{marginTop: '20px', fontSize: '14px'}}>Are you an accredited investor?</p>
            <div className="radioPage2" >
               <Radio data={data} setData={setData} />
            </div>   
        </div>
        </>
    )
}



function Radio({data, setData}){
    const [active, setActive] = useState({"yes": false, "no": false})

    return(
        <>
        <RadioButton label="Yes" value="Yes" active={active} setActive={setActive} data={data} setData={setData}/>
        <RadioButton label="No" value="No" active={active} setActive={setActive} data={data} setData={setData}/> 
        </> 
    )
    
}

function RadioButton ({label, onChange, value, active, setActive, data, setData}){
    const [id] = useState(Math.random().toString().replace('.','-'))


    function onSelected(e){
        const update = {"Yes": !active['Yes'], "No": !active['No']}
        setData({...data, accredited: e.target.value})
        /* 
        perchè non funziona scritta così?

        const firstUpdate = {...active, value: true}
        
        non riesco a passare value qui dentro e mi tocca fare il macello con gli if...

        si lo so, potrei risparmiarmelo facendo partire già un pulsante attivo...ma che ci vuoi fare?
     */
        
        if (active['Yes'] === active['No']){
            if (value==="Yes") {
                setActive({...active, "Yes": true})
                onChange({...active, "Yes": true})
            }else{
                setActive({...active, "No": true})
                onChange({...active, "No": true})
            }
        }else{
            setActive(update)
            onChange(update) 
        }
    }

    return(
        <label for={id} className={`radioLabel ${active[value] ? 'active' : ''}`}>
            <input 
            id={id}
            type="radio"
            value={value}
            name="accredited"
            style={{margin: "0px 10px 0px 10px"}} 
            onChange={onSelected}
            checked={active[value]}
            ></input>
            {label}
        </label>
    )
}