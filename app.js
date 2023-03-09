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

  
//GET rates of 1 UAH to USD and EUR

async function getUahCurr() {
    const response = await fetch("https://api.apilayer.com/exchangerates_data/latest?symbols=usd%2C%20eur&base=uah", requestOptions);
    
    const data = await response.json();
    const result = await data;
    uah.USD = result.rates.USD;
    uah.EUR = result.rates.EUR;
    
    console.log(uah);
     
  };

  getUahCurr();
  
//GET rates of 1 USD to UAH and EUR

async function getUsdCurr() {
    const response = await fetch("https://api.apilayer.com/exchangerates_data/latest?symbols=uah%2C%20eur&base=usd", requestOptions);
    
    const data = await response.json();
    const result = await data;
    usd.UAH = result.rates.UAH;
    usd.EUR = result.rates.EUR;
    
    console.log(usd);
     
  };

  getUsdCurr();

  //GET rates of 1 EUR to UAH and USD

async function getEurCurr() {
    const response = await fetch("https://api.apilayer.com/exchangerates_data/latest?symbols=uah%2C%20usd&base=eur", requestOptions);
    
    const data = await response.json();
    const result = await data;
    eur.UAH = result.rates.UAH;
    eur.USD = result.rates.USD;
    
    console.log(eur);
     
  };

  getEurCurr();