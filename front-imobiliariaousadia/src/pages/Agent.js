import React from 'react';
import Footer from '../components/Footer/Footer.js';
import Navbar from '../components/Navbar/Navbar.js';
import ImgContainer from '../components/ImgContainer/ImgContainer.js';

import award1 from '../assets/Awards/image 6.jpg'
import award2 from '../assets/Awards/image 7.jpg'
import award3 from '../assets/Awards/image 9.jpg'

import './Agent.css'

import { FaStar, FaPhone, FaEnvelope  } from 'react-icons/fa';
import {agentDetails, houseDetails} from '../data.js'
import { useParams } from 'react-router-dom';

const AgentPage = () => {

    let {id} = useParams();
    let Agent = agentDetails[id];

  return (
    <div>
      <Navbar />
      
      <div className= 'agent-123-container'>
      <img className='agent-image' src={Agent.image}/>
      <div className='agent-data'>

        <h1>{Agent.name}</h1>
        <h4>Principal, Belle Property, Queanbay</h4>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        <p><b>Average Rating: 4.9</b></p>
        <div >
          <FaEnvelope /> {Agent.email}
        </div>
        <div>
          <FaPhone /> {Agent.telefone}
        </div>

        <h4>Speaciality suburbs</h4>
        Vila Pureza, Vila Rancho Velho, Vila Santa Madre Cabrini, Vila São José, Vila Sonia, Vila Vista Alegre

      </div>
      <hr className='agent-vline'/>
      <div className = 'awards'>
        <h2>Awards</h2>
        <div className='awards-img'>
        <img src = {award1}/>
        <img src = {award2}/>
        <img src = {award3}/>
        </div>
      </div>

      <hr className='agent-vline'/>
      </div>

      <div className='bottom-container'>
      <h2>My listing</h2>
        
        <div className="house-list">
        {houseDetails.map((house, index) => (
            <ImgContainer houseDetails = {house}
            />
          ))}
      </div>
      </div>


      <Footer />

    </div>
  );
};

export default AgentPage;