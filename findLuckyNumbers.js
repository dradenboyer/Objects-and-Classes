// Write your code below this line.

const luckyNumbers = (num) => {
    let arr =  []
    for (i=0 ; i < num; i ++){
        let numero = Math.floor(Math.random()*10)
        if (!arr.includes(numero)){
            arr.push(numero)
            
        }
        else{
            num = num + 1
        }
    

    }
    return arr
}
console.log(luckyNumbers(6))