import React from 'react'
import { Link } from "react-router-dom"
import "./Categories.css"
// import { useCartContext } from "../Context/CategoryContext";
import { useCartContext } from '../Context/CartContext';


export const Categories = () => {
  const { setCategory } = useCartContext();

  return (
    <>
      <div className="categories">
        <Link className='product' to="/Product/Headphone" onClick={() => setCategory()}>
          <img src='ProductThumbnail/headphone.jpeg' alt='headphone_thumbnail' />
          <div><b>Headphones</b></div>
        </Link>
        <Link className='product' to="/Product/Jewellery" onClick={() => setCategory()}>
          <img src='ProductThumbnail/jewellery.jpg' alt='jewellery_thumbnail' />
          <div><b>Jewellery</b></div>
        </Link>
        <Link className='product' to="/Product/Laptop" onClick={() => setCategory()}>
          <div><img src='ProductThumbnail/laptop.jpeg' alt='laptop_thumbnail' /></div>
          <div><b>Laptops</b></div>
        </Link>
        <Link className='product' to="/Product/MenEthnicWear" onClick={() => setCategory()}>
          <img src='ProductThumbnail/mens_ethnic_wear.webp' alt='mens_ethnic_wear_thumbnail' />
          <div><b>Men's Ethnic Wear</b></div>
        </Link>
        <Link className='product' to="/Product/MenSneaker" onClick={() => setCategory()}>
          <img src='ProductThumbnail/mens_sneaker.avif' alt='mens_sneaker_thumbnail' />
          <div><b>Men's Sneakers</b></div>
        </Link>
        <Link className='product' to="/Product/MobilePhone" onClick={() => setCategory()}>
          <img src='ProductThumbnail/mobile.webp' alt='mobile_thumbnail' />
          <div><b>Smartphones</b></div>
        </Link>
        <Link className='product' to="/Product/MusicalInstrument" onClick={() => setCategory()}>
          <img src='ProductThumbnail/musical_instrument.jpg' alt='musical_instrument_thumbnail' />
          <div><b>Musical Instruments</b></div>
        </Link>
        <Link className='product' to="/Product/Saree" onClick={() => setCategory()}>
          <img src='ProductThumbnail/saree.jpg' alt='saree_thumbnail' />
          <div><b>Sarees</b></div>
        </Link>
        <Link className='product' to="/Product/Shirt" onClick={() => setCategory()}>
          <img src='ProductThumbnail/shirt.jpeg' alt='shirt_thumbnail' />
          <div><b>Shirts</b></div>
        </Link>
        <Link className='product' to="/Product/SmartWatches" onClick={() => setCategory()}>
          <img src='ProductThumbnail/smartwatches.jpeg' alt='smartwatches_thumbnail' />
          <div><b>Smartwatches</b></div>
        </Link>
        <Link className='product' to="/Product/Trouser" onClick={() => setCategory()}>
          <img src='ProductThumbnail/trouser.jpeg' alt='trouser_thumbnail' />
          <div><b>Men's Trouser</b></div>
        </Link>
        <Link className='product' to="/Product/TV" onClick={() => setCategory()}>
          <img src='ProductThumbnail/tv.jpeg' alt='tv_thumbnail' />
          <div><b>Television</b></div>
        </Link>
        <Link className='product' to="/Product/WomenHandBag" onClick={() => setCategory()}>
          <img src='ProductThumbnail/women_handbag.jpg' alt='women_handbag_thumbnail' />
          <div><b>Women Handbag</b></div>
        </Link>
        <Link className='product' to="/Product/WomenKurta" onClick={() => setCategory()}>
          <img src='ProductThumbnail/women_kurta.webp' alt='women_kurta_thumbnail' />
          <div><b>Women Kurta</b></div>
        </Link>
      </div>
    </>
  );
}

