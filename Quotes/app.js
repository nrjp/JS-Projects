const btnEl = document.getElementById("btn");
const quotes = document.getElementById("quotes");

const apiKey = api_key;

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
  contentType: 'application/json',
};

const apiURL = "https://api.api-ninjas.com/v1/quotes?category=happiness";

async function getQuotes() {
  try {
    quotes.innerText = "Updating...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    const response = await fetch(apiURL, options);
    console.log(response);
    const data = await response.json();
    console.log(data[0]);

    btnEl.disabled = false;
    btnEl.innerText = "Generate";

    quotes.innerText = data[0].quote;
  } catch (error) {
    quotes.innerText = "An error happened, try again later";
    btnEl.disabled = false;
    btnEl.innerText = "Generate";
    console.log(error);
  }
}

btnEl.addEventListener("click", getQuotes);

//https://api-ninjas.com/api/quotes