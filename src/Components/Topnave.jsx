import { Container, Flex, Heading,Menu,MenuItem,MenuButton,MenuList,Button,Box, HStack,Icon} from "@chakra-ui/react";
import { FaUser} from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
const Topnave = ({title,onOpen}) => {


  return (
   <Box boxShadow="xl">
     <HStack h={16} maxW='70rem' justify="space-between" mx="auto" >
     <Icon as={IoMdMenu} onClick={onOpen}  display={{
        base: "block",
        lg: "none"
     }}
        />
     <Heading>{title}</Heading>
     <Menu>
       <MenuButton maxW= '32rem' maxH='32rem'>
        <Icon fontSize='24px' ><FaUser /></Icon>
       </MenuButton>
         <MenuList>
         <MenuItem>Logout</MenuItem>
         <MenuItem>Help</MenuItem>
        
       </MenuList>
     </Menu>
   
 </HStack>
   </Box>
  );
};
export default Topnave;
