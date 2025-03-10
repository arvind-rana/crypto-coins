import { Box, HStack, Icon, Stack, Text, Heading } from "@chakra-ui/react";
//import Dashboard from "../Pages/Dashboard/Dashboard";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import {Link} from "react-router-dom";
import TransactionPage from "../Pages/Transaction/TransactionPage";
const Sidenave = () => {
  const navLinks = [
    {
      icon: RiDashboardHorizontalFill,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: FaArrowRightArrowLeft,
      text: "Transaction",
      link: "/transaction",
    },
  ];

  return (
    <Stack justify="space-between" boxShadow="lg" w="200px" h="100vh">
      <Box>
        <Heading fontSize="20px" textAlign="center" mt="36px" as="h1">
          Menu
        </Heading>

        <Box mt="20px" mx="12px">
          {navLinks.map((nav) => (
            <Link to={nav.link} key={nav.text}>
            <HStack /* .clas{    display: flex;   align-item: center}*/
              py="12px"
              borderRadius="10px"
              
              _hover={{
                bg: "#f3f3f7",
                color: "#171717",
              }}
              color="797E82"
            >
              <Icon as={nav.icon} />
              <Text fontSize="14px" fontWeight="medium">
                {nav.text}
              </Text>
            </HStack>
            </Link>
          ))}
        </Box>
      </Box>

      <Box mt="20px" mx="12px">
        <Link to="/support">
        <HStack
          py="12px"
          px="4"
          borderRadius="10px"
          _hover={{
            bg: "#f3f3f7",
            color: "#171717",
          }}
          color="797E82"
        >
          <Icon as={BiSupport} />
          <Text fontSize="14px" fontWeight="medium">
            Support
          </Text>
        </HStack>
        </Link>
      </Box>
    </Stack>
  );
};
export default Sidenave;
