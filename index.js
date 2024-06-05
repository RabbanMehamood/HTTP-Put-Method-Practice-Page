let userInputEl = document.getElementById("userInput");
let requestBodyEl = document.getElementById("requestBody");
let sendPutRequestBtnEl = document.getElementById("sendPutRequestBtn");
let httpResponseEl = document.getElementById("httpResponse");
let requestStatusEl = document.getElementById("requestStatus");

function sendPutRequest() {
    let userValue = userInputEl.value;
    let requestUrl = "https://gorest.co.in/public-api/users/" + userValue;
    let data = requestBodyEl.value;


    let options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 88d52bbcb1d08c8abc4749b31118796c1f44c633b20b9ba4c4bfb18e01d1b3f0",
        },
        body: data
    };


    fetch(requestUrl, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            let requestStatus = jsonData.code;
            let httpResponse = JSON.stringify(jsonData);
            requestStatusEl.textContent = requestStatus;
            httpResponseEl.textContent = httpResponse;

        });

}

sendPutRequestBtnEl.addEventListener("click", sendPutRequest);
