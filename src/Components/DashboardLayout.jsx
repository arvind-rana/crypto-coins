import { Box, Flex,Container,useDisclosure, calc } from "@chakra-ui/react";
import Sidenave from "./Sidenave";
import Topnave from './Topnave';
import SideDrawer from './SideDrawer';
const DashboardLayout = ({title, children}) => {

  const {isOpen, onOpen, onClose} = useDisclosure();
  return (
    <>
      <Box>
        <Flex>
         <Box
         display={{
      base: "none",
      lg: "flex"
     }}>
     <Sidenave/>
          </Box>
          <SideDrawer isOpen={isOpen} onClose ={onClose} />
          <Box flexGrow={1} alignItems='flex-start'>
            <Topnave title={title} onOpen={onOpen} />
            <Container  mt="10px" maxW='70rem'>{children}</Container>
          </Box>
        </Flex>
      </Box>
    </>
  );
};
export default DashboardLayout;

