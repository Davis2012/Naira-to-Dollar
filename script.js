let dollarAmount = document.getElementById("dollar")
let nairaAmount = document.getElementById("naira")
let convert = document.getElementById("convert")

function convertToDollar(){
    nairaAmount = Number(nairaAmount.value)

    if (isNaN(nairaAmount) || nairaAmount <= 0 || nairaAmount === null){
        alert("Please enter a Naira Amount!!")
    }

    else{
        let calculatedAmount = nairaAmount / 460.33
        dollarAmount.value = "$" + calculatedAmount

    }

}