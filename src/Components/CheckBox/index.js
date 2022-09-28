import styles from "./styles.css"


export default function CheckBox ({ label, id, active, onChange}) {

    return(
        <>
        <label for={id} className={`checkboxLabel ${active ? "activeCheck" : ""}`}>
            <input 
                type="checkbox"
                id={id}
                value={label}
                onClick={e => onChange(label, active)}
                checked={active}
                >
            </input>
            {label}
        </label>
        </>
    )
}