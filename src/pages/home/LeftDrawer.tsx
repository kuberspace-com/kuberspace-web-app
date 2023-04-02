import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import * as React from 'react';
import { useState } from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
// import Toolbar from '@mui/material/Toolbar';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import USE_VIEWPORT from '../../hooks/Viewport';
import GENERAL_CONTEXT from '../../context/GeneralContext';

// import { styled, useTheme } from '@mui/material/styles';

// const DRAWER_WIDTH = 240;

// const MAIN = styled('main', { shouldForwardProp: (prop)=> prop !== 'open' })<{
//   open?: boolean;
// }>(({ theme, open })=> ({
//   flexGrow: 1,
//   padding: theme.spacing(3),
//   transition: theme.transitions.create('margin', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen
//   }),
//   marginLeft: `-${DRAWER_WIDTH}px`,
//   ...(open && {
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen
//     }),
//     marginLeft: 0
//   })
// }));

// const DRAWER_HEADER = styled('div')(({ theme })=> ({
//   display: 'flex',
//   alignItems: 'center',
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
//   justifyContent: 'flex-end'
// }));

// export default function ResponsiveDrawer(props) {
//   var theme = useTheme();

//   const [MOBILE_OPEN, SET_MOBILE_OPEN] = React.useState(false);

//   const HANDLE_DRAWER_TOGGEL = ()=> {
//     SET_MOBILE_OPEN(!MOBILE_OPEN);
//   };

//   const DRAWER = (
//     <div>
//       <DRAWER_HEADER>
//         <IconButton onClick={HANDLE_DRAWER_TOGGEL}>
//           {MOBILE_OPEN ? <ChevronLeftIcon /> : <ChevronRightIcon />}
//         </IconButton>
//       </DRAWER_HEADER>
//       <Divider />
//       <List>
//         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index)=> (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         {['All mail', 'Trash', 'Spam'].map((text, index)=> (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar
//         position="relative"
//         sx={{
//           width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
//           ml: { sm: `${DRAWER_WIDTH}px` }
//         }}
//       >
//         <Toolbar>
//           <Typography variant="h6" noWrap component="div">
//             Responsive drawer
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         variant="persistent"
//         sx={{
//           width: DRAWER_WIDTH,
//           flexShrink: 0,
//           '& .MuiDrawer-paper': {
//             width: DRAWER_WIDTH,
//             boxSizing: 'border-box'
//           },
//           '& .MuiDrawer-root': {
//             position: 'absolute'
//           },
//           '& .MuiPaper-root': {
//             position: 'absolute'
//           }
//         }}
//         open
//       >
//         {DRAWER}
//       </Drawer>
//       <MAIN open={MOBILE_OPEN}>
//         <DRAWER_HEADER />
//         {props.children}
//       </MAIN>
//     </Box>
//   );
// }

export default function LeftDrawer(props) {
  const CONTEXT = React.useContext(GENERAL_CONTEXT);
  const { VIEWPORT_WIDTH } = USE_VIEWPORT();
  const [OPEN, SET_OPEN] = useState(!(VIEWPORT_WIDTH <= 900));
  console.log(VIEWPORT_WIDTH);
  // if screen is not mobile then leave
  const HANDLE_DRAWER_TOGGEL = ()=> {
    SET_OPEN(!OPEN);
  };

  const DRAWER_WIDTH = '250px';
  return (
    <>
      <IconButton onClick={HANDLE_DRAWER_TOGGEL} sx={{ right: 0 }}>
        {OPEN ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </IconButton>
      <Drawer
        className="drawer"
        anchor="left"
        variant="persistent"
        open={OPEN || VIEWPORT_WIDTH > 900}
        sx={{
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box'
          },
          '& .MuiDrawer-root': {
            position: 'absolute'
          },
          '& .MuiPaper-root': {
            width: VIEWPORT_WIDTH > 900 ? DRAWER_WIDTH : '100%',
            position: 'absolute',
            background: 'black'
          }
        }}
      >
        <Box
          p={2}
          role="presentation"
          sx={{
            width: VIEWPORT_WIDTH > 900 ? DRAWER_WIDTH : '100%'
          }}
        >
          <Box style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
            {VIEWPORT_WIDTH <= 900 ? (
              <IconButton onClick={HANDLE_DRAWER_TOGGEL}>
                {OPEN ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            )
              : null}
          </Box>
          <List>
            {[' Metals', 'Chemicals', 'Seeds', 'Other Resources'].map((text)=> (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <StorefrontIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['Periodic Table', 'Trading', 'Other'].map((text)=> (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <StorefrontIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box sx={{
        marginLeft: OPEN || VIEWPORT_WIDTH > 900 ? DRAWER_WIDTH : 0,
        padding: '10px'
      }}
      >
        {props.children}
      </Box>
    </>
  );
}
