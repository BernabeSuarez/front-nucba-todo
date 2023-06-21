import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ChakraProvider } from "@chakra-ui/react";
import { Box, Flex, Text } from "@chakra-ui/react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
            <Todo todo={{ description: "Hola Todos" }} />
          </Flex>
        </Box>
      </ChakraProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
