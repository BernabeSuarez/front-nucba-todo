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
      minWidth="600px"
      boxShadow="xl"
      rounded="md"
      p={2}
      borderRadius={12}
      marginBottom={3}
    >
      <FormControl>
        <FormLabel>Notas</FormLabel>
        <Flex
          as="main"
          alignItems="center"
          justifyContent="space-between"
          margin="10 auto"
          flexDirection="row"
        >
          <Input type="text" w="80%" placeholder="Escriba aqui" />
          <Button>Enviar</Button>
        </Flex>
      </FormControl>
    </Box>
  );
};

export default TodoForm;
