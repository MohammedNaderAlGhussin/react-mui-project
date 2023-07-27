/* eslint-disable react/prop-types */
import { ModeNight } from "@mui/icons-material";
import { ListItem, ListItemButton, ListItemIcon, Switch } from "@mui/material";

const ToggleMode = ({ mode, setMode }) => {
  return (
    <ListItem
      sx={{
        width: { xs: "fit-content", sm: "normal" },
        position: { xs: "fixed", sm: "static" },
        bottom: { xs: "3%" },
      }}
    >
      <ListItemButton
        sx={{
          padding: {
            xs: "0px",
            md: "0px 16px",
          },
        }}
      >
        <ListItemIcon sx={{ display: { xs: "none", md: "block" } }}>
          <ModeNight />
        </ListItemIcon>
        <Switch
          sx={{ margin: { xs: "0px", md: " 0px -10px" } }}
          onChange={() => setMode(mode === "light" ? "dark" : "light")}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default ToggleMode;
