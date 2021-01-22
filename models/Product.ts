class Product {
    constructor(private id:string, 
        private ownerId:string , 
        private title:string , 
        private imageUrl:string , 
        private description:string , 
        private price:number){}

        getId = () => this.id
        getOwnerId = () => this.ownerId
        getTitle = () => this.title
        getImageUrl = () => this.imageUrl
        getDescription = () => this.description
        getPrice = () => this.price
}

export default Product;