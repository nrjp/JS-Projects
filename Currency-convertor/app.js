const amount = document.getElementById("input");
const from = document.getElementById("from");
const to = document.getElementById("to");
const button = document.getElementById("btn");
const ans = document.getElementById("result");
const answer_block = document.getElementById('answer');

answer_block.style.display = "none"

function convert(){
    $.ajax({
        method: 'GET',
        url: `https://api.api-ninjas.com/v1/convertcurrency?want=${to.value}&have=${from.value}&amount=${amount.value}`,
        headers: { 'X-Api-Key': 'YOUR_API_KEY'},
        contentType: 'application/json',
        success: function(result) {
            console.log(result);
            answer_block.style.display = "block"
            ans.innerText = result.new_amount
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
}

button.addEventListener("click", () =>{
    convert()
})

