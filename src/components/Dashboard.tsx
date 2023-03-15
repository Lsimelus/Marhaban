import React, { Component } from 'react';
import { styled, useTheme, createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import {
    BrowserRouter,
    Route,
    Link,
    Routes,
    HashRouter,
  } from "react-router-dom";

export interface DashboardProps {
  }

const Dashboard = (props: DashboardProps) => {
      return (
      <HashRouter basename="/">
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>

        <hr />
        <Routes>

        

        <Route  path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        </Routes>
      </div>
    </HashRouter>
  );
}


const Home = () => <div><h2>Home</h2></div>
const About = () => <div><h2>About</h2></div>

    
    export default Dashboard;
