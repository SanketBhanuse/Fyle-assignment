import React from 'react'
import '../App.css'
import '../Css/Home.css'
import ImageWithText from '../Components/ImageWithText'
import Slider from '../Components/Slider'
import IconWithDecsription from '../Components/IconWithDecsription'
import ThumbnailSlider from '../Components/ThumbnailSlider'
import GrowthIndecator from '../Components/GrowthIndecator'
import TextBlock from '../Components/TextBlock'
import Footer from '../Components/Footer'
const Home = () => {
    return (
        <div>
            <ImageWithText />
            <Slider />
            <IconWithDecsription />
            <ThumbnailSlider />
            <GrowthIndecator />
            <TextBlock />
            <Footer />
        </div>
    )
}

export default Home