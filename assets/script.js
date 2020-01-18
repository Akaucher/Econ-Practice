let currencyArray = [
        {Name : "AUD",
        countryName : "Austrialia",
        imageSrc : "assets/AUD.png"
        },
        {Name : "JPY",
        countryName : "Japan",
        imageSrc : "assets/yen.png"
        },        
        {Name : "USD",
        countryName : "United States",
        imageSrc : "assets/USD.png"
        },
        {Name : "INR",
        countryName : "India",
        imageSrc : "assets/Rupee.png"
        },
        {Name : "EUR",
        countryName : "European Union",
        imageSrc : "assets/Euro.png",
        },
        {Name : "MXN",
        countryName : "Mexico",
        imageSrc : "assets/peso.png"
        }
];



$("#button").on("click", function (){

    let FromCurrency = $("#UserInput1").val();
    let FromCurrencyArrayValue = $("#UserInput1").attr("class");
    let ToCurrency = $("#UserInput2").val();
    let ToCurrencyArrayValue = $("UserInput2").attr("value2");

    let settings1 = {
        "async": true,
        "crossDomain": true,
        "url": "https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from="+FromCurrency+"&to="+ToCurrency+"&amount=1",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "currency-converter5.p.rapidapi.com",
            "x-rapidapi-key": "85950a923emsh59a1398139e0405p186b84jsnfbe7a90cc117"
        }
    }
    
    $.ajax(settings1).done(function (response) {
        console.log(response);
        console.log(FromCurrencyArrayValue);
        console.log(ToCurrencyArrayValue);

    });
});
