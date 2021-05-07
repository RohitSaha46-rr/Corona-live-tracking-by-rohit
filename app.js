let dates=document.getElementById('date');
let months=[
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
]
let weeks=[
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]
const info=() =>{
let d=new Date();
let year=d.getFullYear();
let month=d.getMonth();
let mnth=months[month];
let date=d.getDate();
let week=d.getDay();
let wk=weeks[week];
dates.innerHTML=`${mnth} ${date} ${year} | ${wk}`;


}


info();
let active=document.getElementById('active');
let activenew=document.getElementById('activenew');
let recovered=document.getElementById('recovered');
let recoverednew=document.getElementById('recoverednew');
let die=document.getElementById('die');
let dienew=document.getElementById('dienew');
let totalcases=document.getElementById('totalcases');

async function coviddata(){
    try{
    const jsondata=await fetch('https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true');
    const data=await jsondata.json();
    active.innerHTML=data.activeCases;
    activenew.innerHTML=data.activeCasesNew;
    recovered.innerHTML=data.recovered;
    recoverednew.innerHTML=data.recoveredNew;
    die.innerHTML=data.deaths;
    dienew.innerHTML=data.deathsNew;
    totalcases.innerHTML=data.totalCases;
    }
    catch(error){
        console.log('the erroe is ${error}');
    }
}
coviddata();
