"use client";

import React from "react";

import {
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

import LinkItem from "../ui/link-item";
import ThemeToggleButton from "../ui/theme-toggle";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const path = usePathname();

  return (
    <Box
      as="nav"
      position="fixed"
      w="100%"
      bg={useColorModeValue("#FCFCFC40", "#0D1017A2")}
      css={{
        backdropFilter: "blur(10px)",
      }}
      zIndex={2}
    >
      <Container
        p={2}
        display="flex"
        maxW="container.lg"
        flexWrap="wrap"
        textAlign="center"
        justifyContent="space-between"
      >
        <Flex align={"center"} mr={5}>
          <Heading as="h3" size="lg" letterSpacing={"tighter"}>
            BrandName
          </Heading>
        </Flex>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          mt={{ base: 4, md: 0 }}
          alignItems="center"
          flexGrow={1}
        >
          <LinkItem path={path} href="/">
            Home
          </LinkItem>
          <LinkItem path={path} href="/works">
            Works
          </LinkItem>
          <LinkItem path={path} href="/explore">
            Explore
          </LinkItem>
          <LinkItem path={path} href="https://github.com/IuraCPersonal">
            Github
          </LinkItem>
        </Stack>
        <Box flex={1} textAlign="right">
          <ThemeToggleButton />
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
