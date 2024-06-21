import LatestNews from "@/components/latest-news";
import SideBar from "@/components/sidebar";
import { Grid } from "@mui/material";

export default function Home() {

  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <LatestNews></LatestNews>
      </Grid>
      <Grid item xs={4}>
        <SideBar></SideBar>
      </Grid>
    </Grid>
  )
}