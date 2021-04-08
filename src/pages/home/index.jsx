import React from 'react';
import { Container, Grid, GridItem } from '@chakra-ui/react';

function App() {
  return (
    <Container maxW="container.xl">
      <Grid h="100px" templateRows="repeat(2, 1fr)" gap={4}>
        <GridItem bg="tomato" />
        <GridItem bg="purple" />
      </Grid>
    </Container>
  );
}

export default App;
