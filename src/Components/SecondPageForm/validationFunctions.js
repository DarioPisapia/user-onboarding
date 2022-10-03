

export default function validateSecondPage(data){
    if(vNum(data.minMoney, data.maxMoney)){
        if (vOrder(data.minMoney, data.maxMoney)){
            if(vAccredited(data.accredited)){
                return true
            }else{
                alert('Are you accredited? Please select an option.')
                return false
            }
        }else{
            alert('Mininum value is higher than maximum')
            return false
        }
    }else{
        alert('insert only number as minimum and maximum')
        return false
    }
}

function vNum(min, max){
    if(/^[0-9]*$/.test(min) && /^[0-9]*$/.test(max)){
        return true
    }
}

function vOrder(min, max){
    return min < max
}

function vAccredited(acc){
    return acc!==""
}