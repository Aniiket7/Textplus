import {useColorMode, Button} from '@chakra-ui/react';
import React from 'react'

const Theme = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <div>
                <Button onClick={toggleColorMode}>
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
        </div>
    )
}
export default Theme
