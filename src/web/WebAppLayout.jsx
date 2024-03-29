import styled, { keyframes } from 'styled-components'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Grid } from 'react-loader-spinner'

import store from '@state/state'

import Header from './Header'
import HomePage from './pages/HomePage'
import ExamplePage from './pages/ExamplePage'
import QRPage from './pages/QRPage'
import AboutPage from './pages/AboutPage'

import bg from '@assets/index_scale_adoption.webp'
import circle from '@assets/circle.png'
import solana from '@assets/s-logo.webp'

const ComputerHomePage = () => {
    const location = useLocation()
    const spinner = store(state => state.spinner)

    return (
        <Container>
            <Header />
            <Main>
                <AnimatePresence exitBeforeEnter>
                    <Routes location={location} key={location.pathname}>
                        <Route path='/' element={<HomePage />} />
                        <Route path='example' element={<ExamplePage />} />
                        <Route path='qr' element={<QRPage />} />
                        <Route path='about' element={<AboutPage />} />
                    </Routes>
                </AnimatePresence>
            </Main>
            {spinner && (
                <SpinnerBG>
                    <Grid height='250' width='250' radius='9' color='white' ariaLabel='three-dots-loading' />
                </SpinnerBG>
            )}
            <SolanaLogo src={solana} />
            <BGImage src={bg} />
            <MovingCircle src={circle} alt='background-circle' />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    position: relative;
    background-color: black;
    overflow: hidden;
`

const Main = styled.div`
    width: 100%;
    max-width: 1280px;
    min-height: calc(100vh - 80px);
    padding-top: 80px;
    position: relative;
    z-index: 3;
    margin: 0 auto;
`

const SpinnerBG = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 11;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.9);
`

const BGImage = styled.img`
    width: 50%;
    position: fixed;
    top: 0;
    right: 10%;
    z-index: 2;
    opacity: 0.1;
`
const SolanaLogo = styled.img`
    width: 15%;
    position: fixed;
    bottom: 0%;
    left: 15%;
    z-index: 2;
    opacity: 0.3;
`

const pulse = keyframes`
    0% {
        transform : scale(.9) translateX(-40%) translateY(-10%) rotate(180deg);
        opacity   : .4;
    }
    50% {
        transform : scale(1.3) translateX(-40%) translateY(25%) rotate(0);
        opacity   : .6;
    }
    100% {
        transform : scale(.8) translateX(20%) translateY(25%) rotate(180deg);
        opacity   : .3;
    }
`

const MovingCircle = styled.img`
    height: 700px;
    width: 700px;
    position: fixed;
    left: -100px;
    bottom: -100px;
    z-index: 1;
    animation: ${pulse} 5s linear alternate infinite;
`

export default ComputerHomePage
