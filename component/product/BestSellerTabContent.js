"use client";
import { VerdaContext } from '@/context/VerdaContext'
import Link from 'next/link'
import React, { useContext } from 'react'

const BestSellerTabContent = ({ornamentsData}) => {
    const {
        addToWishlist,
        addToCart,
        allOrnament
    } = useContext(VerdaContext)
  return (
    <div className="row gy-4 gx-3 justify-content-center">
        {ornamentsData.map((item) => (
            <div className="col-xl-3 col-md-4 col-6 col-xxs-12" key={item.id}>
                <div className="fz-2-single-product">
                    <div className="fz-2-single-product-img">
                        <img src={item.imgSrc} alt={item.name}/>

                        <div className="fz-2-single-product-actions">
                            <button 
                            className="fz-add-to-cart-btn"
                            onClick={() => addToCart(item.id,allOrnament)}
                            >Add to cart</button>
                            <button 
                            className="fz-add-to-wishlist"
                            onClick={() => addToWishlist(item.id,allOrnament)}
                            >{item.isInWishlist? (<i className="fa-solid fa-heart"></i>):(<i className="fa-regular fa-heart"></i>)}</button>
                        </div>
                    </div>
                    <div className="fz-2-single-product-txt">
                        <span className="fz-2-single-product-category"><Link href="/shop">{item.category}</Link></span>
                        <h5 className="fz-2-single-product-title"><Link href={`/ornaments/${item.slug}`}>{item.name}</Link></h5>
                    <span className="fz-2-single-product-price">${item.price}<span className="prev-price">${item.oldPrice}</span></span>
                    </div>
                </div>
            </div> 
        ))}
       
    </div>
  )
}

export default BestSellerTabContent