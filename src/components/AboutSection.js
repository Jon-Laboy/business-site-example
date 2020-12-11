import React from 'react'
import home1 from '../img/home1.png'
import styled from 'styled-components'
import {About, Description, Image, Hide} from '../styles'
import {motion} from 'framer-motion'
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from './Wave'

const AboutSection = () => {
    return (
        <About>
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2 variants={titleAnim}>
                            I'm
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>Jon <span>Laboy</span> </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>Front End <span>Dev</span> </motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>Contact us for any photography or videography ideas that you have. We have professionals with amazing skills.</motion.p>
                <motion.button variants={fade}>Contact Us</motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnim} initial="hidden" animate="show" src={home1} alt="camera guy" />
            </Image>
            <Wave /> 
        </About>
    )
}

//Styled Component



export default AboutSection