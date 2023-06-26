"use client";
import {
  Flex,
  Box,
  SimpleGrid,
  useColorMode,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import NavigationImport from "../components/NavigateImport";
import Footer from "../components/Footer";
import Sidebar from "../components/SideBar";
import MainStock from "../components/MainStock";
import ExportStock from "../components/ExportStock";
import jsonData from "./jsonData";

export default function Stock() {
  const [searchMessage, setSearchMessage] = useState("");
  const [filteredData, setFilteredData] = useState(jsonData);
  const [data, setData] = useState(jsonData);

  const { colorMode, toggleColorMode } = useColorMode();

  const handlerUpdatedData = (data) => {
    setData(data);
    setFilteredData(data);
  };

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

  const handleHomeClick = () => {
    router.push("/");
  };

  return (
    <Box w="100%" height="90vh" overflowY="hidden">
      <NavigationImport
        filteredData={filteredData}
        filterData={filterData}
        seachMessage={searchMessage}
        handlerSearchMessage={handlerSearchMessage}
        data={data}
        handlerUpdatedData={handlerUpdatedData}
      />
      <SimpleGrid
        display="grid"
        columns="2"
        gridTemplateColumns="0.7fr 4.1fr"
        bg={useColorModeValue("gray.50", "gray.800")}
        w="100%"
        h="max-content"
      >
        <Sidebar handleHomeClick={handleHomeClick} />
        <Box
          h="80vh"
          w="100%"
          flex={1}
          bg={useColorModeValue("gray.50", "gray.800")}
          borderLeft="solid 1px"
          borderLeftColor={useColorModeValue("gray.200", "gray.700")}
          overflowY="scroll"
        >
          <MainStock filteredData={filteredData} filterData={filterData} />
          {/* <ExportStock filteredData={filteredData} filterData={filterData} /> */}
        </Box>
      </SimpleGrid>

      <Footer />
    </Box>
  );
}
