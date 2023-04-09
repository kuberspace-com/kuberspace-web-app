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
import StorefrontIcon from '@mui/icons-material/Storefront';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate } from 'react-router-dom';
import USE_VIEWPORT from '../../hooks/UseViewport';
// import GENERAL_CONTEXT from '../../context/GeneralContext';

export default function LeftDrawer(props) {
  // const CONTEXT = React.useContext(GENERAL_CONTEXT);
  const { VIEWPORT_WIDTH } = USE_VIEWPORT();
  const [OPEN, SET_OPEN] = useState(!(VIEWPORT_WIDTH <= 900));
  // if screen is not mobile then leave
  const HANDLE_DRAWER_TOGGEL = ()=> {
    SET_OPEN(!OPEN);
  };

  const NAVIGATE = useNavigate();

  React.useEffect(()=> {
    if (VIEWPORT_WIDTH > 900) {
      SET_OPEN(true);
    }
    if (VIEWPORT_WIDTH <= 900) {
      if (OPEN) {
        SET_OPEN(false);
      }
    }
  }, [VIEWPORT_WIDTH]);

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
              <IconButton onClick={HANDLE_DRAWER_TOGGEL} sx={{ marginRight: '2%' }}>
                {OPEN ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            )
              : null}
          </Box>
          <List>
            {['metals', 'seeds', 'Chemicals', 'Other Resources'].map((text)=> {
              var fixedText = text.slice(0, 1).toUpperCase() + text.slice(1);
              return (
                <ListItem
                  key={text}
                  onClick={
                ()=> NAVIGATE(`/products/${text}`)
                }
                  disablePadding
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <StorefrontIcon />
                    </ListItemIcon>
                    <ListItemText primary={fixedText} />
                  </ListItemButton>
                </ListItem>
              );
            })}
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
        padding: '10px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}
      >
        {props.children}
      </Box>
    </>
  );
}
