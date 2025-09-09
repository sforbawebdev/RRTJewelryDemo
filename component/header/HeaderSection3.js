"use client";
import React, { useContext } from 'react'
import HeaderNav from '../navigation/HeaderNav'
import Link from 'next/link'
import { VerdaContext } from '@/context/VerdaContext'
import WishlistModal from '../modal/WishlistModal'
import CartModal from '../modal/CartModal'
import HeaderCategoryArea from './HeaderCategoryArea'

const HeaderSection3 = () => {
    const {
        handleWishlistShow,
        handleCartShow,
        isHeaderFixed,
        wishlist,
        cartItems,
        cartItemAmount,
        handleRemoveItemWishlist,
        handleRemoveItem,
        handleQuantityChange,
        handleSidebarOpen,
        wishlistItemAmount
    } = useContext(VerdaContext)
  return (
    <header className={`fz-header-section fz-2-header-section to-be-fixed ${isHeaderFixed? 'fixed':''}`}>
        <div className="row m-0 align-items-center">
            <div className="col-lg-4 col-md-6 col-9">
                <div className="fz-header-left-content d-flex align-items-center">
                    <div className="fz-logo-container">
                        <Link href="/">
                            <img src="images/logo.png" alt="logo" className="fz-logo"/>
                        </Link>
                    </div>
                    <HeaderCategoryArea header={''} title={''}/>
                </div>
            </div>

            <div className="col-6 header-nav-container order-3 order-lg-2">
                <HeaderNav position={'justify-content-end'}/>
            </div>

            <div className="col-lg-2 col-md-6 col-3 order-2 order-lg-3">
                <div className="fz-header-right-content">
                    <ul className="fz-header-right-actions d-flex align-items-center justify-content-end">
                        <li>
                            <a role="button" className="fz-header-wishlist-btn d-none d-lg-block" onClick={handleWishlistShow}>
                                <i className="fa-light fa-heart"></i>
                                <span className='count'>{wishlistItemAmount}</span>
                            </a>
                        </li>
                        <li>
                            <a role="button" className="fz-header-cart-btn d-none d-lg-block" onClick={handleCartShow}>
                                <i className="fa-light fa-cart-shopping"></i>
                                <span className="count">{cartItemAmount}</span>
                            </a>
                        </li>
                        <li><Link href="/account" className="d-none d-lg-block"><i className="fa-light fa-user"></i></Link></li>
                        <li><a role="button" onClick={handleSidebarOpen} className="fz-hamburger d-block d-lg-none"><i className="fa-light fa-bars-sort"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <WishlistModal wishlistArray={wishlist} removeItem={handleRemoveItemWishlist}/>
        <CartModal cartArray={cartItems} remove={handleRemoveItem} quantity={handleQuantityChange}/>
    </header>
  )
}

export default HeaderSection3