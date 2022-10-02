import { Route, Routes } from "react-router-dom"
import FullPage from "./Components/FullPage"



export default function App() {
    return (
        <Routes>
            <Route path="/" element={<FullPage page={1}/>} />
            <Route path="/step2" element={<FullPage page={2} />} />
            <Route path="/step3" element={<FullPage page={3} />} />
        </Routes>
    
    )
}

