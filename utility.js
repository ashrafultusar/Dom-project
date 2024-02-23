
const allBtn = document.getElementsByClassName('btn')

for (const btn of allBtn) {
    btn.addEventListener('click', function (event) {
        
        const name = event.target.parentNode.childNodes[1].innerText;
        const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;
        const catagory = event.target.parentNode.childNodes[5].childNodes[1].innerText;
        
        const selectedContainer = document.getElementById('show-player-info');

        const div = document.createElement('div')
        div.classList.add("flex");
        div.classList.add("justify-around");

        const p1 = document.createElement('p')
        const p2 = document.createElement('p')
        const p3 = document.createElement('p')
        p1.innerText = name;
        p2.innerText = price;
        p3.innerText = catagory;

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
selectedContainer.appendChild(div)

updateTotalCost(price)
updateGrandTotal()
    })
}


function updateTotalCost(value) {
    const totalCost = convertedValue('total-cost');
const sum=totalCost+parseInt(value)
    document.getElementById('total-cost').innerText = sum;
}


function updateGrandTotal() {
    const totalCost = convertedValue('total-cost');
    document.getElementById('grand-total').innerText=totalCost
}


function convertedValue(id) {
    const convert = document.getElementById(id).innerText
const convertValue=parseInt(convert)
    return convertValue;
}
