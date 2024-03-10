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


// fetchData2()

const populate = async ()=>{
    // console.log(urlResponse);
    await fetchData2()
    // console.log(urlResponse);
    const dropdown1 = (id)=>{
        const dd = document.getElementById(id)
        console.log(dd);
        const rateobj = urlResponse.conversion_rates
        console.log(rateobj,typeof(rateobj));
        for(let key in rateobj){
            if (rateobj.hasOwnProperty(key)){
                console.log(`${key} ${typeof(key)}: ${rateobj[key]} ${typeof(rateobj[key])}`);
                const option = document.createElement('option')
                option.value = key
                option.innerHTML = key
                dd.appendChild(option)
            }
        }


    }

    dropdown1('c1')
    dropdown1('c2')
}

// ******** ACTUAL CODE STARTS HERE ********


const main = async()=>{
    // Initial Population -> Fetch data
    await populate()


    const calculate = async ()=>{
        // console.log('Random');
        const currency_one = c1.value
        const currency_two = c2.value
        console.log(currency_one,currency_two);
        const d = await fetch(`https://v6.exchangerate-api.com/v6/a4e0ec5c07cf7ae660b49ab6/latest/${currency_one}`)
        const res = await d.json()
        console.log(res);
        const rate = res.conversion_rates[currency_two]
        rateEle.innerText = `1 ${currency_one} = ${rate} ${currency_two}`
        i2.value = (i1.value*rate).toFixed(2)

    }
    const rateEle = document.getElementById('rates')
    const i1 = document.getElementById('i1')
    // i1.value = input1
    i1.addEventListener('input',calculate)
    const i2 = document.getElementById('i2')
    i2.addEventListener('input',calculate)
    // i2.value = input2

    // onchange Listners for dropdowns 
    const c1 = document.getElementById('c1')
    c1.addEventListener('change',calculate)
    const c2 = document.getElementById('c2')
    c2.addEventListener('change',calculate)
    
    swap.addEventListener('click',()=>{
        const temp = c1.value
        c1.value = c2.value
        c2.value = temp 
        calculate()
    })

}
main()
