
class ReviewModel{
    reviewId: number;
    userEmail: string;
    date: string;
    rating: number;
    productId: number;
    reviewDescription?: string;

    constructor(reviewId: number,userEmail: string,date: string,rating: number,productId: number,reviewDescription: string){
        this.reviewId=reviewId;
        this.userEmail=userEmail;
        this.date=date;
        this.rating=rating;
        this.productId=productId;
        this.reviewDescription=reviewDescription;
    }
}
export default ReviewModel;