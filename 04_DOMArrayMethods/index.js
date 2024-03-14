// https://randomuser.me/api
let arr = []

const fetchUser = async ()=>{
    const data = await fetch("https://randomuser.me/api")
    const response = await data.json()
    const fname = response.results[0].name.first
    const lname = response.results[0].name.last
    console.log(response);
    console.log(response.results[0].name);
    console.log(fname+' '+lname);
    return fname+' '+lname
}

// fetchUser()

const generateMoney = () =>{
    let val = Math.random()
    val = val*1000000
    console.log(val.toFixed(2));
    return val.toFixed(2)
}

// generateMoney()

const addUser = async ()=>{
    const user = await fetchUser()
    const wealth = generateMoney()
    arr.push([user,wealth])
    console.log(arr);
}

// addUser()

const remover = (id) =>{
    const temp = document.getElementById(id)
    const t = document.getElementById('total')
    console.log(temp);
    // parr.remove()
    temp.innerHTML = ''
    t.innerHTML = ''
}

// remover('parr')

const populatePerson = (ele,id)=>{
    remover(ele)
    // remover(wealth)
    const per = document.getElementById(id)
    // const wel= document.getElementById(wealth)
    // console.log(a);
    arr.forEach(element => {
        console.log(element);
        const ele = document.createElement('p')
        ele.value = element[0]
        ele.innerHTML = element[0]
        per.appendChild(ele)
        


    });
}


const populateWealth = (ele,id)=>{
    remover(ele)
    // remover(wealth)
    const wel = document.getElementById(id)
    // const wel= document.getElementById(wealth)
    // console.log(a);
    arr.forEach(element => {
        
        const money = document.createElement('p')
        money.value = element[1]
        money.innerHTML = element[1]
        wel.appendChild(money)


    });
}
// populate('parr','warr')

const addUserHandler = async ()=>{
    await addUser()
    populatePerson('parr','parr')
    populateWealth('warr','warr')
    

}

const doubleMoneyHandler = (wealth)=>{
    // arr.map((ele)=>{
    //     console.log(ele);
    //     let val =  [ele[0],ele[1]*2]
    //     console.log(val);
    //     return val
    // })
    arr = arr.map(element => [element[0], element[1] * 2])
    console.log(arr);
    // remover(wealth)
    // const wel= document.getElementById(wealth)
    populateWealth(wealth,wealth)
    // Double the second elements of arr
    // const doubledArr = arr.map(element => [element[0], element[1] * 2]);

    // console.log(doubledArr); // Check the doubled array in the console

}

// doubleMoneyHandler()

const millionaires = ()=>{
    console.log(arr);
    arr = arr.filter((ele)=>{
        return (ele[1]>1000000)
    })
    console.log(arr);
    populatePerson('parr','parr')
    populateWealth('warr','warr')
}

// millionaires()
const sorter = ()=>{
    console.log(arr);
    arr = arr.sort().reverse()
    console.log(arr);
    repopulator()

    
}

const repopulator = () =>{
    populatePerson('parr','parr')
    populateWealth('warr','warr')
}

const entireWealth = ()=>{
    console.log(arr);
    // let total = 0
    const total = arr.reduce((accumulator,currentValue)=> accumulator+parseFloat(currentValue[1]),0)
    console.log(total);
    const t = document.getElementById('total')
    const money = document.createElement('p')
    money.value = total
    money.innerHTML = 'Total : '+total
    t.appendChild(money)
    // t.appendChild()
}
