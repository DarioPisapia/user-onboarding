import Tratts from "../Tratts/index.js"
import SquarePlusText from "../SquarePlusText/index.js"

export default function LeftBlockCentralSquare ({page}){
    return(
        <>
            <Tratts isActive = {page > 0} position = '37.15%' />
            <Tratts isActive = {page > 0} position = '39.15%' />
            <Tratts isActive = {page > 1} position = '45.65%' />
            <Tratts isActive = {page > 1} position = '47.65%' />
            <SquarePlusText isActive={page > 0} text='Contact details' position='32.9%' />
            <SquarePlusText isActive={page > 1} text='Investment plans' position='41.4%' />
            <SquarePlusText isActive={page > 2} text='Investment preferences' position='49.9%' />    
        </>
    )

}