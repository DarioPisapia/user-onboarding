import { useState } from "react"
import RadioButton from "../RadioAccreditedButtons"

export default function RadioAccredited({data, setData}){
    const [active, setActive] = useState({"yes": false, "no": false})

    return(
        <>
            <RadioButton 
                label="Yes" 
                value="Yes" 
                active={active} 
                setActive={setActive} 
                data={data} 
                setData={setData}
            />
            <RadioButton 
                label="No" 
                value="No" 
                active={active} 
                setActive={setActive} 
                data={data} 
                setData={setData}
            /> 
        </> 
    )
    
}
