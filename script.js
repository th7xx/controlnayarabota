    const types = {
            1: "laptop",
            2: "mono",
            3: "desctop",
            4: "transformer"
        };
    function Product(manuf, type, model, price, description){
        this.manufactor = manuf;
        this.type = types.filter(i => i === type).pop();
        this.price = price;
        this.description = description;
        this.show = function() {
            return "Manufact: " + this.manufactor + " Type: " + this.type + " price: " + this.price + " Derscription: " + this.description
        }
    }
    function Trashcan(){
        this.array = [];
        this.addItem = function(item) {
            this.array.push(item);
        };
        this.deleteItem = function(item) {
            if (this.array.indexOf(item) !== -1) {
                this.array.splice(array.indexOf(item), 1);
            } else {
                return "No such item";
            }
        };
        this.showItems = function() {
            if (this.array.length !== 0) {
                for (let i in this.array) {
                    console.log(this.array[i].show());
                }
            }
        }
    }
    function Order(){
    }
    function Shop(){
        this.showProducts = function () {
            for(var i = 0; i < this.types.length; i++){
                var typeNum = this.types[i];
                console.log(typeNum + " - " + this.types[typeNum]);
            }
        };
        this.filterCategory = function(categ) {
            return this.array.map(i => i.type === categ)
        };
        this.sortItems = function(tp = "asc") {
            if (tp !== "asc") {
                this.array.sort(i => i.price);
                this.array.reverse();
            } else {
                this.array.sort(i => i.price);
            }
        }
    }
    Shop.prototype = Object.create(Trashcan.prototype);
    Shop.prototype.constructor = Trashcan;