import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  useColorModeValue,
  Text,
  Spacer,
  Box,
  useColorMode,
  Container,
  Center,
  Input,
  Image,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import jsonData from "../pages/stock/MOCK_DATA.json";

const MainStock = () => {
  const [searchMessage, setSearchMessage] = useState("");
  const [filteredData, setFilteredData] = useState(jsonData);
  console.log(filteredData);
  const data = jsonData;
  const { colorMode, toggleColorMode } = useColorMode();

  const handlerSearchMessage = (event) => {
    setSearchMessage(event.target.value);
  };
  const filterData = (search) => {
    const lowercaseSearch = search.toLowerCase();
    if (search === "") {
      setFilteredData(data);
    } else {
      const filteredContent = data.filter((item) => {
        const lowerProductName = item.product_name.toLowerCase();
        const matchSearch = lowerProductName.includes(lowercaseSearch);
        if (lowercaseSearch !== "") {
          return matchSearch;
        }
      });
      setFilteredData(filteredContent);
    }
  };

  useEffect(() => {
    filterData(searchMessage);
  }, [searchMessage]);

  return (
    <Center h="100%">
      <Box
        bg={useColorModeValue("gray.50", "gray.800")}
        color="blue"
        w="100%"
        h="90%"
        align="start"
      >
        <Input
          type="search"
          placeholder="Search"
          color="red"
          mb={5}
          ml={20}
          w="30%"
          value={searchMessage}
          onChange={handlerSearchMessage}
        />
        <Flex align={"end"} justify={"center"}>
          <Accordion
            allowMultiple
            w="90%"
            rounded="lg"
            bgColor={colorMode === "light" ? "gray.100" : "white"}
          >
            <Flex p={4} px={10} bg="gray.200" borderTopRadius={10}>
              <Text fontWeight={900}>No.</Text>
              <Spacer />
              <Text fontWeight={900}>Product Name</Text>
              <Spacer />
              <Text fontWeight={900}>Amount</Text>
            </Flex>

            {filteredData.map((item, index) => {
              return (
                <AccordionItem key={index}>
                  <Flex>
                    <AccordionButton
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      p={4}
                      px={10}
                      _hover={{ bg: "gray.100" }}
                    >
                      <Text fontSize="md">{item.id}</Text>
                      <Spacer />
                      <Text fontSize="md">{item.product_name}</Text>
                      <Spacer />
                      <Text fontSize="md">{item.amount}</Text>

                      <ChevronDownIcon fontSize="24px" />
                    </AccordionButton>
                  </Flex>
                  <AccordionPanel p={4} gap={4} display="flex" direction="row">
                    <Image
                      src={item.image}
                      alt={item.product_name}
                      w="200px"
                      h="100px"
                      objectFit="contain"
                    />
                    <Box>
                      <Text fontWeight={700}>Description :</Text>
                      <Text>{item.description}</Text>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </Flex>
      </Box>
    </Center>
  );
};

export default MainStock;
