import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  useColorModeValue,
  Text,
  Container,
  useColorMode,
  Spacer,
  Box,
  HStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import jsonData from "../stock/MOCK_DATA.json";
import NavigationSearch from "@/components/NavigateSearch";
import Footer from "@/components/Footer";
import Sidebar from "@/components/SideBar";
import MainStock from "@/components/MainStock.js";

export default function Stock() {
  const [input, setInput] = useState("");
  const [filteredData, setFilteredData] = useState(jsonData);
  const data = jsonData;
  const { colorMode, toggleColorMode } = useColorMode();
  const filterData = (search, jsonData) => {
    const lowercaseSearch = search.toLowerCase();
    const filteredSearch = jsonData.filter((data) => {
      const lowerProductName = data.product_name.toLowerCase();

      const matchSearch =
        !lowercaseSearch || lowerProductName.includes(lowercaseSearch);

      if (lowercaseSearch !== "") {
        return matchSearch;
      }
    });
    setFilteredData(filteredSearch);
  };
  return (
    <>
      <NavigationSearch filteredData={filteredData} filterData={filterData} />
      <Flex justifyContent="space-between" w="100%">
        <Sidebar flex={1} />
        <Box
          mb="300px"
          h="auto"
          flex={2}
          bg={useColorModeValue("gray.50", "gray.800")}
        >
          {/* need render logic */}
          <MainStock />
        </Box>
      </Flex>
      <Footer />
    </>
  );
}
