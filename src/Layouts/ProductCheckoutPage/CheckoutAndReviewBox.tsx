import { Link } from "react-router-dom";
import ProductModel from "../../Models/ProductModel";

export const CheckoutAndReviewBox: React.FC<{ product: ProductModel | undefined, mobile: boolean, }> = (props) => {
    return (
        <div className={props.mobile ? 'card d-flex mt-5' : 'card col-3 container d-flex mb-5'}>
            <div className='card-body container'>
                <div className='mt-3'>
                    <p>
                        <b>0/5 </b>
                        books checked out
                    </p>
                    <hr />
                    {props.product && props.product.quantityAvailable && props.product.quantityAvailable> 0 ?
                        <h4 className='text-success'>
                            Available
                        </h4>
                        :
                        <h4 className='text-danger'>
                            Wait List
                        </h4>
                    }
                    <div className='row'>
                        <p className='col-6 lead'>
                            <b>{props.product?.quantities} </b>
                            quantities
                        </p>
                        <p className='col-6 lead'>
                            <b>{props.product?.quantityAvailable} </b>
                            available
                        </p>
                    </div>
                </div>
                <Link to='/login' className='btn btn-success btn-lg'>Sign in</Link>
                <hr />
                <p className='mt-3'>
                    This number can change until placing order has been complete.
                </p>
                <p>
                    Sign in to be able to leave a review.
                </p>
            </div>
        </div>
    );
}