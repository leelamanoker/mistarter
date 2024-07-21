import React from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import IcecreamIcon from '@mui/icons-material/Icecream';
import CoffeeIcon from '@mui/icons-material/Coffee';
import CakeIcon from '@mui/icons-material/Cake';
const Menu = () => {
  return (
    <Box flex={1}  bgcolor='lightgrey'> 
  <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CakeIcon />
              </ListItemIcon>
              <ListItemText primary="Sweets" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CoffeeIcon/>
              </ListItemIcon>
              <ListItemText primary="Coffee" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <IcecreamIcon />
              </ListItemIcon>
              <ListItemText primary="Vegetables" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CakeIcon />
              </ListItemIcon>
              <ListItemText primary="Cookie" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CoffeeIcon/>
              </ListItemIcon>
              <ListItemText primary="Juice" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <IcecreamIcon />
              </ListItemIcon>
              <ListItemText primary="icecreams" />
            </ListItemButton>
          </ListItem>
        </List>
    </Box>
  )
}

export default Menu
