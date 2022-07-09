console.log('this challenge based on confirm ending');


function confirmEnd(str,target) {
    if (str.substr(-target.length)===target) {
        return true
    }
    else{
        return false
    }



}
console.log(confirmEnd("banana","a"))