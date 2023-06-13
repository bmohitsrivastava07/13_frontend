class ProductModel {
    productId: number;
    title: string;
    artist?: string;
    productDescription?: string;
    quantities?: number;
    quantityAvailable?: number;
    category?: string;
    image?: string;

    constructor (productId: number, title: string, artist: string, productDescription: string, 
        quantities: number, quantityAvailable: number, category: string, image: string) {
            this.productId = productId;
            this.title = title;
            this.artist = artist;
            this.productDescription = productDescription;
            this.quantities = quantities;
            this.quantityAvailable = quantityAvailable;
            this.category = category;
            this.image = image;
    }
}

export default ProductModel;