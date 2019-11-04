var app = new Vue({
    el: '#app',
    data: {
        denemeTest:"Yemek Sepeti indirim hesaplama",
        beforeTotal:37,
        afterTotal:27,
        prices:[{
                beforePrice:10,
                afterPrice:8
            },{
                beforePrice:12,
                afterPrice:9
            },{
                beforePrice:15,
                afterPrice:10
            },
        ]
    }
});


/*

tableBody = document.getElementById("tableBody");

beforePrices = [];
beforeTotal = 0;
afterTotal = 0;

//Add Button
document.getElementById("addButton").addEventListener("click", function () {
    tableBody.innerHTML += createTableItem(beforePrices.length);
    document.getElementById("a" + beforePrices.length).innerHTML = beforePrices.length;
    beforePrices.push(0);
});

function Update() {
    beforeTotal = 0;
    afterTotal = parseFloat(document.getElementById("afterTotal").value);
    var i;
    for (i = 0; i < beforePrices.length; i++) {
        beforePrices[i] = parseFloat(document.getElementById("b" + i).value);
        beforeTotal += beforePrices[i];
    }
    document.getElementById("beforeTotal").innerHTML = beforeTotal;
    var j;
    for (j = 0; j < beforePrices.length; j++) {
        document.getElementById("a" + j).innerHTML = calculate(beforePrices[j], beforeTotal, afterTotal);
    }
}

function calculate(money, total, discountTotal) {
    return (money / total) * discountTotal
}

function createTableItem(id) {
    return "<tr><th scope='row'>" + id + "</th><td><input id='b" + id + "' type='text' class='form-control' placeholder='₺' value=\"0\"></td><td><h5 id='a" + id + "' ></h5></td></tr>"
}

*/