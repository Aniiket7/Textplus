import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import Nav from './comp/Nav'
import Fea1 from './comp/home/Feture1'
import Fea2 from './comp/home/Feature2'
import Allf from './comp/home/AllFeatures'
import Footer from './comp/home/Fotter'
import { Divider } from '@chakra-ui/react'
const Home = () => {


    return (
        <div>
            <Nav />
            <Fea1 />
            <Divider orientation='horizontal' />
            <Divider orientation='horizontal' />
            <Fea2 />
            <Divider orientation='horizontal' />
            <Divider orientation='horizontal' />
            <Allf />
            <Divider orientation='horizontal' />
            <Divider orientation='horizontal' />
            <Footer />
        </div>
    )
}
export default Home
