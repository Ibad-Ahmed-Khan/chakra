import React, { useState } from "react";
import "./App.css";
import {
  Container,
  Flex,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Left } from "./components/left";
import { Right } from "./components/right";

function App() {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("#E8E8E8", "#0f01");
  const textColor = useColorModeValue("gray", "gray");

  return (
    <Container maxW="100%">
      <Flex
        w="full"
        h="full"
        flexDirection={{ base: "column", md: "column", lg: "row" }}
        padding={{ base: "0", md: "0", lg: "10" }}
        gap="2rem"
      >
        <Left
          textColor={textColor}
          bgColor={bgColor}
          toggleColorMode={toggleColorMode}
        />
        <Right
          textColor={textColor}
          bgColor={bgColor}
          toggleColorMode={toggleColorMode}
        />
      </Flex>
    </Container>
  );
}

export default App;
