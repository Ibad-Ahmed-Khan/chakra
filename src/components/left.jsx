import React from "react";
import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  Input,
  Select,
  SimpleGrid,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";

export const Left = ({ textColor, bgColor, toggleColorMode }) => {
  return (
    <VStack w="full" p="10" h="full" spacing={10}>
      <VStack align="flex-start">
        <Heading>your details</Heading>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
      </VStack>
      <SimpleGrid columns={2} columnGap={3} rowGap={4}>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>first name</FormLabel>
            <Input color={textColor} bg="#F0F0F0" placeholder="ibad ahmed" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>last name</FormLabel>
            <Input color={textColor} bg="#F0F0F0" placeholder="khan" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>address</FormLabel>
            <Textarea
              color={textColor}
              bg="#F0F0F0"
              placeholder="gali #420"
            ></Textarea>
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel> city</FormLabel>
            <Input
              color={textColor}
              bg="#F0F0F0"
              placeholder="lahore"
              type="text"
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>country</FormLabel>
            <Select
              color={textColor}
              bg="#F0F0F0"
              placeholder="select your country"
            >
              <option value="pakistan">pakistan</option>
              <option value="kashmir">kashmir</option>
              <option value="saudia arabia ">saudia arabia </option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <Checkbox>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </Checkbox>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <Button size="lg" w="full">
              Place Order
            </Button>
          </FormControl>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};
