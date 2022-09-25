import styles from "./styles.css"
import CheckBox from "../CheckBox"

export default function CheckboxContainer ({data, setData}){
    const choices = ['Single family', 'Residential multifamily', 'Commercial retail', 'Commercial industrial',
                    'Commercial hospitality', 'Commercial warehousing', 'Commercial office', 'Other']


    let boxes = choices.map((c, id) => {
        return(
            <CheckBox 
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
