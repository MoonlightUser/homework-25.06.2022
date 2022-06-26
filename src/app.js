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
        let userEmail = prompt(EMAIL_TEXT)
        let userPassword = prompt(PASSWORD_TEXT)
        let serverAnswer = (findSameUser(USERS_BASE, userPassword, userEmail))
        if (serverAnswer === false){
            alert(LOGIN_FALSE_TEXT)
        }
        else{
            console.log(LOGIN_TRUE_TEXT);
            for (let i in USERS_BASE[serverAnswer]){
                console.log(`[${i}]: ${USERS_BASE[serverAnswer][i]}`);
            }
        }
        let userConfirm_local = confirm(CONFIRM_EXIT_TEXT)
        if (userConfirm_local == true){
            return true
        }
        else{
            alert(BYE_TEXT)
            return false
        }
    }


    else if (userAnswer_local == "c"){  // all users
        if (USERS_BASE.length == 0){
            alert(USERS_BASE_EMPTY_TEXT)
        }
        else{
            for (let i in USERS_BASE){
                for (let j in USERS_BASE[i]){
                    console.log(`[${j}]: ${USERS_BASE[i][j]}`);
                }
                console.log(SPACE_TEXT);
            }
        }
    }


    else if (userAnswer_local == "d"){ // change data user
        let userEmail = prompt(EMAIL_TEXT)
        let userPassword = prompt(PASSWORD_TEXT)
        let serverAnswer = (findSameUser(USERS_BASE, userPassword, userEmail))
        if (serverAnswer === false){
            alert(LOGIN_FALSE_TEXT)
        }
        else{
            console.log(LOGIN_TRUE_TEXT);
            for (let i in USERS_BASE[serverAnswer]){
                USERS_BASE[serverAnswer][i] = prompt(`[${i}]: `)
            }
            for (let i in USERS_BASE[serverAnswer]){
                console.log(`[${i}]: ${USERS_BASE[serverAnswer][i]}`);
            }

        }
        let userConfirm_local = confirm(CONFIRM_EXIT_TEXT)
        if (userConfirm_local == true){
            return true
        }
        else{
            alert(BYE_TEXT)
            return false
        }
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

function findSameUser(base, password, email){
    for(let i in base){
        if (base[i].password == password && base[i].email == email){
            return i
        }
    }
    
    return false
}