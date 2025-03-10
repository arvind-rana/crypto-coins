import { Flex, Stack, Icon, Text, Card, HStack, FormControl,Input, FormLabel, FormHelperText,Box,Checkbox, Button } from "@chakra-ui/react";
import DashboardLayout from "../../Components/DashboardLayout";
import { MdEmail } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa6";

const SupportCard = () => {
  return (
    <>
      <Flex gap={6} flexDir={{
        base: "column",
        xl: "row",
      }}>
        <Stack maxW="380px">
          <Icon as={MdEmail} boxSize="34px" color="purple" />
          <Text fontWeight="bold" as="h1" textStyle="h1">
            Contact Us
          </Text>
          <Text fontSize="sm" color="black">
            Have a question or just want to know more? feel free to reach out to
            us
          </Text>
        </Stack>
        <Card p="6px" borderRadius="1rem" flexGrow="1">
          <Stack spacing={6}>
          <Text>You will response within 24 hour of time of submit</Text>
          <HStack>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input placeholder="enter your name" />
             </FormControl>
             <FormControl>
              <FormLabel>Surname</FormLabel>
              <Input placeholder="enter your Surname" />
             </FormControl>
          </HStack>
          <HStack>
          <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="enter your email" />
             </FormControl>
          </HStack>
          <HStack>
          <FormControl >
              <FormLabel>Message</FormLabel>
              <Input h="90px" placeholder="enter your message" justifyContent="start" />
             </FormControl>
          </HStack>
          <Checkbox defaultChecked>
             <Text fontSize="xs">
             I agree with
             <Box as="span" color="purple">
                {" "}
                Terms and Conditions.
             </Box>
             </Text>
          </Checkbox>
          <Stack>
            <Button colorScheme="blue" fontSize="sm">Send me message</Button>
            <Button fontSize="sm">Book a meeting</Button>
          </Stack>
       
          </Stack>
          </Card>
      </Flex>
      <Flex mt="20px">
      <Card h="80px" w="370px" ml="30px" mt="12px" >
        <Icon  mt="10px" as={FaFacebookMessenger} />
        <Text mt="10px">Don't have a time to wait for the answer? chat with us now...</Text>
    </Card>
      <Card w="400px" ml="70px" bg="purple" h="100px">
        <Button w="80px" ml="20px" mt="10px" h="30px" borderRadius="full" >Chatbot</Button>
        <Text ml="20px" color="white" fontSize="sm" mt="10px">Chat with us now</Text>
      </Card>
       
      </Flex>
      
    </>
  );
};
export default SupportCard;
