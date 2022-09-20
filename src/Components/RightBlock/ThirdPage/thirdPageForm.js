import { useState } from "react"
import styles from "./thirdPage.css"

export default function ThirdPageForm({data, setData}){
    return (
        <div className="form">
    
            <p className="title" style={{marginTop: '20px', fontSize: '14px'}}>What kind of real estate are you interested in?</p>
            <Checkbox data={data} setData={setData} />

        </div>
    )
}

function Checkbox ({data, setData}){
    const choices = ['Single family', 'Residential multifamily', 'Commercial retail', 'Commercial industrial',
                    'Commercial hospitality', 'Commercial warehousing', 'Commercial office', 'Other']


    let boxes = choices.map((c, id) => {
        return(
            <Box 
                name={c}
                id={`box${id}`}
                data={data}
                setData={setData}
            />
        )
    })

    return(
        <div className="checkbox" >
            {boxes}
        </div>
    )
}

function Box ({ name, id, data, setData }) {
    const [active, setActive] = useState(false)

    function handleChange(e){
       if(data.interestedIn.includes(e.target.name)){
        setData({...data, interestedIn: [data.interestedIn.filter(b => b!==e.target.name)]})
       } else{
        setData({...data, interestedIn: [...data.interestedIn, e.target.name]})
       }
       setActive(!active) 

    }

    return(
        <>
        <label for={id} className={`checkboxLabel ${active ? "activeCheck" : ""}`}>
            <input 
                type="checkbox"
                id={id}
                name={name}
                value={name}
                onClick={handleChange}
                ></input>
            {name}</label>
        </>
    )
}