// import CloseIcon from '@mui/icons-material/Close';
// import Settings from '../../app_settings/settings'
// import {useNavigate,useLocation} from "react-router-dom";
// import PageviewIcon from '@mui/icons-material/Pageview';
// import SearchForm from './searchForm';
// import * as React from 'react';
// import { styled, useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import CssBaseline from '@mui/material/CssBaseline';
// import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import { Route,Outlet} from "react-router-dom";
// import './dashboard.scss'
// const drawerWidth = 240;

// // const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
// //   ({ theme, open }) => ({

//   const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
//     ({ theme, open }) => ({
//       flexGrow: 1,
//       top: '48px',
//       padding: theme.spacing(3),
//       transition: theme.transitions.create('margin', {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//       }),
//       marginLeft: `-${drawerWidth}px`,
//       ...(open && {
//         top: '48px',
//         transition: theme.transitions.create('margin', {
//           easing: theme.transitions.easing.easeOut,
//           duration: theme.transitions.duration.enteringScreen,
//         }),
//         marginLeft: 0,
//       }),
//     }),
//   );

//   const AppBar = styled(MuiAppBar, {
//     shouldForwardProp: (prop) => prop !== 'open',
//   })(({ theme, open }) => ({
//     top: '48px',
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     ...(open && {
//       width: `calc(100% - ${drawerWidth}px)`,
//       top:'48px',
//       marginLeft: `${drawerWidth}px`,
//       transition: theme.transitions.create(['margin', 'width'], {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//     }),
//   }));

// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   top:'48px',
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
//   justifyContent: 'flex-end',
// }));

// export default function Dashboard(props) {
//   var location = useLocation();
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);
//   const [search_dropdown_open, setSearch_dropdown_open] = React.useState(false);
//   let navigate = useNavigate()

//   var sub_routes = Settings.getSubRoutes("dashboard")
//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Box className="dashboard" sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar position="fixed" open={open}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"
//             sx={{ mr: 2, ...(open && { display: 'none' }) }}
//           >
//             <MenuIcon />
//           </IconButton>
//           {search_dropdown_open?
// <CloseIcon  sx={{position: "absolute",right:"30px",cursor:"grab"}}
// onClick={(e)=>{setSearch_dropdown_open(!search_dropdown_open)}}>
// </CloseIcon>:<PageviewIcon sx={{position: "absolute",right:"30px",cursor:"grab"}}
// onClick={(e)=>{setSearch_dropdown_open(!search_dropdown_open)}} className="search_icon" />}
//           {search_dropdown_open?  <Box className="search_dropdown"><SearchForm></SearchForm></Box>:null }

//           <Typography variant="h6" noWrap component="div">
//             Dashboard
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           '& .MuiDrawer-paper': {
//             width: drawerWidth,
//             boxSizing: 'border-box',
//           },
//         }}
//         variant="persistent"
//         anchor="left"
//         open={open}
//       >
//         <DrawerHeader>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
//           </IconButton>
//         </DrawerHeader>
//         <Divider />
//         <List>
//           {Object.keys(sub_routes).map((key, index) => {
//             var obj = sub_routes[key];
//             return (<ListItem onClick={(e) => { navigate('/dashboard/' + obj.path) }} key={key} disablePadding>
//               <ListItemButton>
//                 <ListItemIcon>
//                   {obj.icon ? < obj.icon /> : null}
//                 </ListItemIcon>
//                 <ListItemText primary={obj.label} />
//               </ListItemButton>
//             </ListItem>
//             )
//           })}
//         </List>
//         <Divider />
//         <List>
//           {['All mail', 'Trash', 'Spam'].map((text, index) => (
//             <ListItem key={text} disablePadding>
//               <ListItemButton>
//                 <ListItemIcon>
//                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                 </ListItemIcon>
//                 <ListItemText primary={text} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//       <Main open={open}>
//          <DrawerHeader />
//         <Outlet />
//        </Main>
//     </Box>
//   );
// }
