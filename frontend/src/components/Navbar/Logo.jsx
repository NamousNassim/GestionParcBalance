import React from "react";
import { Box, Text } from "@chakra-ui/react";
import MarjanLogo from  '../../assets/Marjane.png'
export default function Logo(props) {
  return (
    <Box {...props}>
      <Text fontSize="lg" fontWeight="bold">
        <img  src={MarjanLogo} alt="Marjan Logo"/>
      </Text>
    </Box>
  );
}