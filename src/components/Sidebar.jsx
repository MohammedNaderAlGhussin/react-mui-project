/* eslint-disable react/prop-types */
import {
  AccountBox,
  Groups,
  Home,
  Pages,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material";
import {
  Box,
  List,
  // ListItem,
  // ListItemButton,
  // ListItemIcon,
  // Switch,
} from "@mui/material";
import ListItemComponent from "./ListItemComponent";
import ToggleMode from "./ToggleMode";

const Sidebar = ({ mode, setMode }) => {
  return (
    <Box
      sx={{
        display: { xs: "none", sm: "block" },
        flex: { xs: "0.5", md: "1" },
      }}
    >
      <Box position="fixed">
        <List>
          <ListItemComponent icon={<Home />} text="Home" />
          <ListItemComponent icon={<Pages />} text="Pages" />
          <ListItemComponent icon={<Groups />} text="Groups" />
          <ListItemComponent icon={<Storefront />} text="Marketpalce" />
          <ListItemComponent icon={<Person />} text="Friends" />
          <ListItemComponent icon={<Settings />} text="Settings" />
          <ListItemComponent icon={<AccountBox />} text="Profile" />
          <ToggleMode mode={mode} setMode={setMode} />
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
