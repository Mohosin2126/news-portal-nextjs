"use client"

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Image from 'next/image';
import logo from "@/assets/logo.webp"
import { IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from 'next/link';


const navItems=[

{
  route:"Home",
  pathname:"/",
},
{
  route:"Pages",
  pathname:"/pages",
},
{
  route:"Category",
  pathname:"/category",
},
{
  route:"News",
  pathname:"/news",
},
{
  route:"About",
  pathname:"/about",
},
{
  route:"Contact",
  pathname:"/contact",
},
  ]


const Navbar = () => {


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image src={logo} width={100} height={100} alt="logo" />

          <Box>
            {navItems.map((item) => (
             <Link key={item} href={item.pathname}>
        <Button className="text-white" >
          {item.route}
        </Button>
             </Link>
            ))}
          </Box>

          <Box>
            <IconButton>
              <FacebookIcon></FacebookIcon>
            </IconButton>
            <IconButton>
              <FacebookIcon></FacebookIcon>
            </IconButton>
            <IconButton>
              <FacebookIcon></FacebookIcon>
            </IconButton>
            <IconButton>
              <FacebookIcon></FacebookIcon>
            </IconButton>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
