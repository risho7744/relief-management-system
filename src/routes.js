/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from 'views/Index.js';
import Profile from "views/main/Profile.js";
import Maps from "views/main/Maps.js";
import Register from "views/main/Register.js";
import Login from "views/main/Login.js";
import Tables from "views/main/Tables.js";
import FamilyList from "views/main/FamilyList";
import Add_Family from "views/main/Add_Family";


var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
    {
    path: "/families",
    name: "Families Data",
    icon: "ni ni-planet text-blue",
    component: FamilyList,
    layout: "/admin"
  },
  {
    path: "/Quarantined",
    name: "Quarantined",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/Relief_Data",
    name: "Relief Data",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "",
    icon: "",
    component: Login,
    layout: "/auth"
  },
  {
    path: "/register",
    name: "",
    icon: "",
    component: Register,
    layout: "/auth"
  },
  {
    path: "/Add_Family",
    name: "",
    icon: "",
    component: Add_Family,
    layout: "/admin"
  },
];
export default routes;
