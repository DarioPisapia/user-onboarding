import { useState, useContext } from "react";
import Money from "../Money/index";
import SlideMoney from "../SlideMoney/index";
import styles from "./styles.css"
import { DataContext } from "../FormComponent";

export default function HowManyMoney(){
    const [money, setMoney] = useState({min: 10000, max: 50000})
    const [value, setValue] = useState([0, 20])
    const [data, setData] = useContext(DataContext)

    function handleMin(e){
        setData({...data, minMoney: e.target.value})
        setMoney({...money, min: e.target.value})
        setValue([value[0]=moneyToValue(e.target.value), value[1]])
    }

    function handleMax(e){
        setData({...data, maxMoney: e.target.value})
        setMoney({...money, max: e.target.value})
        setValue([value[0], value[1]=moneyToValue(e.target.value)]) 
    }

    function handleValue (e, value){ 
        sliderToMoney(value)
        setValue(value)    
    }

    function moneyToValue(vmax){
        if(vmax<50000){
            return 0
        }
        if(vmax >= 50000 && vmax < 100000){
            return 20
        }
        if(vmax >= 100000 && vmax < 200000){
            return 40
        }
        if(vmax >= 200000 && vmax < 500000){
            return 60
        }
        if(vmax >= 500000 && vmax < 1000000){
            return 80
        }
        if(vmax >= 1000000){
            return 100
        }
    }

    function sliderToMoney(value){
        /* let moneyMin = 0
        let moneyMax = 0 */
        switch(value[0]){
            case 0:
            data.minMoney = 10000
                break
            case 20:
                data.minMoney = 50000
                    break
            case 40:
                data.minMoney = 100000  
                    break
            case 60:
                data.minMoney = 200000
                    break 
            case 80:
                data.minMoney = 500000
                    break
            case 100:
                data.minMoney = 1000000
                    break
        }
        switch(value[1]){
            case value[1]===data.maxMoney:
                break
            case 0:
                data.maxMoney = 10000
                break
            case 20:
                data.maxMoney = 50000
                    break
            case 40:
                data.maxMoney = 100000  
                    break
            case 60:
                data.maxMoney = 200000
                    break 
            case 80:
                data.maxMoney = 500000
                    break
            case 100:
                data.maxMoney = 1000000
                    break
        }
        /* setMoney({min: moneyMin, max: moneyMax}) */
    }



    return(
        <>  
        <div className="firstLine">
            <Money handleMinOrMax={handleMin} value={data.minMoney} id="minMoney" name="From"/>
            <Money handleMinOrMax={handleMax} value={data.maxMoney} id="maxMoney" name="To"/>
        </div>
        <SlideMoney value={value} setValue={setValue} handleValue={handleValue}/>
        </>     
    )
}