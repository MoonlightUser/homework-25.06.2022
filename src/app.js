alert(HELLO_TEXT)
while(STOP_FLAG){
    const checkedAnswer = startMenuCheckAnswer(prompt(START_MENU_TEXT))
    if (checkedAnswer != false){
        STOP_FLAG = checkedAnswer()
    }
}

function startMenuCheckAnswer(userAnswer_local){
    if (userAnswer_local == "a"){
        return test
    }
    else if (userAnswer_local == "b"){
        return test
    }
    else if (userAnswer_local == "c"){
        return test
    }
    else if (userAnswer_local == "d"){
        return test
    }
    else if (userAnswer_local == "q"){
        return test
    }
    else{
        alert(WRONG_ANSWER_TEXT)
        return false
    }
}

function test(){
    console.log('%capp.js line:32 "test is good"', 'color: #007acc;', "test is good");
    return false
}