
let FromCurrency = "AUD"
let ToCurrency = "USD"

d3.select("#test").style("background-color", "black");

$("#button").on("click", function (){
    let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from="+FromCurrency+"&to="+ToCurrency+"&amount=1",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "currency-converter5.p.rapidapi.com",
            "x-rapidapi-key": "85950a923emsh59a1398139e0405p186b84jsnfbe7a90cc117"
        }
    }
    
    $.ajax(settings).done(function (response) {
        console.log(response);
        let USDValue = response.rates.USD.rate;
        console.log(USDValue)

    });
});