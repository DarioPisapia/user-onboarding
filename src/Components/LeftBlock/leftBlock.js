import united from "../../img/UNITED.png"
import properties from "../../img/PROPERTIES.png"
import styles from "./leftBlock.css"
import { LeftBlockCenterSquare, LeftBlockQuote } from "./components"
export default function LeftBlock ({page}) {
    return (
        <>
        <div className="logo">
            <span ><img className="united"src={united}></img><img className="properties"src={properties}></img></span>
            <span ></span>
        </div>
        <LeftBlockCenterSquare page={page}/>
        <LeftBlockQuote page={page}/>
        </>
        
    )
}
