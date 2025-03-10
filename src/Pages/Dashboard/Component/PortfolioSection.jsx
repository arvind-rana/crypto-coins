import { HStack, Stack, Icon, Text, Button } from "@chakra-ui/react";
import { FaInfoCircle } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

const PortfolioSection = () => (
    <HStack bg='white' borderRadius='xl' p='8' spacing={{
        base: 4,
        xl: 0,
    }} justify="space-between" 
    align={{
        base:"flex-start",
        xl: "center",
    }}
    
    flexDir={
        {
            base: "column",
            xl: "row",
           
        }
    }>
       <HStack spacing={{
        base: '0',
        xl:  16

       }} 
       align={{
        base:"flex-start",
        xl: "center",
    }}
    flexDir={
        {
            base: "column",
            xl: "row"
        }
    }
       >
       <Stack>
            <HStack color='black.80'>
                <Text fontSize='16px' color='gray' fontWeight='bold'>Total Porfolio Value</Text>
                <Icon as={FaInfoCircle} />
            </HStack>
            <Text color='blue'>$ 12,343</Text>
        </Stack>
        <Stack>
            <HStack color='black.80' spacing={6}>
                <Text fontSize='16px' color='gray' fontWeight='bold'>Wallet Balence</Text>
                 
            </HStack>
            <HStack>
            <HStack spacing={6}>
            <Text color='blue'>$ 343  BTC/</Text>
            </HStack>6
            <HStack>
            <Text color='blue'> 22,343  INR</Text>
            </HStack>
            </HStack>
        </Stack>
       </HStack>

        <HStack >
            <Button leftIcon = {<Icon as={FaArrowDown}/>} bg="blue" color="white">Deposite</Button>
            <Button leftIcon = {<Icon as = {FaArrowUp}/>} bg="blue" color="white">Widthdraw</Button>
        </HStack>
        
       
       
       
    </HStack>
)

export default PortfolioSection;