import { useState } from "react"
import LeftBlock  from "./Components/LeftBlock/index"
import RightBlock from "./Components/RightBlock/index.js"

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

