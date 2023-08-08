import { Grid, Typography } from "@mui/material";
import { common } from "@mui/material/colors";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" style={{ textDecoration: "none" }}>
      <Grid container alignItems="center">
        <Grid item>
          <Image
            width={180}
            height={100}
            src="/images/appLogo.png"
            alt="logo"
          />
        </Grid>

        <Grid item>
          <Typography variant="h1" color={common.white}>
            MusicApp
          </Typography>
        </Grid>
      </Grid>
    </Link>
  );
};
