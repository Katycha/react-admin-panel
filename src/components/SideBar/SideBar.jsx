import { Drawer, Toolbar, Divider } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TuneIcon from "@mui/icons-material/Tune";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Box } from "@mui/material";
import { useState } from "react";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ListAltIcon from "@mui/icons-material/ListAlt";
import SettingsIcon from "@mui/icons-material/Settings";
function SideBar() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: "257px",
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: "257px",
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ px: "10px" }}>
        <List sx={{ mt: "38px" }} subheader="Home">
          <ListItemButton
            onClick={() => {
              setSelectedItem(0);
            }}
            selected={selectedItem === 0}
          >
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>

            <ListItemText primary="Dashboard" />
          </ListItemButton>

          <ListItemButton
            onClick={() => {
              setSelectedItem(1);
            }}
            selected={selectedItem === 1}
          >
            <ListItemIcon>
              <TuneIcon />
            </ListItemIcon>

            <ListItemText primary="Menu Style" />
            {selectedItem === 1 ? (
              <KeyboardArrowDownIcon />
            ) : (
              <KeyboardArrowRightIcon />
            )}
          </ListItemButton>
        </List>
        <Divider />

        <List sx={{ mt: "38px" }} subheader="Pages">
          <ListItemButton
            onClick={() => {
              setSelectedItem(6);
            }}
            selected={selectedItem === 6}
          >
            <ListItemIcon>
              <AccountBalanceWalletIcon />
            </ListItemIcon>

            <ListItemText primary="Examples" />
            {selectedItem === 6 ? (
              <KeyboardArrowDownIcon />
            ) : (
              <KeyboardArrowRightIcon />
            )}
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              setSelectedItem(7);
            }}
            selected={selectedItem === 7}
          >
            <ListItemIcon>
              <ListAltIcon />
            </ListItemIcon>

            <ListItemText primary="Widgets" />
            {selectedItem === 7 ? (
              <KeyboardArrowDownIcon />
            ) : (
              <KeyboardArrowRightIcon />
            )}
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              setSelectedItem(8);
            }}
            selected={selectedItem === 8}
          >
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>

            <ListItemText primary="Maps" />
            {selectedItem === 8 ? (
              <KeyboardArrowDownIcon />
            ) : (
              <KeyboardArrowRightIcon />
            )}
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              setSelectedItem(9);
            }}
            selected={selectedItem === 9}
          >
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>

            <ListItemText primary="Authentication" />
            {selectedItem === 9 ? (
              <KeyboardArrowDownIcon />
            ) : (
              <KeyboardArrowRightIcon />
            )}
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              setSelectedItem(10);
            }}
            selected={selectedItem === 10}
          >
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>

            <ListItemText primary="Users" />
            {selectedItem === 10 ? (
              <KeyboardArrowDownIcon />
            ) : (
              <KeyboardArrowRightIcon />
            )}
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              setSelectedItem(11);
            }}
            selected={selectedItem === 11}
          >
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Error 404" />
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              setSelectedItem(12);
            }}
            selected={selectedItem === 12}
          >
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Error 505" />
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              setSelectedItem(13);
            }}
            selected={selectedItem === 13}
          >
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>

            <ListItemText primary="Maintense" />
          </ListItemButton>
        </List>
        <Divider />
        <List sx={{ mt: "38px" }} subheader="Elements">
          <ListItemButton
            onClick={() => {
              setSelectedItem(2);
            }}
            selected={selectedItem === 2}
          >
            <ListItemIcon>
              <AccountBalanceWalletIcon />
            </ListItemIcon>

            <ListItemText primary="Components" />
            {selectedItem === 2 ? (
              <KeyboardArrowDownIcon />
            ) : (
              <KeyboardArrowRightIcon />
            )}
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              setSelectedItem(3);
            }}
            selected={selectedItem === 3}
          >
            <ListItemIcon>
              <ListAltIcon />
            </ListItemIcon>

            <ListItemText primary="Forms" />
            {selectedItem === 3 ? (
              <KeyboardArrowDownIcon />
            ) : (
              <KeyboardArrowRightIcon />
            )}
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              setSelectedItem(4);
            }}
            selected={selectedItem === 4}
          >
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>

            <ListItemText primary="Table" />
            {selectedItem === 4 ? (
              <KeyboardArrowDownIcon />
            ) : (
              <KeyboardArrowRightIcon />
            )}
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              setSelectedItem(5);
            }}
            selected={selectedItem === 5}
          >
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>

            <ListItemText primary="Icons" />
            {selectedItem === 5 ? (
              <KeyboardArrowDownIcon />
            ) : (
              <KeyboardArrowRightIcon />
            )}
          </ListItemButton>
        </List>
      </Box>
    </Drawer>
  );
}
export default SideBar;
