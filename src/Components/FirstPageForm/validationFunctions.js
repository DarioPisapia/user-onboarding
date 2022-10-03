
export default function validateFirstPage(data){
    if(vName(data.name)){
        if(vPhone(data.phone)){
            if(vMail(data.email)){
                return true
            }else{
                alert('Email not valid')
                return false
            }
        }else{
            alert('Phone number not valid')
            return false
        }
    }else{
        alert('Name not valid')
        return false
    }
}

function vName (vName) {
    return /^[A-Za-z\s']{3,}$/.test(vName)
}

function vPhone(vNum){
    return /^[0-9]{6,}$/.test(vNum)
}
function vMail(vMail){
    return /^[a-z0-9.]{3,}[@]{1}[a-z0-9]+[.]{1}[a-z]*$/.test(vMail)
}