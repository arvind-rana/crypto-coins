import {
  HStack,
  Stack,
  Icon,
  Text,
  Button,
  Flex,
  Image,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,

} from "@chakra-ui/react";
import { CustomCart } from "../../../Chakra/CustomCard";
import { MdOutlineArrowOutward } from "react-icons/md";

import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
const PriceSection = () => {
  const timeStamps = ["6:45pm", "7:35pm", "8:40pm", , "9:40pm", , "10:40pm"];

  return (
    <>
      <customCard w="50%">
        <Flex justify="space-between" align="start" >
          <HStack gap="18">
            <HStack>
              <Stack>
                <HStack color="black.80" spacing={6}>
                  <Text fontSize="16px" color="gray" fontWeight="bold">
                    Wallet Balence
                  </Text>
                </HStack>
                <HStack>
                  <HStack spacing={6}>
                    <Text color="blue">22.3456 </Text>
                  </HStack>
                  6
                  <HStack>
                    <Icon as={MdOutlineArrowOutward} />
                    <Text color="blue"> 22,343 INR</Text>
                  </HStack>
                </HStack>
              </Stack>
            </HStack>
            <HStack>
              <Button
                leftIcon={<Icon as={CiCirclePlus} />}
                bg="blue"
                color="white"
              >
                Buy
              </Button>
              <Button
                leftIcon={<Icon as={CiCircleMinus} />}
                bg="blue"
                color="white"
              >
                Sell
              </Button>
            </HStack>
          </HStack>
        </Flex>
        <Tabs variant="soft-rounded" >
          <Flex justify="md">
          <TabList bg="white" p="3px">
            {
                ["1H", "1D", "1W", "1M"].map((tab) => (
                    <Tab
                        _selected = {{ bg: "white" }}
                       key = {tab}
                       fonstSize = "sm"   
                       p = "6px"
                       borderRadius= "4"
                       >
                       {tab}
                    </Tab>
                ))
            }
          </TabList>
          </Flex>
          <TabPanels>
            <TabPanel>
            <Image
          w="80%"
          mt="30px"
          src="https://png.pngtree.com/background/20230617/original/pngtree-upward-trending-stock-market-graph-in-3d-rendering-picture-image_3701625.jpg"
        />
            </TabPanel>
            
          </TabPanels>
        </Tabs>
       
        <HStack gap="30px">
          {timeStamps.map((timestamp) => (
            <Text key={timestamp} fontSize="sm" color="black" ml="10px">
              {timestamp}
            </Text>
          ))}
        </HStack>
      </customCard>
    </>
  );
};
export default PriceSection;
