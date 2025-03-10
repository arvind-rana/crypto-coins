import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Td,
  Th,
  TableCaption,
  TableContainer,
  Stack,
  Text,
  Tag,
} from "@chakra-ui/react";

const PageTable = () => {
 
   const tabelData = [
    {
      id: "HD82NA2H",
      date: "10-10-2024",
      time: "8:54PM",
      type :{
        name : "INR Deposite",
        tag : "E-Transefer",
      },
      amount: "+83",
      status: "Pending"
    },
    {
      id: "HD82NA2H",
      date: "10-10-2024",
      time: "8:54PM",
      type :{
        name : "INR Deposite",
        tag : "E-Transefer",
      },
      amount: "+83",
      status: "Processing"
    },
    {
      id: "HD82NA2H",
      date: "10-10-2024",
      time: "8:54PM",
      type :{
        name : "INR Deposite",
        tag : "E-Transefer",
      },
      amount: "+83",
      status: "Cancelled"
    },
    {
      id: "HD82NA2H",
      date: "10-10-2024",
      time: "8:54PM",
      type :{
        name : "INR Deposite",
        tag : "E-Transefer",
      },
      amount: "+83",
      status: "Completed"
    },
    {
      id: "HD82NA2H",
      date: "10-10-2024",
      time: "8:54PM",
      type :{
        name : "INR Deposite",
        tag : "E-Transefer",
      },
      amount: "+83",
      status: "Completed"
    },
    
   ]

   const statusColor = {
    Pending: "#797E82",
    Processing: "#F5A50B",
    Cancelled: "#DC2626",
    Completed: "#059669",   
  }


  return (
    <>
      <TableContainer>
        <Table variant="simple" colorScheme="gray" >
          
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Date & Time</Th>
              <Th>Type</Th>
              <Th>Amount</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
           {
            tabelData.map((data) => (
              <Tr key={data.id}>
                <Td>{data.id}</Td>
                <Td>
                  <Stack>
                    <Text fonstSize="sm" fontWeight="medium">{data.date}</Text>
                    <Text fonstSize="xs" fontWeight="medium" color="blackAlpha.500">{data.time}</Text>
                  </Stack>
                </Td>
                <Td>
                  <Stack>
                    <Text fonstSize="sm" fontWeight="medium">{data.type.name}</Text>
                    <Text fonstSize="xs" fontWeight="medium" color="blackAlpha.500">{data.type.tag}</Text>
                  </Stack>
                </Td>
                <Td fonstSize="sm" fontWeight="medium">{data.amount}</Td>
                <Td fonstSize="sm" fontWeight="medium" >
                  <Tag bg={statusColor[data.status]}  borderRadiu="full">{data.status}</Tag>
                </Td>
              </Tr>
            ))
           }
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
export default PageTable;
