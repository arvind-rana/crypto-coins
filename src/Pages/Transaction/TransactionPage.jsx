import { Card, Tag, Flex, Button, Icon,Tabs, TabList, Tab, TabPanel,TabPanels,InputGroup,Input, InputLeftElement } from "@chakra-ui/react";
import DashboardLayout from "../../Components/DashboardLayout";
import { FaDownload } from "react-icons/fa6";
import PageTable from "./TransactionComponent/PageTable";
import { CiSearch } from "react-icons/ci";
const TransactionPage = () => {
    const tab = [
        {
            name : "All",
            count : "349"
        },
        {
            name : "Deposite",
            count : "114"
        },
        {
            name : "Withdraw",
            count : "55"
        },
        {
            name : "Trade",
            count : "50"
        },
    ];

  return (
    <>
      <DashboardLayout title="Transactions">
        <Flex justify="end" mb="3" mt="6">
          <Button leftIcon={<Icon as={FaDownload} />}>Export CSV</Button>
        </Flex>
        <Card>
          <Tabs>
            <TabList py="3" gap="4">
            {
                tab.map((val) => (
                    <Tab key={val.name} display="flex" gap="2">
                     {val.name} <Tag colorScheme="gray" borderRadius="full">{val.count}</Tag>
                    </Tab>
                ))
            }
        
            <InputGroup w="300px" justifyContent="start" marginLeft="250px" borderColor="Black" borderRadius="full">
           <InputLeftElement w="50px">
           <Icon as={CiSearch }/>
           </InputLeftElement>
              <Input type='tel' placeholder="search....."/> 
            </InputGroup>

            </TabList>

            <TabPanels>
              <TabPanel>
                <PageTable/>
              </TabPanel>
              <TabPanel>
              <PageTable/>
              </TabPanel>
              <TabPanel>
              <PageTable/>
              </TabPanel>
              <TabPanel>
              <PageTable/>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>
      </DashboardLayout>
    </>
  );
};
export default TransactionPage;
