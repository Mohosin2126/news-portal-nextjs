import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import headingImage from "@/assets/The Dragon News.png";
export default function Header(){

    return (
        <Box className="w-full my-5">
        <Container>
          <Image
            src={headingImage}
            width={500}
            height={500}
            alt="logo"
            className=" mx-auto"
          />
          <Typography
            variant="body2"
            color="gray"
            textAlign="center"
            className="my-2"
          >
            Journalism Without Fear or Favour
          </Typography>
          <Typography textAlign="center">Date</Typography>
        </Container>
      </Box>
    )
}