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
            <Image src={topNews} width={800} height={500} alt="top news"/>
           
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
             hello this is the title
            </p>
            <Typography gutterBottom variant="h5" component="div">
            this is the date
            </Typography>
            <Typography gutterBottom className="my-3">
           this is the short des
            </Typography>

            <Typography variant="body2" color="text.secondary">
            options
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