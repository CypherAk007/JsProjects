// User for first time = mat not in local storage 
if (localStorage.getItem("key") === null) {
    console.log('Matrix not there');
    let matrixls = [[0,0,0,0,0,0,0,0],
                    [0,2,0,0,0,0,2,0],
                    [0,0,0,0,0,0,0,0],
                    [0,0,0,0,2,0,0,0],
                    [0,0,2,0,0,0,0,0],
                    [1,0,0,0,0,0,2,0]]

    const initItr = document.querySelectorAll('td')
    initItr.forEach((cell)=>{
        let row = cell.closest('tr').rowIndex
        let col = cell.cellIndex
        // console.log(cell.closest('tr').rowIndex,cell.cellIndex,matrix[row][col]===0);
        if(matrixls[row][col]===0){
            cell.className = 'seat na'
        }else if(matrixls[row][col]===1){
            cell.className = 'seat selected'
            // count+=1
        }else{
            cell.className = 'seat occupied'
        }
    })
    
    // Local Storage 
    let lsMat = JSON.stringify(matrixls)
    console.log(lsMat,typeof(lsMat));
    localStorage.setItem('key',lsMat)
}
// every refresh update count and color mark the seats
let count = 0
let retlsMat = localStorage.getItem("key")
let matrix = JSON.parse(retlsMat)
console.log(matrix);
const initItr = document.querySelectorAll('td')
initItr.forEach((cell)=>{
    let row = cell.closest('tr').rowIndex
    let col = cell.cellIndex
    console.log(cell.closest('tr').rowIndex,cell.cellIndex,matrix[row][col]===0);
    // if(matrix[i][j]===1){
        // count+=1
    // }
    if(matrix[row][col]===0){
        cell.className = 'seat na'
    }else if(matrix[row][col]===1){
        cell.className = 'seat selected'
        count+=1
        console.log(cell.className);
    }else{
        cell.className = 'seat occupied'
    }
})

// For para quantity display 
const quantity = document.getElementById('quantity')
quantity.innerText = count

// For para price display
// Listner of Movie change 
const movie = document.getElementById('selector')
console.log(movie.innerText);
let movieChoice = movie.options[movie.selectedIndex].value
console.log(movieChoice);
let amount = 0
const money = document.getElementById('money')
movie.addEventListener('change',()=>{
    movieChoice = movie.options[movie.selectedIndex].value
    // movieChoice = movie.value
    amount = parseInt(movieChoice)
    console.log(typeof(movie.value),amount,typeof(amount));
    console.log(money.innerText);

    money.innerText = count*amount
    console.log(money.innerText);
})
console.log(movieChoice);

console.log(count,'count');

// For every seat change update the local storage 
const cells = document.querySelectorAll('td')
cells.forEach((cell)=>{
    cell.addEventListener('click',()=>{
        console.log('Row Index'+cell.closest('tr').rowIndex+'Col Index '+cell.cellIndex);
        let row = cell.closest('tr').rowIndex
        let col = cell.cellIndex
        if(matrix[row][col]===0){
            count+=1
            quantity.innerText = count
            money.innerText = parseInt(quantity.innerText)*amount
            console.log(money.innerText);
            matrix[row][col]=1
            console.log(matrix[row][col]);
            cell.className = 'seat selected'
        }else if(matrix[row][col]===1){
            count-=1
            quantity.innerText = count
            matrix[row][col]=0
            console.log(matrix[row][col]);
            cell.className = 'seat na'
        }else{
            cell.className = 'seat occupied'
        }
        let lsMat = JSON.stringify(matrix)
        console.log(lsMat,typeof(lsMat));
        localStorage.setItem('key',lsMat)
    })
})

