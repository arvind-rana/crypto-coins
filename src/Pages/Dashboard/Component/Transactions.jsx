import { CustomCart } from "../../../Chakra/CustomCard";
import {Grid, Text,Stack,Flex,Icon, Divider, Button} from "@chakra-ui/react";
import { FaRupeeSign } from "react-icons/fa";
import { FaBtc } from "react-icons/fa";
import { Fragment } from "react";


const Transactions = () => {

    const transactions = [
        {
            id: "1",
            icon: FaRupeeSign,
            Text: "INR Deposite",
            Amount: "+ R 81,323.45",
            Timestamp: "2022=06-09 6:38pm"
        },
        {
            id: "2",
            icon: FaBtc,
            Text: "BTC Sell",
            Amount: "-12.45434 BTC",
            Timestamp: "2022=06-09 6:38pm"
        },
        {
            id: "3",
            icon: FaRupeeSign,
            Text: "INR Deposite",
            Amount: "+ R 81,323.45",
            Timestamp: "2022=06-09 6:38pm"
        }
    ];
     return (
        <>
          <CustomCart fontSize="sm" color="black" mt="52px" >
            <Text fontSize="lg">Recent Transactions</Text>
            <Stack mt="6">
                {
                    transactions.map((transaction,i) => (
                      <Fragment key = {transaction.id}>
                      {i !== 0 && <Divider/>}
                      <Flex  gap="4">
                          <Grid placeItems="center" bg="black.5" boxSize={5} borderRadius="full">
                            <Icon as={transaction.icon} />
                          </Grid>
                          <Flex justify="space-between"  w="full">
                          <Stack spacing="1">
                               <Text fontSize="md" color="black">{transaction.Text}</Text>
                               <Text fontSize="sm" color="black">{transaction.Timestamp}</Text>
                               </Stack>
                               <Text fontSize="md" color="black">{transaction.Amount}</Text>
                            </Flex> 
                           
                      </Flex>
                      </Fragment>
                    ))
                }
            </Stack>
            <Button mt="6" w="full" colorScheme="gray ">View All</Button>
          </CustomCart>
        </>
     )
}
export default Transactions;