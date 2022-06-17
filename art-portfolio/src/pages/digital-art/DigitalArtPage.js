import { useState, useEffect } from 'react';
import "../imageStyles.css"

// Make this into a component

function DigitalArtPage() {
  const [images, setImages] = useState([])

  useEffect(() => {
    importAll()
  }, [])

  const importAll = () => {
    const r = require.context("../../images/digital-art", false, /\.(png|jpe?g|svg)$/)

    let imagesArr = []
    r.keys().forEach((item) => { 
      imagesArr.push(r(item))
    })
    setImages(imagesArr)
  }

  // Render
  const renderImages = () => {
    return images.map((img, index) => {
      return <img className="image_art" src={img} alt={`Art number ${index}`} key={index} />
    })
  }

  return (
    <>
      {renderImages()}
    </>
  )
}

export default DigitalArtPage;