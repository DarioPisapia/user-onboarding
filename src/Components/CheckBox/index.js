import styles from "./styles.css"


export default function CheckBox ({ label, id, active, onChange, data}) {

    
    return(
        <>
        <label for={id} className={`checkboxLabel ${data.interestedIn.includes(label) ? "activeCheck" : ""}`}>
            <input 
                type="checkbox"
                id={id}
                value={label}
                onClick={e => onChange(label, active)}
                checked={data.interestedIn.includes(label)}
                >
            </input>
            {label}
        </label>
        </>
    )
}