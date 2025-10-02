import { useState } from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import img1 from './assets/logo-soad.svg'
import img2 from './assets/Babymetal-logo.png'
import img3 from './assets/logo-metallica.svg'
import img4 from './assets/him-logo.svg'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const carouselItems = [
    { id: 1, title: "System of a down", img: img1 },
    { id: 2, title: "BabyMetal", img: img2 },
    { id: 3, title: "Metallica", img: img3 },
    { id: 4, title: "HIM", img: img4 },
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
  }

  return (
    <>
      <header className="cabecalho">
        <h1>Music-web</h1>
      </header>

      <h3 className='subtitulo'>
        Suas musicas estão com saudades? Encontre elas aqui!
      </h3>

      <div className="boxCards">
        <a className="cards">
          <h1>card1</h1>
        </a>
        <a className="cards">
          <h1>card2</h1>
        </a>
        <a className="cards">
          <h1>card3</h1>
        </a>
      </div>

      <div className="carousel-container">
        <Slider {...settings}>
          {carouselItems.map(item => (
            <div key={item.id} className="carousel-slide">
              <img src={item.img} alt={item.title} className="carousel-img" />
              <h3>{item.title}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </>
  )
}

export default App