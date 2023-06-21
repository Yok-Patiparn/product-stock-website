import React from "react";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import "../app/globals.css";

const contact = () => {
  return (
    <>
      <main className="text-xl text-blue-600 md:text-green-600">
        Hello World
      </main>
      <Box as="button" borderRadius="md" bg="tomato" color="white" px={4} h={8}>
        Button
      </Box>
    </>
  );
};

export default contact;
