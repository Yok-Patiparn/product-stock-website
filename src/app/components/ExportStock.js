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
  Badge,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const ExportStock = ({ filteredData, filterData }) => {
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
        <Flex
          align="center"
          justify={"center"}
          direction="column"
          display="flex"
        >
          <Badge
            alignSelf="start"
            variant="solid"
            colorScheme="green"
            p={2}
            ml={60}
            mb={4}
          >
            Export
          </Badge>
          <Accordion
            allowMultiple
            w="70%"
            rounded="lg"
            bgColor={colorMode === "light" ? "gray.100" : "white"}
          >
            <Flex
              p={4}
              px={10}
              bg="gray.200"
              borderTopRadius={10}
              display="flex"
              direction="row"
              justifyContent="space-between"
            >
              <Text w="10%" textAlign="center" fontWeight={900}>
                No.
              </Text>

              <Text w="60%" textAlign="center" fontWeight={900}>
                Product Name
              </Text>

              <Text w="15%" textAlign="center" fontWeight={900}>
                Amount
              </Text>

              <Text w="15%" textAlign="center" fontWeight={900}>
                Exported
              </Text>
            </Flex>

            {filteredData.map((item, index) => {
              return (
                <AccordionItem key={index}>
                  <Flex>
                    <AccordionButton
                      p={4}
                      px={10}
                      _hover={{ bg: "gray.100" }}
                      display="flex"
                      direction="row"
                      justifyContent="space-between"
                    >
                      <Text w="10%" fontSize="md">
                        {item.id}
                      </Text>

                      <Text w="60%" fontSize="md">
                        {item.product_name}
                      </Text>

                      <Text w="15%" fontSize="md">
                        {item.amount}
                      </Text>

                      <Text w="15%" fontSize="md">
                        {item.amount}
                      </Text>
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

export default ExportStock;
