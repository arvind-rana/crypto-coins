import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button
} from "@chakra-ui/react";
import Sidenave from './Sidenave';
const SideDrawer = ({isOpen,onClose}) => {
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
         

          <DrawerBody>
            <Sidenave/>
          </DrawerBody>

          
        </DrawerContent>
      </Drawer>
    </>
  );
};
export  default SideDrawer;
