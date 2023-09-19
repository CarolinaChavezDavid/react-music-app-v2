import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const IndexText = styled(Typography)(() => ({
  fontSize: 22,
  fontWeight: "bold",
  color: "#0B1147",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
}));

export const SubtitleText = styled(Typography)(() => ({
  fontSize: 22,
  color: "#6c757d",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
}));
