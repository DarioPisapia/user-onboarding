import styles from "./styles.css"

export default function Tratts (props) {
    if (props.isActive){
        return(
        <div className="tratt" style={{background:'#FFFFFF', top: props.position}}></div>  
        )
    }else{
        return(
            <div className="tratt" style={{top: props.position}} ></div> 
        )
    }
}



