import styles from "./styles.css"

export default function DropdownItem({id, img, value, onClick}){
    return(
        <div 
            id={id}
            className="dropdown-item" 
            value="+39" 
            onClick={e => onClick(value, img)}
        >
            {<img src={img}/>}
        </div>
    )
}