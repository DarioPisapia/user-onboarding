import styles from "./styles.css"
import {Slider} from '@material-ui/core'

export default function SlideMoney({value, handleValue}){
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