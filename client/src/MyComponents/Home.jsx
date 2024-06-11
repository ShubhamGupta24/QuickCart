import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from "../Context/CartContext";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css'

export const Home = () => {
  const { setCategory, category } = useCartContext();
  const settings = {
    dots: false,
    infinite: true,
    adaptiveHeight: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 3,
    swipeToSlide: true
  };
  useEffect(() => {
    console.log("..app category", category)
    setCategory();
  }, [category])

  const scroll = [
    { id: 1, src: 'ProductThumbnail/headphone.jpeg', alt: 'headphone_thumbnail', name: 'Headphone' },
    { id: 2, src: 'ProductThumbnail/jewellery.jpg', alt: 'jewellery_thumbnail', name: 'Jewellery' },
    { id: 3, src: 'ProductThumbnail/laptop.jpeg', alt: 'laptop_thumbnail', name: 'Laptop' },
    { id: 4, src: 'ProductThumbnail/mens_ethnic_wear.webp', alt: 'mens_ethnic_wear_thumbnail', name: 'MenEthnicWear' },
    { id: 5, src: 'ProductThumbnail/mens_sneaker.avif', alt: 'mens_sneaker_thumbnail', name: 'MenSneaker' },
    { id: 6, src: 'ProductThumbnail/mobile.webp', alt: 'mobile_thumbnail', width: '100%', name: 'MobilePhone', height: 'auto' },
    { id: 7, src: 'ProductThumbnail/musical_instrument.jpg', alt: 'musical_instrument_thumbnail', name: 'MusicalInstrument' },
    { id: 8, src: 'ProductThumbnail/saree.jpg', alt: 'saree_thumbnail', name: 'Saree' },
    { id: 9, src: 'ProductThumbnail/shirt.jpeg', alt: 'shirt_thumbnail', name: 'Shirt' },
    { id: 10, src: 'ProductThumbnail/smartwatches.jpeg', alt: 'smartwatches_thumbnail', name: 'SmartWatches' },
    { id: 11, src: 'ProductThumbnail/trouser.jpeg', alt: 'trouser_thumbnail', name: 'Trouser' },
    { id: 12, src: 'ProductThumbnail/tv.jpeg', alt: 'tv_thumbnail', name: 'TV' },
    { id: 13, src: 'ProductThumbnail/women_handbag.jpg', alt: 'women_handbag_thumbnail', name: 'WomenHandBag' },
    { id: 14, src: 'ProductThumbnail/women_kurta.webp', alt: 'women_kurta_thumbnail', name: 'WomenKurta' },
  ]
  return (
    <div className='home'>
      <div className='carousel' >
        <Slider {...settings}>
          {scroll.map((scroll) => (
            <div key={scroll.id}>
              <Link to={"/Product/" + scroll.name}><img className='photo' src={scroll.src} alt={scroll.alt} onClick={() => { console.log('hi ', category); setCategory() }} /></Link>
            </div>
          ))}
        </Slider>
      </div>
      <div className='advertisement'>
        <div className="ad">
          <div className='content' >
            <div className="writeup">
              <h1>Hurry Up Stocks limited!!!!!</h1>
              <span>Get upto 40% discounts on SmartPhones</span></div>
            <img className='adphoto' id='one' src="ProductThumbnail/ad1phone.png" alt="" />
            <div className='product' style={{ display: 'flex', width: '100%', border: 'none' }}><Link className='shop' to={"/Product/MobilePhone"} onClick={() => setCategory()}>Shop Now</Link></div>
          </div>
          <img className='adphoto' id='two' src="ProductThumbnail/ad1.png" alt="" />
        </div>

        <div className="ad">
          <div className='content' >
            <div className="writeup">
              <h1>Hurry Up Stocks limited!!!!!</h1>
              <span>Get the trending and coolest Sneakers for yourself</span>
              <span>Be a SneakerHead and get the best of all time Sneakers here!</span></div>
            <img className='adphoto' id='one' src="ProductThumbnail/adSneakers.png" alt="ad1_photo" />
            <div className='product' style={{ display: 'flex', width: '100%', border: 'none' }}><Link className='shop' to={"/Product/MenSneaker"} onClick={() => setCategory()}>Shop Now</Link></div>
          </div>
          <img className='adphoto' id='two' src="ProductThumbnail/ad2photo2-Photoroom.png-Photoroom.png" alt="ad2_photo" />
        </div>
      </div>
      <div>
      </div>
    </div>
  )
}
