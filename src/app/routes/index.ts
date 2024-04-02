import express from "express";

const router = express.Router();

const modulesRoutes = [
  {
    path: "/users",
    route: "",
  },
  {
    path: "/products",
    route: "",
  },
];

modulesRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
