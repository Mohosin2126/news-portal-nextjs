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
            <Image src={topNews} height={500} width={800} alt="top news"/>
           
          </CardMedia>
          <CardContent>
            <p
              className="
                      w-[100px]
                      bg-red-500
                      px-2
                      text-white
                      my-5
                      rounded
                      "
            >
          category
            </p>
            <Typography gutterBottom variant="h5" component="div">
            Bitcoin climbs as Elon Musk says tesla likely to accept it again 
            </Typography>
            <Typography gutterBottom className="my-3">
         By Mohosin 
            </Typography>

            <Typography variant="body2" color="text.secondary">
            It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout........
            </Typography>
          </CardContent>
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