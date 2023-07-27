import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const BlueButton = styled(Button)({
  backgroundColor: "skyblue",
  color: "#888",
  margin: 5,
  "&:hover": {
    backgroundColor: "lightblue",
  },
});
