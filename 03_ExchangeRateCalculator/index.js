// import apikey from "./utility";
// const {apikey} = require('utility')
// import axios from 'axios'
// const axios = require('axios')
let urlResponse = {}
const fetchData = ()=>{
    const url = `https://v6.exchangerate-api.com/v6/a4e0ec5c07cf7ae660b49ab6/latest/USD`
    try{
        // console.log(`https://v6.exchangerate-api.com/v6/a4e0ec5c07cf7ae660b49ab6/latest/USD`);
        // const data = await axios.get(url)
        const data = fetch(url)
        data.then((response)=>{
            console.log(response);
            return response.json()
        }).then((value2)=>{
            console.log(value2);
            console.log(value2.conversion_rates);
        })
        console.log(data);
    }catch(err){
        console.log(err);
    }finally{
        console.log('over');
    }
}
// fetchData()

const fetchData2 = async()=>{
    const url = `https://v6.exchangerate-api.com/v6/a4e0ec5c07cf7ae660b49ab6/latest/USD`
    try{
        // console.log(`https://v6.exchangerate-api.com/v6/a4e0ec5c07cf7ae660b49ab6/latest/USD`);
        // const data = await axios.get(url)
        const data = await fetch(url)
        console.log(data);
        urlResponse = await data.json()
        console.log(urlResponse);
    }catch(err){
        console.log(err);
    }finally{
        console.log('over');
    }
}


fetchData2()