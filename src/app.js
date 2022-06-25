alert(HELLO_TEXT)
while(STOP_FLAG){
    const checkedAnswer = startMenuCheckAnswer(prompt(START_MENU_TEXT))
    if (checkedAnswer != false){

    }
    else{
        STOP_FLAG = checkedAnswer
    }
}

function startMenuCheckAnswer(userAnswer_local){
    if (userAnswer_local == "a"){ // registration
        USERS_BASE = newUserAndPush(USERS_BASE)
        let userConfirm_local = confirm(CONFIRM_EXIT_TEXT)
        if (userConfirm_local == true){
            return true
        }
        else{
            alert(BYE_TEXT)
            return false
        }
    }
    else if (userAnswer_local == "b"){ // log in
        return test()
    }
    else if (userAnswer_local == "c"){  // all users
        return test()
    }
    else if (userAnswer_local == "d"){ // change data user
        return test()
    }
    else if (userAnswer_local == "q"){ // exit
        alert(BYE_TEXT)
        return false
    }
    else{
        alert(WRONG_ANSWER_TEXT)
        return true
    }
}

function test(){
    console.log('%capp.js line:32 "test is good"', 'color: #007acc;', "test is good");
    return false
}

function newUserAndPush(base){
    let newUser = {}
    newUser["name"] = prompt(NAME_TEXT)
    newUser["secondName"] = prompt(SECNAME_TEXT)
    newUser["age"] = prompt(AGE_TEXT)
    newUser["email"] = prompt(EMAIL_TEXT)
    newUser["password"] = prompt(PASSWORD_TEXT)
    base.push(newUser)
    console.log(`Was created user with name: ${newUser.name} and second name: ${newUser.secondName}`);
    return base
}