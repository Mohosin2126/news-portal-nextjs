import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Grid,
    Typography,
  } from "@mui/material";
import Image from "next/image";
import topNews from "../../assets/top-news.png"
export default function LatestNews(){

    return (
        <Box className="my-5">
      <Card>
      <CardActionArea>
          <CardMedia>
            <Image src={topNews} alt="top news"/>
           
          </CardMedia>
        
        </CardActionArea>
      </Card>

      <Grid
        className="mt-5"
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >

      </Grid>
    </Box>
    )
}