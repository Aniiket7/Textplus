import { Box, Heading, Text, Button } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from "react-router-dom";

export default function NotFound() {
    let history = useHistory();
    const redirect = () => {
        history.push("/")
    }
    return (
        <Box textAlign="center" py={10} px={6}>
            <Heading
                display="inline-block"
                as="h2"
                size="2xl"
                bgGradient="linear(to-r, teal.400, teal.600)"
                backgroundClip="text">
                404
            </Heading>
            <Text fontSize="18px" mt={3} mb={2}>
                Page Not Found
            </Text>
            <Text color={'gray.500'} mb={6}>
                The page you're looking for does not seem to exist
            </Text>

            <Button
                colorScheme="teal"
                bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
                color="white"
                // onClick={history.push("/")}
                onClick={redirect}
                variant="solid">
                Go to Home
            </Button>
        </Box>
    );
}