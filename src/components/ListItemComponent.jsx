/* eslint-disable react/prop-types */
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";

const ListItemTextComponent = styled(ListItemText)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("md")]: {
    display: "block",
  },
}));
const ListItemStyled = styled(ListItem)({
  width: "fit-content",
  //   padding: "0px 0px"
});

const ListItemComponent = ({ icon, text }) => {
  return (
    <ListItemStyled>
      <ListItemButton>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemTextComponent primary={text} />
      </ListItemButton>
    </ListItemStyled>
  );
};

export default ListItemComponent;
