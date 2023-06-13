import { Link } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";

export const SearchProduct: React.FC<{ product: ProductModel }> = (props) => {
    return (
        <div className="card mt-3 shadow p-3 mb-3 bg-body rounded">
            <div className="row g-0">
                <div className="col-md-2">
                    <div className="d-none d-lg-block">
                        {props.product.image ?
                            <img src={props.product.image}
                                width='123' height='196' alt='Art' />
                            :
                            <img src={require('../../../Images/ArtImages/AutumnPathWay.jpeg')}
                                width='123' height='196' alt='Art' />

                        }
                    </div>
                    <div className="d-lg-none d-flex justify-content-center align-items-center">
                    {props.product.image ?
                            <img src={props.product.image}
                                width='123' height='196' alt='Art' />
                            :
                            <img src={require('../../../Images/ArtImages/AutumnPathWay.jpeg')}
                                width='123' height='196' alt='Art' />

                        }
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <h5 className="card-title">
                            {props.product.artist}
                        </h5>
                        <h4>
                            {props.product.title}
                        </h4>
                        <p className="card-text">
                            {props.product.productDescription}
                        </p>
                    </div>
                </div>
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                    <Link className="btn btn-md main-color text-white" to={`/checkout/${props.product.productId}`}>
                        View Details
                    </Link>

                </div>
            </div>
        </div>

    );
}