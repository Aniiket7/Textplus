import React from 'react'
import Nav from './comp/Nav'
import { AspectRatio, Box, HStack, Stack, Text } from '@chakra-ui/react'
import ContactForm from './comp/ContactForm'
import Footer from './comp/home/Fotter'

const Contact = () => {
    return (
        <>
            <Nav />
            <HStack spacing='24px'>
                <Box w='950px' h='450px' >
                    <AspectRatio maxW='820px' maxH='550px' my='25px' d='block' ml='100px' alignItems='center' justifyContent='center' ratio={1}>
                        <iframe d='flex' alignItems='center' justifyContent='center'
                            title='map'
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.901299682884!2d72.82209510047862!3d21.23576213581738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f759203d60b%3A0x812052ab7006337c!2sAvalon%20The%20Commercial%20Hub!5e0!3m2!1sen!2sin!4v1614256233355!5m2!1sen!2sin"
                            allowFullScreen
                        />
                    </AspectRatio>
                </Box>
                <Box w='450px' h='450px' ml='px'>
                    <Stack direction='row' spacing='50px' my='44px'>
                        <i class="fas fa-map-marked-alt fa-5x" style={{ color: "red" }}></i>
                        <Text d='flex' alignItems='center' justifyContent='center'>
                            A 415 - Avalon Mall, Ambatalavdi , Surat
                        </Text>
                    </Stack>
                    <Stack direction='row'>
                        <Text color='red.400' my='-30px' mx='10px'>
                            Address
                        </Text>
                    </Stack>


                    <Stack direction='row' spacing='50px' my='44px'>
                        <i class="fa fa-user fa-6x" aria-hidden="true" style={{ color: "red" }}></i>
                        <Stack direction='column'>

                            <Text >
                                Aniket Movaliya - 8849729618
                            </Text><Text >
                                Bhavdip Maniya - 7778031900
                            </Text>

                            <Text >
                                Jay Nakrani - 9879127331
                            </Text>
                            <Text >
                                Preet Padariya - 9879024660
                            </Text>
                        </Stack>
                    </Stack>
                    <Stack direction='row'>
                        <Text color='red.400' my='-30px' mx='10px'>
                            Owners
                        </Text>
                    </Stack>


                    <Stack direction='row' spacing='50px' my='44px'>
                        <i class="fas fa-envelope fa-5x" style={{ color: "red" }}></i>
                        <Text d='flex' alignItems='center' justifyContent='center'>
                            support@textpluschat.com
                        </Text>
                    </Stack>
                    <Stack direction='row'>
                        <Text color='red.400' my='-30px' mx='10px'>
                            Mail Us
                        </Text>
                    </Stack>
                </Box>

            </HStack>

            {/* contact form area */}
            <div id="form" style={{ marginTop: "200px" }}> </div>
            <ContactForm />
            <Footer/>

        </>
    )
}

export default Contact
