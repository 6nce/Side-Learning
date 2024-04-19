// Your solution goes here 
let containsUpperCase = (string) => {
    for(let i=0;i < string.length; i++){
        if(string[i] == string[i].toUpperCase()){
            return true
        }
    }
    return false
}



let isStrongPassword = (password) => {
    if(password.length < 8) {
        return false
    }if(password.includes("password") == true) {
        return false;
    }if(containsUpperCase(password) == false) {
        return false
    }
    return true;
}