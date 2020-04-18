function changeDocument(response) {

    response.text().then((text) => {
        document.open();
        document.write(text);

    }).catch(() => {
        errorMessage();
    });
}


function errorMessage() {
    alert("Ooops! PaRece qUe hOUve UMa F4lha na MAtRiX.");
}


function incorrectAnswerMessage() {
    alert('Resposta errada! Para obter uma dica digite "/help" no endereço.')
}


function send(fase, answer = "") {

    const headers = {"Content-Type": "application/json"}
    const body = JSON.stringify({fase: fase, answer: answer.toLowerCase()});

    var next = false;

    fetch("/", {
        method: "post", 
        headers: headers, 
        body: body
    }

    ).then((response) => {

        if (response.status == 403) {
            incorrectAnswerMessage();

        } else if (response.status != 200) {
            errorMessage();

        } else {
            changeDocument(response);
            next = true;
        }

    }).catch(() => {
        errorMessage();
    });

    return next;
}


function sendAnswer(){
    
    const answer = prompt("Digite sua resposta:"); 

    if (answer){
        send(sessionStorage.fase, answer);
    }
}