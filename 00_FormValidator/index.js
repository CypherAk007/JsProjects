const form = document.getElementById('form')
let flag = true;
const validator = (ele,validationLogic,msg='Error Message')=>{
    const element = document.getElementById(ele)
    const parent = document.getElementById(ele).parentElement
    if (validationLogic(element) ==false |validationLogic(element) ==null| element.value.trim().length==0){
        flag = false 
        parent.classList.remove('success')
        parent.classList.add('error')
        // Updating the correct error message 
        const error =parent.querySelector('small')
        error.innerText = msg
    }else if (element.value.trim().length>0){
        parent.classList.remove('error')
        parent.classList.add('success')
    }
}

const validatorPwd = (ele,validationLogic,pwd,msg)=>{
    const element = document.getElementById(ele)
    let x = document.getElementById(pwd).value.trim()
    const parent = document.getElementById(ele).parentElement
    if (validationLogic(element)==true & x.localeCompare(element.value.trim())!=0 |  element.value.trim().length==0){
        flag = false 
        parent.classList.remove('success')
        parent.classList.add('error')
        // Updating the correct error message 
        const error =parent.querySelector('small')
        error.innerText = msg
        // return true
    }else if (x.localeCompare(element.value.trim())==0){
        parent.classList.remove('error')
        parent.classList.add('success')
        // return false
    }
}
form.addEventListener('submit',(event)=>{
    
    event.preventDefault();
    // name 
    // const name = document.getElementById('name')
    // const parent = document.getElementById('name').parentElement
    // console.log(name.value);
    // if (name.value.length<3){
    //     flag = false 
    //     console.log(document.getElementById('name').parentElement)
    //     parent.classList.remove('success')
    //     parent.classList.add('error')
    // }
    // else{
        
    //     parent.classList.remove('error')
    //     parent.classList.add('success')

    // }
    // ABOVE CODE MADE AS FUNCTION 
    validator('name',(ele)=>ele.value.trim().length>=3,'Invalid UserName!!')
    // // email 
    // validator('email',(ele)=>ele.value.trim().match(/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9_.-]+\.[a-zA-Z0-9_.-]+$/))
    validator('email',(ele)=>ele.value.trim().match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),'Invalid Email!!')
    
    // // password
    validator('password',(ele)=>ele.value.trim().length>=8,'Invalid Password!!')
    
    // // confirm passowrd
    validatorPwd('confPassword',(ele)=>ele.value.trim().length>=8,'password','Please Match Above Password!!')
})


