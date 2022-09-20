import { useState } from "react"
import LeftBlock  from "./Components/LeftBlock/leftBlock.js"
import RightBlock from "./Components/RightBlock/rightBlock.js"

export default function App() {
    const [page, setPage] = useState(1)
    return (
        <div className="innerBlock">
            <div className="leftBlock">
                <LeftBlock page={page}/>
            </div>
            <div className="rightBlock">
                <RightBlock page={page} setPage={setPage}/>
            </div>
        </div>
        
    )
}

