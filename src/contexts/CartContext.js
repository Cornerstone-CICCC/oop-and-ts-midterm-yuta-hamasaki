export class CartContext {
  constructor() {
    this.cart = []
    this.listeners = [] 
  }


  //for PPRICE
  get totalAmount() {
    return this.cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
  }

  get totalQuantity(){
    return  this.cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  // addProduct(item) {
  //     this.cart.push(item)
  //   this.notifyListeners()
  // }


  addProduct(item) {
    const existingItem = this.cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cart.push({ ...item, quantity: 1 });
    }
    
    this.notifyListeners();
  }
  getCart() {
    return this.cart
  }

  updateQuantity(id, newQuantity) {
    const product = this.cart.find(item => item.id === id);
    if (product) {
      if (newQuantity <= 0) {
        this.removeProduct(id);
      } else {
        product.quantity = newQuantity;
      }
    }


    this.notifyListeners();
  }

  removeProduct(id){
    this.cart = this.cart.filter(cartItem => cartItem.id !== id);
    this.notifyListeners();
  }


  subscribe(listener) {
    this.listeners.push(listener)
  }

  notifyListeners() {
    this.listeners.forEach(listener => listener(this.cart))
  }
}