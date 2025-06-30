import React, { useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar'; // Make sure the path to Navbar is correct
import './Homepage.css';
import dessertImage from './images/img1.jpeg'; // Correct relative path to the image
import images from './images/special_combos.png';
import imag2Image from './images/img2.jpeg';
import imag3Image from './images/img3.jpeg';
import imag4Image from './images/img4.jpeg';
import imag5Image from './images/fish.jpg';
import imag6Image from './images/img6.jpeg';
import imag7Image from './images/mommos.avif';
import imag8Image from './images/img8.jpeg';
import imag11Image from './images/img11.jpeg';
import { useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

export default function Homepage() {
  const navigate = useNavigate();
  const [selectedItems, setSelectedItems] = useState([]);
  const [popMessage, setPopMessage] = useState(null);
  const [showMiniForm, setShowMiniForm] = useState(false); // State to control showing the mini form

  const handleOrderClick = (event) => {
    const h2Text = event.target.closest('.box_info').querySelector('h2').innerText;
    setPopMessage(`You have selected: ${h2Text}`);
    setTimeout(() => setPopMessage(null), 500); // Remove pop message after 0.5 seconds
    setSelectedItems((prevItems) => [...prevItems, h2Text]);
  };

  const handleRemoveItem = (indexToRemove) => {
    setSelectedItems((prevItems) => prevItems.filter((_, index) => index !== indexToRemove));
  };

  const handleProceedToContact = () => {
    navigate('/contact', { state: { order: selectedItems } });
  };

  const toggleCart = () => {
    setShowMiniForm(!showMiniForm); // Toggle showing the mini form
  };

  return (
    <>
      <Navbar toggleCart={toggleCart} isCartOpen={showMiniForm} />
      <section className="home_page">
        <div className="home_content">
          <div><img className='div_img' src={images} alt="Description of the image" /></div>
          <div className='home_info'>
            <h1 id='home_h1'>Welcome to Foodify!</h1>
            <p id='home_p'>At Foodify, we believe that every meal should be an experience to savor. Our chefs are passionate about crafting dishes that not only satisfy your hunger but also delight your senses. Whether you're here for a casual lunch, a family dinner, or a special celebration, we've got something to make every moment unforgettable.
              .</p>
            <li>
              <ScrollLink id="link" to="menu" smooth={true} duration={500} className="home_btn">Order</ScrollLink>
            </li>
          </div>
        </div>
      </section>

      <div className='menu_page' id='menu'>
        {showMiniForm && (
          <div className="mini-window-overlay">
            <div className="mini-window">
              <h3>Selected Items</h3>
              <ul>
                {selectedItems.map((item, index) => (
                  <li key={index}>
                    {item} <button onClick={() => handleRemoveItem(index)}>Remove</button>
                  </li>
                ))}
              </ul>
              <button id="finish_btn" onClick={handleProceedToContact}>Finish Order</button>
              <button className="go_back_btn" onClick={toggleCart}>Go Back</button>
            </div>
          </div>
        )}
        <div className="home-container">
          {popMessage && (
            <div className="pop-message">
              {popMessage}
            </div>
          )}

          <div className="box box1" >
            <div className='img_info'>
              <div><img className='box_img img1' src={dessertImage} alt="Description of the image" /></div>
              <div className='box_info'>
                <h2>Masala Dosa</h2>
                <p>Masala Dosa is one of the most popular South Indian breakfast dishes served in restaurants and tiffin centres.</p>
                <button className='dev_btn' onClick={handleOrderClick}>Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="box box1" >
            <div className='img_info'>
              <div><img className='box_img img2' src={imag11Image} alt="Description of the image" /></div>
              <div className='box_info'>
                <h2>Biriyani</h2>
                <p>Biryani is a mixed rice dish, mainly popular in South Asia. It is made with rice, some type of meat</p>
                <button className='dev_btn' onClick={handleOrderClick}>Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="box box1" >
            <div className='img_info'>
              <div><img className='box_img img3' src={imag2Image} alt="Description of the image" /></div>
              <div className='box_info'>
                <h2>Chicken Tikka </h2>
                <p>Chicken Tikka are boneless pieces of chicken,threaded on a metal skewer and cooked on live charcoal.</p>
                <button className='dev_btn' onClick={handleOrderClick}>Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="box box1" >
            <div className='img_info'>
              <div><img className='box_img img4' src={imag3Image} alt="Description of the image" /></div>
              <div className='box_info'>
                <h2>Chicken Popcorn</h2>
                <p>Popcorn chicken is a dish consisting of small, bite-sized pieces of chicken (about the size of popped corn kernels) that have been breaded and fried.</p>
                <button className='dev_btn' onClick={handleOrderClick}>Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="box box1" >
            <div className='img_info'>
              <div><img className='box_img img5' src={imag4Image} alt="Description of the image" /></div>
              <div className='box_info'>
                <h2>Pizza</h2>
                <p>pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients,</p>
                <button className='dev_btn' onClick={handleOrderClick}>Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="box box1" >
            <div className='img_info'>
              <div><img className='box_img img6' src={imag5Image} alt="Description of the image" /></div>
              <div className='box_info'>
                <h2>Fried Fish</h2>
                <p>Fried fish is any fish or shellfish that has been prepared by frying. Often, the fish is covered in batter, egg and breadcrumbs, flour, or herbs and spices before being fried and served, often with a slice of lemon</p>
                <button className='dev_btn' onClick={handleOrderClick}>Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="box box1" >
            <div className='img_info'>
              <div><img className='box_img img7' src={imag6Image} alt="Description of the image" /></div>
              <div className='box_info'>
                <h2>Burger</h2>
                <p>A burger is a patty of ground beef grilled and placed between two halves of a bun. Slices of raw onion, lettuce,and other ingredients add flavor.</p>
                <button className='dev_btn' onClick={handleOrderClick}>Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="box box1" >
            <div className='img_info'>
              <div><img className='box_img img8' src={imag7Image} alt="Description of the image" /></div>
              <div className='box_info'>
                <h2>Mommos</h2>
                <p>It is believed that momos originated in Tibet and were introduced to Nepal by Tibetan immigrants who settled in the Kathmandu Valley.</p>
                <button className='dev_btn' onClick={handleOrderClick}>Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="box box1" >
            <div className='img_info'>
              <div><img className='box_img img9' src={imag8Image} alt="Description of the image" /></div>
              <div className='box_info'>
                <h2>Noodels</h2>
                <p>Noodle, a cooked egg-and-flour paste prominent in European and Asian cuisine, generally distinguished from pasta by its elongated ribbonlike form.</p>
                <button className='dev_btn' onClick={handleOrderClick}>Add to Cart</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
