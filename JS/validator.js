export function validPassword(password){

    if(password.value.length <= 5){
        return false;
    }
        return true
}

export function validUsername(username){
    if(username.value.length <= 2){
      username.value = "";  
      return false;  
    }  
    return true;
}    

/*
export function matchPassword(password, password_index){
    if(password.value != password_index.value){
        password_index.value = "";
        return false;
    }
    return true;
}
//Dont need a validEmail func cuz the input type ="email" alredy does all the basic validations

export function matchEmail(email, email_index){
    if(email.value != email_index.value){
        
        return false;
    }
        return true;
}

export function matchBoth(){
    if(validPassword == true && matchPassword == true && matchEmail == true){
        
        return true;
    }    
        return false;
}
*/
