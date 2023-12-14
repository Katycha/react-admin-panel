import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import SideBar from "../components/SideBar/SideBar";
import { Box } from "@mui/material";

function MainLayout(props) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <Box sx={{ mt: "74px", display: "flex" }}>
        <SideBar />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
          }}
        >
          <main style={{ background: "#E9ECEF" }}>{props.children}</main>

          <Box sx={{ marginLeft: "257px" }}>
            <Footer />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default MainLayout;
