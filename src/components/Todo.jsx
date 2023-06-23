import {
  Box,
  Text,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";

const Todo = ({ todo }) => {
  const queryClient = useQueryClient();
  const [update, setUpdate] = useState(false);
  const [updateItem, setUpdateItem] = useState("");

  const toast = useToast();
  const showToast = () =>
    toast({
      title: "ToDo eliminado",
      description: "Se ha eliminado el item todo a la base de datos",
      status: "success",
      duration: 5000,
      isClosable: true,
    });

  const deleteMutation = useMutation(
    (id) => {
      fetch(`http://localhost:8080/todo/${id}`, {
        method: "DELETE",
      });
    },
    {
      onSuccess: () => {
        showToast();
        queryClient.invalidateQueries({ queryKey: ["todos"] });
      },
    }
  );
  const updateToast = () =>
    toast({
      title: "ToDo actualizado",
      description: "Se ha actualizado el item todo en la base de datos",
      status: "success",
      duration: 5000,
      isClosable: true,
    });

  const updateMutation = useMutation(
    (updateTodo) => {
      fetch(`http://localhost:8080/todo/${todo._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateTodo),
      });
    },
    {
      onSuccess: () => {
        updateToast();
        queryClient.invalidateQueries({ queryKey: ["todos"] });
        setUpdateItem("");
      },
    }
  );

  return (
    <motion.div whileHover={{ scale: 1.02 }} transition="0.5s linear">
      {update ? (
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
            <FormLabel>Actualizar Items</FormLabel>
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
                placeholder="Escriba aqui el nuevo item"
                value={updateItem}
                onChange={(e) => setUpdateItem(e.target.value)}
              />
              <Button
                onClick={() => {
                  updateMutation.mutate({ description: updateItem });
                  setUpdate(!update);
                }}
              >
                Enviar
              </Button>
            </Flex>
          </FormControl>
        </Box>
      ) : (
        <Box
          bg="gray.300"
          border="1px"
          minWidth="450px"
          p={2}
          borderRadius={12}
          marginBottom={3}
          key={todo.id}
        >
          <Flex
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text fontSize="2xl">{todo.description}</Text>
            <Flex
              flexDirection="row"
              alignItems="center"
              justifyContent="space-evenly"
              width="40%"
            >
              <Button
                colorScheme="teal"
                variant="outline"
                onClick={() => setUpdate(!update)}
              >
                Edit
              </Button>
              <Button
                colorScheme="red"
                variant="solid"
                _hover={{ bg: "red.900" }}
                onClick={() => deleteMutation.mutate(todo._id)}
              >
                Delete
              </Button>
            </Flex>
          </Flex>
        </Box>
      )}
    </motion.div>
  );
};

export default Todo;
