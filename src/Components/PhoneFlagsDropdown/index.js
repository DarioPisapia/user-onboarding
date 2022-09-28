import styles from "./styles.css"
import arrowDown from "../../img/dropdown-arrow-icon.png"
import DropdownItem from "../DropdownItems"


export default function PhoneFlagsDropdown ({ onChange, flagShown, flags, dropdownActive, setDropdownActive }){

    const dropd = flags.map((d, id) => {
        return (
            <DropdownItem 
                id={`flag${id}`}
                img={d.img}
                value={d.value}
                onClick={onChange}
            />
            )  
        }
    )

    return(
        <div className="dropdown">
            <div className="dropdown-btn" onClick={e => setDropdownActive(!dropdownActive)}>
                <img src={flagShown} className="flagShown"/>
                <img src={arrowDown} className="arrowDown"></img>
            </div>
            {dropdownActive && (
                <div className="dropdown-content">
                    {dropd}
                </div>
            )}      
        </div>
    )
}


