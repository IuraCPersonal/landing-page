import React from "react";
import {
  Flex,
  useColorModeValue,
  Container,
  Heading,
  Text,
} from "@chakra-ui/react";

const AboutUs: React.FC = () => {
  return (
    <Flex
      bg={useColorModeValue("#FCFCFC", "#242936")}
      minHeight="100vh"
      flexDir="column"
      alignItems="center"
      gap={20}
    >
      <Container maxW="container.sm" mt={20}>
        <Text fontSize="4xl">
          <Text as="b">We will help you ship better apps faster.</Text>
          Our team of expert engineers has created the best user experiences in
          some of the most popular apps worldwide.
        </Text>
      </Container>
    </Flex>
  );
};

export default AboutUs;
