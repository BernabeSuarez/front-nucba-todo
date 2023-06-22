import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Button,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useToast } from "@chakra-ui/react";

const TodoForm = () => {
  const queryClient = useQueryClient();

  const [todo, setTodo] = useState("");

  const toast = useToast();
  const showToast = () =>
    toast({
      title: "ToDo creado OK",
      description: "Se ha agregado el todo a la base de datos",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  const mutation = useMutation(
    (newTodo) => {
      fetch("http://localhost:8080/todo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      });
    },
    {
      onSuccess: () => {
        setTodo("");
        showToast();
        queryClient.invalidateQueries({ queryKey: ["todos"] });
      },
    }
  );

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
          <Input
            type="text"
            w="80%"
            placeholder="Escriba aqui"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <Button
            type="submit"
            onClick={() => {
              mutation.mutate({ description: todo });
            }}
          >
            Enviar
          </Button>
        </Flex>
      </FormControl>
    </Box>
  );
};

export default TodoForm;
