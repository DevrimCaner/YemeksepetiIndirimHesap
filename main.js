var app = new Vue({
    el: '#app',
    data: {
        title: "Yemek Sepeti indirim hesaplama",
        totalText1: "Joker Öncesi",
        totalText2: "Jokerli Tutar",
        beforeTotal: 0,
        afterTotal: 0,
        prices: [{
            beforePrice: 0,
            afterPrice: 0,
            piece: 1
        }
        ]
    },
    methods: {
        addBtn: function () {//Adding new price data
            newPrice = {
                beforePrice: 0,
                afterPrice: 0,
                piece: 1
            };
            this.prices.push(newPrice);
        },
        calculateData: function () {//Calculating All Data
            //Coding Here
            this.beforeTotal = parseFloat(0);
            this.prices.forEach(price => {
                this.beforeTotal += (parseFloat(price.beforePrice) * parseFloat(price.piece));
            });
            this.prices.forEach(price => {
                price.afterPrice = (parseFloat(price.beforePrice) / parseFloat(this.beforeTotal)) * parseFloat(this.afterTotal);
            });
        }
    }
});

/*

30 -> 20

40 -> 25

70 -> 45

120 -> 75

*/