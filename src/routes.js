// import Home from "./views/Contact.vue";
// import Summary from "./views/Summary.vue";
// import Skills from "./views/Skills.vue";
// import NotFound from "./views/NotFound.vue";

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("./views/Home.vue"),
  },
  {
    path: "/summary",
    name: "summary",
    component: () => import("./views/Summary.vue"),
  },
  {
    path: "/project",
    name: "project",
    component: () => import("./views/Summary.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("./views/Summary.vue"),
  },
  {
    path: "/skills",
    name: "skills",
    component: () => import("./views/Skills.vue"),
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/About.vue')
  },
  {
    path: "/:path(.*)",
    name: "notfound",
    component: () => import("./views/NotFound.vue"),
  },
];
