import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Button,
  Flex,
} from "@chakra-ui/react";

const TodoForm = () => {
  return (
    <Box
      bg="gray.300"
      border="1px"
      minWidth="450px"
      p={2}
      borderRadius={12}
      marginBottom={3}
    >
      <FormControl>
        <FormLabel>Notas</FormLabel>
        <Flex
          as="main"
          alignItems="center"
          justifyContent="center"
          margin="10 auto"
          flexDirection="row"
        >
          <Input type="text" />
          <Button>Enviar</Button>
        </Flex>
      </FormControl>
    </Box>
  );
};

export default TodoForm;
