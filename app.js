// const api = fetch('https://2024-03-06.currency-api.pages.dev/v1/currencies/usd.json').then((data)=> data.json()).then((res)=> {
//     console.log(res.usd.pkr);

//     let val = document.querySelector('#fromSelect').value
//     console.log(val);
// })
// console.log(api);
const link = `https://2024-03-06.currency-api.pages.dev/v1/currencies/.json`
const toCurr = document.querySelector('.to select')

const fromCurr = document.querySelector('.from select')



const dropDown = document.querySelectorAll('.dropDown select')
const btn = document.querySelector('button')

for(let select of dropDown) {
    for (currCode in countryList) {
        let newOption = document.createElement('option')
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name === 'from' && currCode === 'USD') {
            newOption.selected = 'selected'
        } else if(select.name === 'to' && currCode === 'PKR') {
            newOption.selected = 'selected'
        }
        select.append(newOption)
    }
    select.addEventListener('change', (evt)=> {
        updateFlag(evt.target)
    })
}

const updateFlag = (element) =>{
    let currCode = element.value;
    let countryCode = countryList[currCode]
    let newSourceLink = `https://flagsapi.com/${countryCode}/flat/64.png`
    let img = element.parentElement.querySelector('img')
    img.src = newSourceLink
}


btn.addEventListener('click',(e)=> {
    e.preventDefault()
    let amount = document.querySelector('.amount input')
    let amountVal = amount.value
    console.log(amountVal);
    if (amountVal ===1 || amountVal < 1) {
        amountVal = 1
        amount.value = '1'
    }
    let toCurrValue = toCurr.value.toLowerCase().trim()

    console.log(toCurrValue);
    
    

    let response = fetch('https://2024-03-06.currency-api.pages.dev/v1/currencies/usd.json').then((res)=> res.json()).then((data)=> {
        //console.log(data.usd.inr);
        let amountValue = document.querySelector('#inputValue').innerHTML = amountVal;
        // document.querySelector('#totalValue').innerHTML = `${Math.round(amountVal * data.usd.pkr)}`
        console.log(toCurrValue);
        
        let inputCUrrency = document.querySelector('#totalValue').innerHTML = `${amountValue*data.usd+toCurrValue}`
    })

})