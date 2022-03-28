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
    ]

console.log(discounts.length)

function discountcalc(){
    var price = document.getElementById("price").value;
    var quant = document.getElementById("quant").value;
    var inputState = document.getElementById("state").value;
    const taxResult = states.find( ({ state }) => state === inputState);
    var tax = taxResult.tax / 100;
    var sum = price * quant

    for (let [index, el] of discounts.entries()) {
        if (sum >= el.value) {
            document.getElementById("postdisc").innerText = sum * ((100 - el.discount) / 100)
            document.getElementById("posttax").innerText = sum * ((100 - el.discount) / 100) * (1 + tax)
            break;
        }
    }
    document.getElementById("pretax").innerText = sum

}