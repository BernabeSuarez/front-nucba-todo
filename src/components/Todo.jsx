import { Box, Text, Button, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Todo = ({ todo }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} transition="0.5s linear">
      <Box bg="gray.300" border="1px" minWidth="450px" p={2} borderRadius={12}>
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
            <Button colorScheme="teal" variant="outline">
              Edit
            </Button>
            <Button colorScheme="red" variant="solid">
              Delete
            </Button>
          </Flex>
        </Flex>
      </Box>
    </motion.div>
  );
};

export default Todo;
