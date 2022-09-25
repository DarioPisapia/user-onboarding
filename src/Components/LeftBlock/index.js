import united from "../../img/UNITED.png"
import properties from "../../img/PROPERTIES.png"
import styles from "./styles.css"
import LeftBlockCentralSquare from "../CentralSquare/index.js"
import LeftBlockQuote from "../Quote/index.js"
export default function LeftBlock ({page}) {
    return (
        <>
        <div className="logo">
            <span ><img className="united"src={united}></img><img className="properties"src={properties}></img></span>
            <span ></span>
        </div>
        <LeftBlockCentralSquare page={page}/>
        <LeftBlockQuote page={page}/>
        </>
        
    )
}
