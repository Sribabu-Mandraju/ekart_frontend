import React from 'react'
import Header from '../components/header/Header'
import Hero from './Hero'
import About from './About'
import Team from './Team'
import { HeroHighlight } from '../components/imported/Highlight'
import { World } from '../components/imported/Globe'
import { FollowerPointerCard } from '../components/imported/Pointer'

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
      <About />
      <Team />
      <HeroHighlight />
      {/* <FollowerPointerCard className="p-10 bg-white shadow-lg rounded-lg">
        <div className="text-center">Hello</div>
      </FollowerPointerCard> */}
      {/* <World globeConfig={globeConfig} data={data} />  */}
    </>
  )
}

export default Mainpage
