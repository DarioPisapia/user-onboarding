

export default function validateThirdPage(data){
    if(data.interestedIn.length===0){
        return alert('Please select your investment preferences')
    }else{
        return true
    }
}