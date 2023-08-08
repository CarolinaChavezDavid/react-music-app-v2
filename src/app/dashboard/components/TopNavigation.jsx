"use client";
import {
  AppBar,
  Box,
  Container,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import { common } from "@mui/material/colors";
import { useRouter } from "next/navigation";
import { CustomLink } from "./CustomLink";
import { Logo } from "./Logo";

const Link = styled(CustomLink)(({ theme }) => ({
  color: common.white,
  textTransform: "none",
  fontSize: "20px",
  marginRight: "2rem",
  color: "#FFFFFF",

  "&:hover": {
    color: "#FF00E6",
    opacity: 1,
  },
  "&:active": {
    background: `linear-gradient(90deg, #4C0BD1, #7900FF)`,
  },
}));

const CustomBox = styled(Box)(() => ({
  borderRadius: "2rem",
  "&.focusVisible": {},
}));

const CustomHeader = styled(AppBar)(({ theme }) => ({
  color: common.black,
  backgroundColor: "#121640",
  left: 0,
  boxShadow: "0 2px 4px 0 rgba(176,176,176,0.5)",
  zIndex: theme.zIndex.modal,
}));

export const TopNavigation = () => {
  const router = useRouter();

  const links = [
    {
      text: "Top global",
      href: "/",
    },
    {
      text: "Top 50",
      href: "/country",
    },
    {
      text: "Favorites",
      href: "/favorites",
    },
  ];

  return (
    <CustomHeader position="sticky">
      <Container maxWidth="xl" component="nav" sx={{ p: "1rem" }}>
        <Grid container alignItems="center" spacing={6}>
          <Grid item>
            <Logo />
          </Grid>
          <Grid item>
            <CustomBox>
              {links.map((item) => {
                return (
                  <Link
                    href={item.href}
                    key={item.text}
                    variant="text"
                    sx={{
                      "&:after": {
                        display: router.pathname === "/" ? "active" : "",
                      },
                    }}
                  >
                    <Typography style={{ fontSize: 24 }}>
                      {item.text}
                    </Typography>
                  </Link>
                );
              })}
            </CustomBox>
          </Grid>
        </Grid>
      </Container>
    </CustomHeader>
  );
};
