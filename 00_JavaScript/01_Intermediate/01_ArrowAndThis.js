// Arrow and this 

const mouse = {
    model: 'HP322', 
    isWireless: true,
    isGaming: false,
    price: 700,
    // Here, this binds to the local context of the object, so we are 
    // able to access the data members using this . operator
    desc: function(){
        if (this.isGaming){
            return `${this.model} is a gaming mouse, priced at ${this.priceX}`
        }
        return `${this.model} is a wireless mouse, priced at ${this.priceX}`
    }
}

const mouse1 = {
    model: 'HP322', 
    isWireless: true,
    isGaming: false,
    price: 700,
    // Here, this binds to the global context of the object and will 
    // give undefined result since global context does not have any 
    // variable name model or price etc 
    
    desc: () => {
        if (this.isGaming){
            return `${this.model} is a gaming mouse, priced at ${this.priceX}`
        }
        return `${this.model} is a wireless mouse, priced at ${this.priceX}`
    }
}

console.log(mouse.desc())

// Don't use arrow function in method or constructors 