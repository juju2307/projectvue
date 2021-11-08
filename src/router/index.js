import {createRouter, createWebHistory} from 'vue-router';
import Home from '../views/Home.vue';
import Contact from '../views/Contact.vue';
import NotFound from '../views/NotFound.vue';
import ProductDetails from '../views/ProductDetails.vue';


const routes = [
    {
    path:"/",
    name:"Home",
    component: Home
    },

    {
     path:"/contact",
     name:"Contact",
     component: Contact
    },
    {
    path: '/products/:name',
    name: "product-details",
    component: ProductDetails
    },
    {
        path:"/:catchAll(.*)",
        component: NotFound
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;