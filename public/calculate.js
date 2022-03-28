import { getPromise } from '../modules/apiQuery.js'

const states = [
    {state: 'UT', tax: 6.85},
    {state: 'NV', tax: 8.00},
    {state: 'TX', tax: 6.25},
    {state: 'AL', tax: 4.00},
    {state: 'CA', tax: 8.25},
];

const discounts = [
    {value: 50000, discount: 15},
    {value: 10000, discount: 10},
    {value: 7000, discount: 7},
    {value: 5000, discount: 5},
    {value: 1000, discount: 3},
    {value: 0, discount: 0}
];

function toFixed(x) {
    return Number.parseFloat(x).toFixed(2);
}

function discountcalc(){
    console.log(getPromise('http://localhost:3000/states'))
    const taxResult = states.find( ({ state }) => state === document.getElementById("state").value);
    var tax = taxResult.tax / 100;
    var sum = document.getElementById("price").value * document.getElementById("quant").value;

    for (let [index, el] of discounts.entries()) {
        if (sum >= el.value) {
            document.getElementById("postdisc").innerText = toFixed(sum * ((100 - el.discount) / 100))
            document.getElementById("posttax").innerText = toFixed(sum * ((100 - el.discount) / 100) * (1 + tax))
            if (index === 0) {
                document.getElementById("missingthresh").innerText = toFixed(0)
            }
            else {
                document.getElementById("missingthresh").innerText = toFixed(discounts[index - 1].value - sum)
            }
            document.getElementById("statetax").innerText = toFixed((sum * ((100 - el.discount) / 100) * (1 + tax)) - (sum * ((100 - el.discount) / 100)))
            break;
        }
    }
    document.getElementById("pretax").innerText = toFixed(sum)

}