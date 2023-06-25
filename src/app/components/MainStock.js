"use client";

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

const MainStock = ({ filteredData, filterData }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Center h="max-content">
      <Box
        bg={useColorModeValue("gray.50", "gray.800")}
        color="blue"
        overflowX="hidden"
        w="100%"
        align="start"
        my="10"
        mb={100}
      >
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
                      w="100px"
                      h="100px"
                      objectFit="contain"
                    />
                    <Box display="flex" gap={2}>
                      <Text fontWeight={700}>Description:</Text>
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
