import React from 'react'
import ProductModel from '../../../Models/ProductModel';
import { Link } from 'react-router-dom';

export const ReturnProduct: React.FC<{product:ProductModel}>=(props)=>{
    return (
        <div className='col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3'>
        <div className='text-center'>
            {props.product.image ? 
                <img
                    src={props.product.image}
                    width='151'
                    height='233'
                    alt="art"
                />
                :
                <img
                    src={require('./../../../Images/ArtImages/AutumnPathWay.jpeg')}
                    width='151'
                    height='233'
                    alt="art"
                />
            }
            <h6 className='mt-2'>{props.product.title}</h6>
            <p>{props.product.artist}</p>
            <Link className='btn main-color text-white' to={`checkout/${props.product.productId}`}>Reserve</Link>
        </div>
    </div>
        
    );
}