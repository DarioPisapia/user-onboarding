import { useState, useContext } from "react"
import styles from "./styles.css"
import CheckBox from "../CheckBox"
import { DataContext } from "../FormComponent"

export default function ThirdPageForm(){

    const [data, setData ] = useContext(DataContext)

    const [choices, setChoices] = useState([
        {label: 'Single family', active: false},
        {label: 'Residential multifamily', active: false},
        {label: 'Commercial retail', active: false},
        {label: 'Commercial industrial', active: false},
        {label: 'Commercial hospitality', active: false},
        {label: 'Commercial warehousing', active: false},
        {label: 'Commercial office', active: false},
        {label: 'Other', active: false},
    ])

    function handleCheckboxClick(label, active){

        const c = choices.map(obj => 
            label!==obj.label ? obj : {label: label, active: !active }
        )

        setChoices(c)
        
        const interests = c.map(obj => 
            obj.active ? obj.label : "").filter(i => i !== "")

        setData({...data, interestedIn : interests})
    }

    return (
        <div className="form">
            <p className="title" style={{marginTop: '20px', fontSize: '14px'}}>What kind of real estate are you interested in?</p>
            <div className="checkbox" >
                {choices.map((c, id) => (
                    <CheckBox 
                    label={c.label}
                    id={`box${id}`}
                    active={c.active}
                    onChange={handleCheckboxClick}
                    data={data}
                    />
                ))}
            </div>
        </div>
    )
}