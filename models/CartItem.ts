class CartItem {
    constructor(
        private quantity:number , 
        private productPrice:number,
        private productTitle:string,
        private sum:number,){
            
        }

        getQuantity = () => this.quantity
        getProductPrice = () => this.productPrice
        getProductTitle = () => this.productTitle
        getSum = () => this.sum

        setSum = (value:number) => this.sum += value
        incrementQuantity = () => this.quantity = this.quantity + 1
        decrementQuantity = () => this.quantity != 0 ? this.quantity -= 1:this.quantity = 0
}

export default CartItem;