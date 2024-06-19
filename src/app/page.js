import LatestNews from "@/components/latest-news";
import { Grid } from "@mui/material";

export default function Home(){

  return (
    <Grid container spacing={2}>
    <Grid item xs={8}>
<LatestNews></LatestNews>
    </Grid>
    <Grid item xs={4}>
<h1>hello this is me sidebar</h1>
    </Grid>
  </Grid>
  )
}