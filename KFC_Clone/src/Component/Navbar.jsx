"use client";

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Divider,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as RouteLink } from "react-router-dom";

// interface Props {
//   children: React.ReactNode
// }

const Links = ["Menu", "Deals"];

const NavLink = (props) => {
  const { children } = props;

  return (
    <Box
      as="a"
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
    </Box>
  );
};

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
      <>
        <Box
          bg={useColorModeValue("white.100", "white.900")}
          px={4}
          style={{ paddingLeft: "15%" }}
        >
          <Flex
            h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
            style={{ height: "20vh" }}
          >
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={"center"}>
              <Box>
                <img
                  src="https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg"
                  alt=""
                />
              </Box>
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
                style={{ fontFamily: "Arial", fontWeight: "700" }}
              >
                {/* {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))} */}
                <RouteLink to={'/menu'}><Text>Menu</Text></RouteLink>
                <RouteLink to={'/deals'}><Text>Deals</Text></RouteLink>
                
              </HStack>
            </HStack>
            <Flex alignItems={"center"} style={{ width: "28%" }}>
              <Menu>
                <img
                  src="https://images.ctfassets.net/wtodlh47qxpt/6bJdGLRkksNvWP4LI9ZiFF/cb89d6393492fd093e0f99980abfa39e/Account_Icon.svg"
                  alt=""
                  style={{ marginRight: "5%" }}
                />
                <Text
                  style={{
                    fontFamily: "Arial",
                    fontWeight: "700",
                    marginRight: "5%",
                  }}
                >
                  Sign in
                </Text>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={
                      "https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg"
                    }
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem>Link 1</MenuItem>
                  <MenuItem>Link 2</MenuItem>
                  <MenuDivider />
                  <MenuItem>Link 3</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Flex>

          {isOpen ? (
            <Box pb={4} display={{ md: "none" }}>
              <Stack as={"nav"} spacing={4}>
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </Stack>
            </Box>
          ) : null}
        </Box>
      </>
  );
}
