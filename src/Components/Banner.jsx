import { Box, Text,} from '@chakra-ui/react'
import React from 'react'
import banner from '../asset/Mask.png'

export const Banner = () => {
  return (
   <Box h="480px" bgImage={banner} >
    <Text fontSize="4rem" ml="70%" pt="24%" fontFamily="Rubik" lineHeight="58px">Corporate <br/>Photographer</Text>
   </Box>
  )
}
