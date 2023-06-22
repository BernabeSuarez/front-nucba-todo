import { useQuery } from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";
import { Box, Flex, Text, Center } from "@chakra-ui/react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import Empty from "./components/Empty";

function App() {
  const fetchTodolist = () =>
    fetch("http://localhost:8080/todos").then((data) => data.json());

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodolist,
  });

  if (isLoading) {
    return (
      <ChakraProvider>
        <Box bg="blackAlpha.400" minWidth="100vw" minH="100vh" py={16}>
          <Flex
            as="main"
            alignItems="center"
            justifyContent="center"
            margin="10 auto"
            flexDirection="column"
          >
            <Center>Loading</Center>
          </Flex>
        </Box>
      </ChakraProvider>
    );
  }
  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <ChakraProvider>
      <Box bg="blackAlpha.400" minWidth="100vw" minH="100vh" py={16}>
        <Flex
          as="main"
          alignItems="center"
          justifyContent="center"
          margin="10 auto"
          flexDirection="column"
        >
          <Text fontSize="3xl">Nucba ToDo</Text>
          <TodoForm />
          {data.length > 0 ? (
            data.map((todo) => <Todo key={todo.id} todo={todo} />)
          ) : (
            <Empty />
          )}
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
