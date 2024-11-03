import React from 'react'
import Header from '../components/header/Header'
import Hero from './Hero'
import About from './About'
import Team from './Team'
import { HeroHighlight } from '../components/imported/Highlight'
import { World } from '../components/imported/Globe'
import { FollowerPointerCard } from '../components/imported/Pointer'
import { CardContainer, CardBody, CardItem } from "../components/imported/TeamCard";
import img from '../assets/img/download.jpeg'
import Contact from './Contact'


const Mainpage = () => {
  const globeConfig = {
    ambientLight: '#ffffff',
    directionalLeftLight: '#ffffff',
    directionalTopLight: '#ffffff',
    pointLight: '#ffffff',
    globeColor: '#1d072e',
    emissive: '#000000',
    emissiveIntensity: 0.1,
    shininess: 0.9,
    showAtmosphere: true,
    atmosphereColor: '#ffffff',
    atmosphereAltitude: 0.1,
    polygonColor: 'rgba(255, 255, 255, 0.7)',
    rings: 1,
    maxRings: 3,
  };

  const data = [
    // Your data should match the structure expected by the Globe component.
    {
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 40.7128,
      endLng: -74.0060,
      color: '#ff0000',
      order: 1,
      arcAlt: 0.5,
    },
    // Add more data as needed
  ];
  return (
    <>
      <Hero />
      <div className="text-center text-3xl md:text-5xl font-bold py-4 fontS">About Us</div>
      <About />
      <div className="text-center text-3xl md:text-5xl font-bold py-4 fontS">Meet Our Team</div>

      <Team />
      <div className="w-full flex items-center justify-center">
        <CardContainer className="your-container-class h-full border p-3" containerClassName="your-main-container-class">
          <CardBody className="your-card-body-class">
            <CardItem className="your-card-item-class overflow-hidden w-[90%] mx-auto rounded-lg h-[230px] bg-zinc-300" translateX={25} translateY={10} translateZ={15} rotateX={7.5} rotateY={5}>
              <img src={img} alt="" className="w-full h-full" />
            </CardItem>
            <CardItem className="w-[90%] h-[130px] mx-auto rounded-lg flex flex-col mt-[10px]" translateX={-25} translateY={-10} translateZ={-15} rotateX={-7.5} rotateY={-5}>
                <div className="text-center mt-3 font-semibold text-2xl fontS">Sribabu Mandraju</div>
                <div className="text-center text-zinc-400">Web Developer</div>
            </CardItem>
          </CardBody>
      </CardContainer>
      </div>
      <div className="text-center text-3xl md:text-5xl font-bold py-4 fontS">Customer Care</div>
    </>
  )
}

export default Mainpage
