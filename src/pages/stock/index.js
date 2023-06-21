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
import { ChevronDownIcon } from "@chakra-ui/icons";
import jsonData from "../stock/MOCK_DATA.json";
import NavigationSearch from "@/components/NavigateSearch";
import Footer from "@/components/Footer";
import Sidebar from "@/components/SideBar";

export default function Stock() {
  const data = jsonData;
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Flex direction="column" width="100%">
        <NavigationSearch />
        <Sidebar />
        <Flex
          align={"center"}
          justify={"center"}
          bg={useColorModeValue("gray.50", "gray.800")}
          color="blue"
        >
          <Container width="100%">
            <Accordion
              allowMultiple
              h="auto"
              maxW="lg"
              rounded="lg"
              bgColor={colorMode === "light" ? "gray.100" : "white"}
            >
              <Flex p={4}>
                <Text>No.</Text>
                <Spacer />
                <Text>Product Name</Text>
                <Spacer />
                <Text>Amount</Text>
              </Flex>

              {data.map((item, index) => {
                return (
                  <AccordionItem key={index}>
                    <Flex>
                      <AccordionButton
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        p={4}
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
                    <AccordionPanel pb={4}>
                      <Text>{`Description : ${item.description}`}</Text>
                    </AccordionPanel>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </Container>
        </Flex>
      </Flex>
      <Footer />
    </>
  );
}
