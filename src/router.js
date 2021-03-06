// Universal Templates
import Vue from "vue";
import Router from "vue-router";
// Public Facing Templates
import Home from "./views/Home.vue";
import Login from "./views/web/Login.vue";
import CreateAccount from "./views/web/CreateAccount.vue";
import ForgotPassword from "./views/web/ForgotPassword.vue";
import PageNotFound from "./views/web/NotFound.vue";
import Admin from "./views/admin/Admin.vue";
// Admin Templatees
import AdminDashboard from "./views/admin/AdminDashboard.vue";
// import AdminDashboardTwo from "./views/admin/AdminDashboard2.vue";
import AdminAddBill from "./views/admin/AdminAddBill.vue";
import AdminEditBill from "./views/admin/AdminEditBill.vue";
import AdminBills from "./views/admin/AdminBills.vue";
import AdminSettings from "./views/admin/AdminSettings.vue";
import AdminEditSettings from "./views/admin/AdminEditSettings.vue";

//Libraries
import firebase from "firebase";

Vue.use(Router);

const router = new Router({
  mode: "history",
  // base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/create-account",
      name: "create-account",
      component: CreateAccount
    },
    {
      path: "/forgot-password",
      name: "forgot-password",
      component: ForgotPassword
    },
    {
      path: "/admin/",
      name: "admin",
      component: Admin,
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: "dashboard",
          name: "admin-dashboard",
          component: AdminDashboard
        },
        // {
        //   path: "dashboard2",
        //   name: "admin-dashboard-two",
        //   component: AdminDashboardTwo
        // },
        {
          path: "add-bill",
          name: "admin-add-bill",
          component: AdminAddBill
        },
        {
          path: "edit-bill/:bill_slug",
          name: "admin-edit-bill",
          component: AdminEditBill
        },
        {
          path: "bills",
          name: "admin-bills",
          component: AdminBills
        },
        {
          path: "settings",
          name: "admin-settings",
          component: AdminSettings
        },
        {
          path: "edit-settings",
          name: "admin-edit-settings",
          component: AdminEditSettings
        }
      ]
    },
    {
      path: "/*",
      name: "page-not-found",
      component: PageNotFound
    }
  ]
});

//route definitions
router.beforeEach((to, from, next) => {
  // check to see if route requires Auth
  if (to.matched.some(rec => rec.meta.requiresAuth)) {
    // check auth state of user
    let user = firebase.auth().currentUser;

    if (user) {
      //user signed in proceed to route
      next();
    } else {
      // user is not signed in redirect to login
      next({ name: "login" });
    }
  } else {
    // carry on as normal
    next();
  }
});

export default router;
