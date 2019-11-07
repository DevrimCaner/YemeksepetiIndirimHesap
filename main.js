var app = new Vue({
    el: '#app',
    data: {
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
            //Setting Beforetotal
            this.beforeTotal = parseFloat(0);
            this.prices.forEach(price => {
                if (Number.isNaN(parseFloat(price.beforePrice)))
                    price.beforePrice = 0;
                if (Number.isNaN(parseFloat(price.piece)))
                    price.piece = 1;

                this.beforeTotal += (parseFloat(price.beforePrice) * parseFloat(price.piece));
            });
            //setting After Total
            if (parseFloat(this.beforeTotal) < 30) {
                this.afterTotal = this.beforeTotal;
            }
            else if (parseFloat(this.beforeTotal) >= 30 && parseFloat(this.beforeTotal) < 40) {
                this.afterTotal = parseFloat(this.beforeTotal) - 10;
            }
            else if (parseFloat(this.beforeTotal) >= 40 && parseFloat(this.beforeTotal) < 70) {
                this.afterTotal = parseFloat(this.beforeTotal) - 20;
            }
            else if (parseFloat(this.beforeTotal) >= 70 && parseFloat(this.beforeTotal) < 120) {
                this.afterTotal = parseFloat(this.beforeTotal) - 25;
            }
            else if (parseFloat(this.beforeTotal) >= 120) {
                this.afterTotal = parseFloat(this.beforeTotal) - 45;
            }
            else {
                this.afterTotal = this.beforeTotal;
            }

            //setting Prices
            this.prices.forEach(price => {
                price.afterPrice = (parseFloat(price.beforePrice) / parseFloat(this.beforeTotal)) * parseFloat(this.afterTotal);
                price.afterPrice = parseFloat(price.afterPrice) * 100;
                price.afterPrice = Math.floor(parseFloat(price.afterPrice));
                price.afterPrice = parseFloat(price.afterPrice) / 100;
                if (Number.isNaN(parseFloat(price.afterPrice)))
                    price.afterPrice = 0;
            });
        },
        removeElement: function (index) {
            this.prices.splice(index, 1);
            this.calculateData();
        },
        clearData: function () {
            this.prices = [{ beforePrice: 0, afterPrice: 0, piece: 1 }]
            this.beforeTotal = 0;
            this.afterTotal = 0;
        }
    }
});