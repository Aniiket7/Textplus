import { Center, Text } from '@chakra-ui/react'
import Stat from './comp/about/Stats.jsx'
import Testimonial from './comp/about/Testimonial.jsx'
import Footer from './comp/home/Fotter'
import Nav from './comp/Nav'

const About = () => {
    return (
        <div>
            <Nav />
            {/* <Text marginTop='20px' display="flex" justifyContent='center' alignItems="center" fontSize='4xl' fontFamily="'Josefin Sans', 'sans-serif'">The rise of chat.</Text> */}
            {/* <Text display="flex" justifyContent='center' alignItems="center">Smartphones have become a part of us—always on, always within reach to connect us with our friends and our world. </Text> */}
            {/* <Text display="block" justifyContent='center' alignItems="center">Today, many teens and young adults are slowly moving away from social media and are looking towards chat as their primary source for communication and information. And where better to turn to for a fun, safe place to connect? Kik, of course! </Text> */}
            <Stat />
            <Center height='70px'>
            </Center>
            <Testimonial />
            <Footer />

        </div>
    )
}

export default About
