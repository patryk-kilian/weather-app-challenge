import { Container, Box } from '@chakra-ui/react';

import Search from './Search';
import DaysList from './DaysList';

function AppContainer() {
  return (
    <Container maxW='container.xl' pt='50px'>
      <Box maxW='600px' margin='auto'>
        <Search />
      </Box>
      <DaysList />
    </Container>
  );
}

export default AppContainer;
