import { Box } from "@mui/material";
import ProductInfoCard from "../../components/ProductInfoCard";
import VisaCard from "../../components/VisaCard";
import Hello from "../../components/Hello";
import SalesChart from "../../components/SalesChart";
import Clients from "../../components/Clients";
import Overview from "../../components/Overview";

function Dashboard() {
  return (
    <Box>
      <Hello />
      <Box></Box>
      <Box sx={{ display: "flex", mt: "100px", columnGap: "40px" }}>
        <SalesChart />
        <Box sx={{ display: "flex", flexDirection: "column", rowGap: "40px" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <VisaCard />
            <ProductInfoCard />
          </Box>
          <Clients />
          <Overview />
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
