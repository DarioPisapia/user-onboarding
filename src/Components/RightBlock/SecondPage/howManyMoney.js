import { useState } from "react";
import { handleInputFocus } from "../formComponent";
import {Slider} from '@material-ui/core'

export default function HowManyMoney({data, setData}){
    const [money, setMoney] = useState({min: 10000, max: 50000})
    const [value, setValue] = useState([0, 20])

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
        let moneyMin = 0
        let moneyMax = 0
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
        setMoney({min: moneyMin, max: moneyMax})
    }



    return(
        <>  
        <div className="firstLine">
            <MinMoney handleMin={handleMin} money={money.min} data={data} setData={setData} value={data.minMoney} />
            <MaxMoney handleMax={handleMax} money={money.max} data={data} setData={setData} value={data.maxMoney}/>
        </div>
        <Slide value={value} setValue={setValue} handleValue={handleValue}/>
        </>     
    )
}

function MinMoney({handleMin, money, data}){
    const [active, setActive] = useState(false)
 
   

    return (
        <div >
            <label id="minMoneyLabel" for="name" className={`labels ${active ? 'activelabel' : ''}`}  style={{marginTop: '10px'}}>From</label>
            <input onChange={handleMin} value={data.minMoney} id="minMoney" className={`name ${active ? 'active' : ''}`}
            onFocus={(e) => setActive(!active)}
            onBlur={(e) => setActive(!active)}
            
            >
            </input>
        </div>
    ) 
}

function MaxMoney({handleMax, money, data, setData}){
    const [active, setActive] = useState(false)
    
    return (
        <div>
            <label id="maxMoneyLabel" for="name" className={`labels ${active ? 'activelabel' : ''}`} style={{marginTop: '10px'}}>To</label>
            <input onChange={handleMax} value={data.maxMoney} id="maxMoney" className={`name ${active ? 'active' : ''}`}
            onFocus={(e) => setActive(!active)}
            onBlur={(e) => setActive(!active)}>
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
        <div className="sliderContainer" style={{marginTop: '20px', marginLeft: '6px'}}>
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