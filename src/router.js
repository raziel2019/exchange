import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import About from "@/views/About";
import Error from "@/views/Error";
import CoinDetail from "@/views/CoinDetail";

Vue.use(Router); //incorporar plugins con use

export default new Router({
  mode: "history", //Siempre va es de html

  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "*",
      name: "Error",
      component: Error
    },
    {
        path:"/coin/:id",// : id es un parametro dinamico
        name:"coin-detail",
        component: CoinDetail
    }
  ]
});
