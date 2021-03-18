const machine = {

  litersOfCoffee : 0,

  fillWithLitersOfCoffee : function (chiffre){
  
    this.litersOfCoffee += chiffre;
    return this.fillWithLitersOfCoffee;
  },
  expresso : function (number) {
    this.litersOfCoffee -= number;
    return this;
  
  },
    
   
 

  longeCoffee : function (numbers) {
    this.litersOfCoffee -= numbers;
    return this.fillWithLitersOfCoffee;
  },






};






module.exports = machine;