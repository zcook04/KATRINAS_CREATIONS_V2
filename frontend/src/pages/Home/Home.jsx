import React from 'react'
import Hero from "./Hero/Hero"
import Collections from "./Collections/Collections"
import AboutMe from "./AboutMe/AboutMe"
import Testimonials from "./Testimonials/Testimonials"


const Home = () => {
    return (
        <>
            <Hero/>
            <Collections />
            <AboutMe />
            <Testimonials/>  
        </>
    )
}

export default Home
