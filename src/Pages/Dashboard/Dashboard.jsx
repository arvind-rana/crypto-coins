import { Flex,Box,Grid, GridItem  } from '@chakra-ui/react';
import DashboardLayout from '../../Components/DashboardLayout';
import InfoCard from './Component/InfoCard';
import PortfolioSection from './Component/PortfolioSection';
import PriceSection from './Component/PriceSection';
import Transactions from './Component/Transactions';

const Dashboard = ({}) => {

    
    return (
    <>
       <DashboardLayout title="Dashboard">
       <Grid
       gridTemplateColumns={{
        base: "repeat(1,1fr)",
        md: "repeat(2,2fr)",
       }}
       gap="6">
        <GridItem colSpan={2}>
        <PortfolioSection/>
       </GridItem>
       <GridItem colSpan={1}>
       <PriceSection/>
       </GridItem>
       
       <GridItem colSpan={1}>
       <Transactions/>
       </GridItem>
       <GridItem colSpan={1}>
       <InfoCard 
        text = "Loan more about loans - keep your bitcoin access it's value without selling it"
        tagText = "Loan"
        />
       </GridItem>
       <GridItem colSpan={1} >
       <InfoCard 
        text = "Learn more about our real estate, mortage, and corporate account services"
        tagText= "Contact"
      />
       </GridItem>
       </Grid>
       </DashboardLayout> 
     </>

    );
}
export default Dashboard;