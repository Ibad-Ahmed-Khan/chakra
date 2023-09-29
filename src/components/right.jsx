import React from "react";
import { Button, Text, Heading, VStack, Flex, Box } from "@chakra-ui/react";

export const Right = ({ bgColor, textColor, toggleColorMode }) => {
  return (
    <VStack
      w="full"
      h="full"
      p="10"
      spacing="10"
      align="flex-start"
      bg={bgColor}
    >
      <Heading>your cart</Heading>
      <Text>Lorem ipsum dolor sit amet.</Text>
      <Button onClick={toggleColorMode}>Try changing the theme</Button>
      <VStack w="full" spacing={4}>
        <Flex w="full" align="center" justifyContent="space-between">
          <Box width="5rem">
            <img
              src="https://images.unsplash.com/photo-1504600770771-fb03a6961d33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1782&q=80"
              alt=""
            />
          </Box>

          <VStack align="flex-start" spacing={0}>
            <Text fontWeight="bold">penny board</Text>
            <Text>PNYCOMPANY837627 </Text>
          </VStack>
          <Text fontWeight="bold">$1630.0</Text>
        </Flex>
        <Flex w="full" align="center" justifyContent="space-between">
          <Text>subtotal </Text>
          <Text fontWeight="bold">$152.00</Text>
        </Flex>
        <Flex w="full" align="center" justifyContent="space-between">
          <Text>shipping </Text>
          <Text fontWeight="bold">$32.00</Text>
        </Flex>
        <Flex w="full" align="center" justifyContent="space-between">
          <Text>taxes(estimated) </Text>
          <Text fontWeight="bold">$122.00</Text>
        </Flex>
      </VStack>
      <Flex mt="16" w="full" align="center" justifyContent="space-between">
        <Text>total </Text>
        <Text fontWeight="bold" fontSize="3xl">
          $122.00
        </Text>
      </Flex>
    </VStack>
  );
};
