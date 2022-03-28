const states = [
    {state: 'UT', tax: 6.85},
    {state: 'NV', tax: 8.00},
    {state: 'TX', tax: 6.25},
    {state: 'AL', tax: 4.00},
    {state: 'CA', tax: 8.25},
];

function discountcalc(){
    var price = document.getElementById("price").value;
    var quant = document.getElementById("quant").value;
    var inputState = document.getElementById("state").value;
    const taxResult = states.find( ({ state }) => state === inputState);
    var tax = taxResult.tax / 100;
    var sum = price * quant

    document.getElementById("pretax").innerText = sum
    if (sum < 1000) {
        document.getElementById("postdisc").innerText = sum
        document.getElementById("posttax").innerText = sum *  (1 + tax)
    }
    else if (sum < 5000 && sum >= 1000) {
        document.getElementById("postdisc").innerText = (sum * 0.97)
        document.getElementById("posttax").innerText = (sum * 0.97) * (1 + tax)
    }
    else if (sum < 7000 && sum >= 5000) {
        document.getElementById(    "postdisc").innerText = (sum * 0.95)
        document.getElementById("posttax").innerText = (sum * 0.95) * (1 + tax)
    }
    else if (sum >= 7000 && sum < 10000) {
        document.getElementById("postdisc").innerText = (sum * 0.93)
        document.getElementById("posttax").innerText = (sum * 0.93) * (1 + tax)
    }
    else if (sum >= 10000 && sum < 50000) {
        document.getElementById("postdisc").innerText = (sum * 0.9)
        document.getElementById("posttax").innerText = (sum * 0.9) * (1 + tax)
    }
    else if (sum >= 50000) {
        document.getElementById("postdisc").innerText = (sum * 0.85)
        document.getElementById("posttax").innerText = (sum * 0.85) * (1 + tax)
    }
}