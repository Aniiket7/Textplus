import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Center } from '@chakra-ui/react';
import { FcCollaboration, FcConferenceCall, FcLink } from 'react-icons/fc';

interface FeatureProps {
    title: string;
    text: string;
    icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
    return (
        <Stack
            m={'100px'}  // margin from 4 sides.. ml = 100, mr = 100, my , mb ==

        >
            <Flex
                w={16}
                h={16}
                align={'center'}
                justify={'center'}
                color={'white'}
                rounded={'full'}
                bg={'gray.100'}
                mb={1}>
                {icon}
            </Flex>
            <Text fontWeight={600}>{title}</Text>
            <Text color={'gray.600'}>{text}</Text>
        </Stack>
    );
};

export default function SimpleThreeColumns() {
    return (
        <>
            <Text fontSize='4xl' align='center' justifyContent={'center'} mt='25px' mb='-70px'>Our Features</Text>
            <Box p={4}>
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={-5} mb='-50px'>
                    <Feature
                  
                        icon={<Icon as={FcCollaboration} w={25} h={25} />}
                        title={'Single Chat'}
                        text={
                            'Make a friends by chatting with the that person...'
                        }
                    />
                    <Feature
                            align={'center'}
                            justify={'center'}
                        icon={<Icon as={FcConferenceCall} w={10} h={10} />}
                        title={'Group chat'}
                        text={
                            'If the users want to chat with each other then they can make a new group and start chatting with each other...'
                        }
                
                    />
                    <Feature
                        border={'10px solid red'}
                        icon={<Icon as={FcLink} w={10} h={10} /> }
                        title={'Make freinds'}
                        text={
                            'Make a random search of username and start chilling with each other...'
                        }
                    />
                </SimpleGrid>
            </Box>
        </>
    );
}