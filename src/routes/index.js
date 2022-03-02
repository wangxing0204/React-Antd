import Login from "../pages/Login";
import List from "../pages/admin/products/List";
import Index from "../pages/admin/dashboard/Index";
import Edit from "../pages/admin/products/Edit";
import PageNotFound from "../pages/PageNotFound";
import {UnorderedListOutlined, AreaChartOutlined, FormOutlined} from "@ant-design/icons";
import React from "react";

export const mainRoutes = [{
    path: "/login",
    component: Login
}, {
    path: "/error",
    component: PageNotFound
}]

export const adminRoutes = [{
    path: "/admin/products",
    component: List,
    exact: true,
    isShow: true,
    title: "列表",
    icon: <UnorderedListOutlined/>
}, {
    path: "/admin/dashboard",
    component: Index,
    isShow: true,
    title: "看板",
    icon: <AreaChartOutlined/>
}, {
    path: "/admin/products/edit/:id?",
    component: Edit,
    isShow: true,
    title: "编辑",
    icon: <FormOutlined/>
}]