"use client";
import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Input,
} from "@chakra-ui/react";
import { HiUser } from "react-icons/hi";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import CreateNewProduct from "./CreateNewProduct";
import ExportedProduct from "./ExportedProduct";

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function NavigationExport({
  searchMessage,
  handlerSearchMessage,
  data,
  handlerUpdatedData,
}) {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        position="sticky"
        top={0}
        right={0}
        display="block"
        w="100%"
        zIndex={10}
      >
        <Flex
          w="100%"
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          px={5}
        >
          <Box>Symphony Stock Logo</Box>

          <Flex alignItems={"center"}>
            <Flex
              direction={"row"}
              spacing="30px"
              alignItems="space-evenly"
              justifyContent="center"
              gap={4}
            >
              <Input
                type="search"
                placeholder="Search"
                color="red"
                w="100%"
                value={searchMessage}
                onChange={handlerSearchMessage}
              />

              <ExportedProduct
                data={data}
                handlerUpdatedData={handlerUpdatedData}
              />

              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar size={"sm"} src={HiUser} />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar src={HiUser} />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <Link href="/import">
                    <MenuItem>Your Stock</MenuItem>
                  </Link>
                  <Link href="/">
                    <MenuItem>Logout</MenuItem>
                  </Link>
                </MenuList>
              </Menu>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
