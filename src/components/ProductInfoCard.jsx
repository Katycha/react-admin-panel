import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, Typography, Button } from "@mui/material";

function ProductInfoCard() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        rowGap: "24px",
        background: "#FFF",
        padding: "24px",
      }}
    >
      <Box sx={{ display: "flex", columnGap: "40px" }}>
        <Box sx={{ display: "flex", columnGap: "16px" }}>
          <Box
            sx={{
              background: "#D8DDFA",
              textAlign: "center",
              width: "24px",
              height: "24px",
              color: "#0048B2",
            }}
          >
            <ShoppingBagIcon />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography>1153</Typography>
            <Typography sx={{ color: "#8A92A6" }}>Products</Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", columnGap: "16px" }}>
          <Box
            sx={{
              background: "#CDEBEC",
              textAlign: "center",
              width: "24px",
              height: "24px",
              color: "#409900",
            }}
          >
            <ShoppingCartIcon />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography>81K</Typography>
            <Typography sx={{ color: "#8A92A6" }}>Order Served</Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography>$4,050,12,300</Typography>
        <Box
          sx={{
            background: "#1AA053",
            textAlign: "center",
            width: "100px",
            height: "17px",
            borderRadius: "20px",
            color: "#FFF",
            padding: "5px",
          }}
        >
          <Typography>YoY 24%</Typography>
        </Box>
      </Box>
      <Box sx={{ color: "#08B1BA" }}>
        <Typography>Life time sales</Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ background: "#3A57E8", borderRadius: "4px" }}>
          <Button
            variant="contained"
            sx={{ paddingX: "24px", paddingY: "8px" }}
          >
            View Project
          </Button>
        </Box>
        <Box sx={{ background: "#08B1BA", borderRadius: "4px" }}>
          <Button
            sx={{
              color: "#FFF",
              paddingX: "24px",
              paddingY: "8px",
            }}
          >
            Analytics
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default ProductInfoCard;
