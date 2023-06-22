import { Box, Text, Flex } from "@chakra-ui/react";

const Empty = () => {
  return (
    <Box bg="gray.300" border="1px" minWidth="450px" p={2} borderRadius={12}>
      <Flex justifyContent="center" alignItems="center">
        <Text fontSize="2xl">Aun no hay nada...</Text>
      </Flex>
    </Box>
  );
};

export default Empty;
