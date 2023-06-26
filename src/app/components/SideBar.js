"use client";
import React, { ReactNode } from "react";
import { useRouter } from "next/navigation";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
} from "@chakra-ui/react";
import { FiHome, FiTruck, FiMenu } from "react-icons/fi";
import { FaPlus } from "react-icons/fa";

const LinkItems = [
  { name: "Home", icon: FiHome, path: "/" },
  { name: "Import", icon: FaPlus, path: "/import" },
  { name: "Export", icon: FiTruck, path: "/export" },
];

export default function Sidebar({ children, handleHomeClick }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  const handleNavLinkClick = (path) => {
    router.push(path);
  };

  return (
    <Box
      left={0}
      h="100vh"
      bg={useColorModeValue("white", "gray.900")}
      w="min-content"
    >
      <SidebarContent
        onClose={() => onClose}
        onNavLinkClick={handleNavLinkClick}
        display={{ base: "none", sm: "block" }}
      />
    </Box>
  );
}

const SidebarContent = ({ onClose, onNavLinkClick, ...rest }) => {
  return (
    <Box
      w={{ base: "full", md: 60 }}
      h="fit-content"
      {...rest}
      top="50px"
      pos="fixed"
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem
          key={link.name}
          icon={link.icon}
          onClick={() => onNavLinkClick(link.path)}
        >
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        w="100%"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />
    </Flex>
  );
};
