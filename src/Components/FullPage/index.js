import { useState } from "react";
import LeftBlock from "../LeftBlock";
import RightBlock from "../RightBlock";
import styles from "./styles.css"

export default function FullPage ( {page} ){
    return(
        <div className="innerBlock">
            <div className="leftBlock">
                <LeftBlock page={page}/>
            </div>
            <div className="rightBlock">
                <RightBlock page={page} />
            </div>
        </div>
    )
}