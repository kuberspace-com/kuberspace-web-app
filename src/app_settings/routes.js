import React from 'react';
import About from '../Pages/About/about.js';
import Contact from '../Pages/Contact/contact.js';
import InventoryPage from '../Pages/dashboard/sub_pages/inventory_page/inventory_page';
// import OrderForm from '../Pages/dashboard/sub_pages/order_page/orderForm';
// import SearchForm from '../searchForm';
import Dashboard from '../Pages/dashboard/dashboard'
import HomePage from '../Pages/HomePage/homepage';
import Catagories from '../Pages/dashboard/dashboard_catagories'

//icons
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import CreateIcon from '@mui/icons-material/Create';

//icons
import DashboardIcon from '@mui/icons-material/Dashboard';
// dashboard component
//tab bar routes
// "normal": {"path":'/', "makeTab":true, "label":"home","accessibleTo":["all"],"component":<Normal_route_component/>},

var routeObject = {
 "home": {"path":'/', "makeTab":true, "label":"home","accessibleTo":["all"],"component":<HomePage/>},
 "about": {"path":'/about', "makeTab":true,"label":"about","accessibleTo":["all"],"component":<About/>},
 "contact": {"path":'/contact', "makeTab":true, "label":"contact","accessibleTo":["all"],"component":<Contact/>},
 "dashboard": {
  "path":'/dashboard',
  "redirect":'/dashboard/console',
  "makeTab":true,
  "label":"dashboard",
  "accessibleTo":["user"],
  "component":<Dashboard/>,
  "routes": {
    "console": {"path":'console', "icon":DashboardIcon, "label":"console", "accessibleTo":["all"],"component": <Catagories /> } ,
     "product": {"path":'add_product',"icon":NoteAddIcon, "label":"upload product", "accessibleTo":["all"],"component": <InventoryPage /> } ,
    //  "order": {"path":'add_order', "icon":CreateIcon, "label":"create order", "accessibleTo":["all"],"component":<OrderForm/>}
   }
  }
}

// dashboard component
// other routes

// {

// "dashboard": {


// }

// }
export default routeObject;