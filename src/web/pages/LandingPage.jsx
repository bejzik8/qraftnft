import styled from 'styled-components'
import { motion } from 'framer-motion'

import AnimatedPage from '../components/AnimatedPage'
import AnimatedSection from '@components/AnimatedSection'
import Heading from '@components/Heading'
import Text from '@components/Text'

import qr from '@assets/dao-hero-cropped.webp'

const LandingPage = () => {
    const sections = [
        {
            keyProp: 'project-idea',
            animationDelay: 0,
            heading: 'Project Idea',
            description:
                'Create a new way of socialising with the people. Generate an image with the NFT in your possession that you are proud of and add a QR code which contains link to your social networks. Show the people who are you and what you like.'
        },
        {
            keyProp: 'stickerize-image',
            animationDelay: 0.5,
            heading: 'Modern Visit Card',
            description:
                'Who needs a vintage visiting card? Order stickers with your newly generated image and share it with the people. Share your shiny sticker, connect with the similar people, people who share the interest in the same NFT collection.'
        },
        {
            keyProp: 'sell-nft',
            animationDelay: 0.7,
            heading: 'Sell the NFT',
            description:
                "Creators, resellers, advertise your product! Create an image with the NFT you want to sell and add a link to the application where it's being sold. Put the image on your social networks or share it with the people."
        },
        {
            keyProp: 'graffiti',
            animationDelay: 0.9,
            heading: 'New Graffiti',
            description:
                'Mint your art creations into the blockchain and create a sticker out of it. Link it to the social of your choice so people can see your work. Stickerize the city!'
        }
    ]

    return (
        <AnimatedPage heading='Welcome' description='Greetings Solana Hacker House Krakow!'>
            <LeftSide>
                {sections.map(({ keyProp, animationDelay, heading, description }) => (
                    <AnimatedSection keyProp={keyProp} delay={animationDelay}>
                        <Heading type='small'>{heading}</Heading>
                        <Text size='medium' marginBottom='30px'>
                            {description}
                        </Text>
                    </AnimatedSection>
                ))}
            </LeftSide>
            <RightSide initial={{ scale: 0 }} animate={{ scale: 1, transition: { delay: 1.1 } }}>
                <QRImage src={qr} />
            </RightSide>
        </AnimatedPage>
    )
}

const LeftSide = styled.div`
    width: calc(70% - 50px);
    display: inline-block;
    vertical-align: top;
    margin-right: 50px;
`

const RightSide = styled(motion.div)`
    width: 30%;
    display: inline-block;
    vertical-align: top;
    padding-top: 50px;
`

const QRImage = styled.img`
    width: 100%;
`

export default LandingPage