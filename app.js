var myHeaders = new Headers();
myHeaders.append("apikey", "j1BsZj4uoRrH70t55V2W8NxMv7UQ4j25");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};


//rates of 1 UAH to USD and EUR
const uah = {};
//rates of 1 USD to UAH and EUR
const usd = {};
//rates of 1 EUR to UAH and USD
const eur = {};

  // Header rates 

  // USD
const usdHeader = document.querySelector('#usd-rate');
// EUR
const eurHeader = document.querySelector('#eur-rate');

const inputOne = document.querySelector('#currency-one');
const inputTwo = document.querySelector('#currency-two');
const selectOne = document.querySelector('#currency-one-type');
const selectTwo = document.querySelector('#currency-two-type');

  

getCurr();


async function getCurr() {
    //usd
    const responseUsd = await fetch("https://api.apilayer.com/exchangerates_data/latest?symbols=uah%2C%20eur&base=usd", requestOptions);
    
    const dataUsd = await responseUsd.json();
    const resultUsd = await dataUsd;
    
    usd.UAH = await resultUsd.rates.UAH;
    usd.EUR = resultUsd.rates.EUR;

    
    //header usd show
    usdHeader.textContent = usd.UAH.toFixed(2);
    

    //uah
    const responseUah = await fetch("https://api.apilayer.com/exchangerates_data/latest?symbols=usd%2C%20eur&base=uah", requestOptions);
    
    const dataUah = await responseUah.json();
    const resultUah = await dataUah;
    uah.USD = resultUah.rates.USD;
    uah.EUR = resultUah.rates.EUR;
    

    //eur
    const responseEur = await fetch("https://api.apilayer.com/exchangerates_data/latest?symbols=uah%2C%20usd&base=eur", requestOptions);
    
    const dataEur = await responseEur.json();
    const resultEur = await dataEur;
    eur.UAH = resultEur.rates.UAH;
    eur.USD = resultEur.rates.USD;
    //header eur show
    eurHeader.textContent = eur.UAH.toFixed(2);

    console.log(uah);
    console.log(usd);
    console.log(eur);
    
    
  };

  // input rates

inputOne.oninput = function () {
    
    if(selectOne.value == 'UAH' && (selectTwo.value == 'USD' || selectTwo.value == 'EUR')){
        
        inputTwo.value = (inputOne.value * uah[selectTwo.value]).toFixed(2);

    } else if (selectOne.value === selectTwo.value){

        inputTwo.value = inputOne.value * 1;
    }; 

    if (selectOne.value == 'USD' && (selectTwo.value == 'UAH' || selectTwo.value == 'EUR')){
        inputTwo.value = (inputOne.value * usd[selectTwo.value]).toFixed(2);
        
    } else if (selectOne.value === selectTwo.value){

        inputTwo.value = inputOne.value * 1;
    };   
        
    if (selectOne.value == 'EUR' && (selectTwo.value == 'USD' || selectTwo.value == 'UAH')){
        inputTwo.value = (inputOne.value * eur[selectTwo.value]).toFixed(2);
        
    } else if (selectOne.value === selectTwo.value){

        inputTwo.value = inputOne.value * 1;
    };
    
};



selectTwo.oninput = function () {
    if(selectOne.value == 'UAH' && (selectTwo.value == 'USD' || selectTwo.value == 'EUR')){
        
        inputTwo.value = (inputOne.value * uah[selectTwo.value]).toFixed(2);

    } else if (selectOne.value === selectTwo.value){

        inputTwo.value = inputOne.value * 1;
    }; 

    if (selectOne.value == 'USD' && (selectTwo.value == 'UAH' || selectTwo.value == 'EUR')){
        inputTwo.value = (inputOne.value * usd[selectTwo.value]).toFixed(2);
        
    } else if (selectOne.value === selectTwo.value){

        inputTwo.value = inputOne.value * 1;
    };   
        
    if (selectOne.value == 'EUR' && (selectTwo.value == 'USD' || selectTwo.value == 'UAH')){
        inputTwo.value = (inputOne.value * eur[selectTwo.value]).toFixed(2);
        
    } else if (selectOne.value === selectTwo.value){

        inputTwo.value = inputOne.value * 1;
    };
};

selectOne.oninput = function () {
    if(selectOne.value == 'UAH' && (selectTwo.value == 'USD' || selectTwo.value == 'EUR')){
        
        inputTwo.value = (inputOne.value * uah[selectTwo.value]).toFixed(2);

    } else if (selectOne.value === selectTwo.value){

        inputTwo.value = inputOne.value * 1;
    }; 

    if (selectOne.value == 'USD' && (selectTwo.value == 'UAH' || selectTwo.value == 'EUR')){
        inputTwo.value = (inputOne.value * usd[selectTwo.value]).toFixed(2);
        
    } else if (selectOne.value === selectTwo.value){

        inputTwo.value = inputOne.value * 1;
    };   
        
    if (selectOne.value == 'EUR' && (selectTwo.value == 'USD' || selectTwo.value == 'UAH')){
        inputTwo.value = (inputOne.value * eur[selectTwo.value]).toFixed(2);
        
    } else if (selectOne.value === selectTwo.value){

        inputTwo.value = inputOne.value * 1;
    };
};



inputTwo.oninput = function () {
    
    if(selectTwo.value == 'UAH' && (selectOne.value == 'USD' || selectOne.value == 'EUR')){
        
        inputOne.value = (inputTwo.value * uah[selectOne.value]).toFixed(2);

    } else if (selectTwo.value === selectOne.value){

        inputOne.value = inputTwo.value * 1;
    }; 

    if (selectTwo.value == 'USD' && (selectOne.value == 'UAH' || selectOne.value == 'EUR')){
        inputOne.value = (inputTwo.value * usd[selectOne.value]).toFixed(2);
        
    } else if (selectTwo.value === selectOne.value){

        inputOne.value = inputTwo.value * 1;
    };   
        
    if (selectTwo.value == 'EUR' && (selectOne.value == 'USD' || selectOne.value == 'UAH')){
        inputOne.value = (inputTwo.value * eur[selectOne.value]).toFixed(2);
        
    } else if (selectTwo.value === selectOne.value){

        inputOne.value = inputTwo.value * 1;
    
    
    };
    
    
};


selectOne.oninput = function () {
    if(selectTwo.value == 'UAH' && (selectOne.value == 'USD' || selectOne.value == 'EUR')){
        
        inputOne.value = (inputTwo.value * uah[selectOne.value]).toFixed(2);

    } else if (selectTwo.value === selectOne.value){

        inputOne.value = inputTwo.value * 1;
    }; 

    if (selectTwo.value == 'USD' && (selectOne.value == 'UAH' || selectOne.value == 'EUR')){
        inputOne.value = (inputTwo.value * usd[selectOne.value]).toFixed(2);
        
    } else if (selectTwo.value === selectOne.value){

        inputOne.value = inputTwo.value * 1;
    };   
        
    if (selectTwo.value == 'EUR' && (selectOne.value == 'USD' || selectOne.value == 'UAH')){
        inputOne.value = (inputTwo.value * eur[selectOne.value]).toFixed(2);
        
    } else if (selectTwo.value === selectOne.value){

        inputOne.value = inputTwo.value * 1;
    
    
    };
};

selectTwo.oninput = function () {
    if(selectTwo.value == 'UAH' && (selectOne.value == 'USD' || selectOne.value == 'EUR')){
        
        inputOne.value = (inputTwo.value * uah[selectOne.value]).toFixed(2);

    } else if (selectTwo.value === selectOne.value){

        inputOne.value = inputTwo.value * 1;
    }; 

    if (selectTwo.value == 'USD' && (selectOne.value == 'UAH' || selectOne.value == 'EUR')){
        inputOne.value = (inputTwo.value * usd[selectOne.value]).toFixed(2);
        
    } else if (selectTwo.value === selectOne.value){

        inputOne.value = inputTwo.value * 1;
    };   
        
    if (selectTwo.value == 'EUR' && (selectOne.value == 'USD' || selectOne.value == 'UAH')){
        inputOne.value = (inputTwo.value * eur[selectOne.value]).toFixed(2);
        
    } else if (selectTwo.value === selectOne.value){

        inputOne.value = inputTwo.value * 1;
    
    
    };
};


    
   






