import React from "react";

import { Grid, useColorModeValue, GridItem } from "@chakra-ui/react";

const TeamMembers: React.FC = () => {
  return (
    <Grid
      h="200px"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
      bg={useColorModeValue("#FCFCFC", "#242936")}
      px={350}
      pt={20}
    >
      <GridItem rowSpan={2} colSpan={1} bg="tomato" />
      <GridItem colSpan={2} bg="papayawhip" />
      <GridItem colSpan={2} bg="papayawhip" />
      <GridItem colSpan={4} bg="tomato" />
    </Grid>
  );
};

export default TeamMembers;
