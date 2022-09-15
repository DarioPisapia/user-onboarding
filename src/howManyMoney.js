import { useState } from "react";
import { handleInputFocus } from "./formComponent";
import {Slider} from '@material-ui/core'

export default function HowManyMoney(){
    const [money, setMoney] = useState({min: 10000, max: 50000})
    const [value, setValue] = useState([0, 20])

    function handleMin(e){
        setMoney({...money, min: e.target.value})
        setValue([value[0]=moneyToValue(e.target.value), value[1]])
    }

    function handleMax(e){
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
        let moneyMin = 0
        let moneyMax = 0
        switch(value[0]){
            case 0:
            moneyMin = 10000
                break
            case 20:
                moneyMin = 50000
                    break
            case 40:
                moneyMin = 100000  
                    break
            case 60:
                moneyMin = 200000
                    break 
            case 80:
                moneyMin = 500000
                    break
            case 100:
                moneyMin = 1000000
                    break
        }
        switch(value[1]){
            case 0:
                moneyMax = 10000
                break
            case 20:
                moneyMax = 50000
                    break
            case 40:
                moneyMax = 100000  
                    break
            case 60:
                moneyMax = 200000
                    break 
            case 80:
                moneyMax = 500000
                    break
            case 100:
                moneyMax = 1000000
                    break
        }
        setMoney({min: moneyMin, max: moneyMax})
    }



    return(
        <>  
        <div className="firstLine">
            <MinMoney handleMin={handleMin} money={money.min}/>
            <MaxMoney handleMax={handleMax} money={money.max}/>
        </div>
        <Slide value={value} setValue={setValue} handleValue={handleValue}/>
        </>     
    )
}

function MinMoney({handleMin, money}){
    const [active, setActive] = useState(true)
 
    const label = 'minMoneyLabel'
    const input = 'minMoney'
    return (
        <div >
            <label id="minMoneyLabel" for="name" className="labels" style={{marginTop: '10px'}}>From</label>
            <input onChange={handleMin} value={money} id="minMoney" className="name"
            onFocus={(e) => {setActive(false)
                handleInputFocus(active, label, input)}}
            onBlur={(e) => {setActive(true)
                handleInputFocus(active, label)}}>
            </input>
        </div>
    ) 
}

function MaxMoney({handleMax, money}){
    const [active, setActive] = useState(true)
    
    const label = 'maxMoneyLabel'
    const input = 'maxMoney'
    return (
        <div>
            <label id="maxMoneyLabel" for="name" className="labels" style={{marginTop: '10px'}}>To</label>
            <input onChange={handleMax} value={money} id="maxMoney" className="name"
            onFocus={(e) => {setActive(false)
                handleInputFocus(active, label, input)}}
            onBlur={(e) => {setActive(true)
                handleInputFocus(active, label)}}>

            </input>
        </div>
    ) 
}

function Slide({value, handleValue}){
    const customMarks = [{value: 0, label: '$10,000'},
                        {value: 20, label: '$50,000'},
                        {value: 40, label: '$100,000'},
                        {value: 60, label: '$200,000'},
                        {value: 80, label: '$500,000'},
                        {value: 100,label: '$1,000,000 +'},
                        ];

    return(
        <div className="sliderContainer">
            <Slider
                aria-label="Custom marks"
                valueLabelDisplay="off"
                step='20'
                value={value}
                onChange={handleValue}
                marks={customMarks}   
            />  
        </div> 
    )
}