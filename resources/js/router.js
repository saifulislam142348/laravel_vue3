import { createWebHistory,createRouter } from "vue-router";
import HomeComponent from  './components/HomeComponent.vue';
import ContactComponent from  './components/ContactComponent.vue';
import DataInsert from  './components/DataInsert.vue';
import RegistrationComponent from  './components/RegistrationComponent.vue';

const routes=[
    {
        path:'/home',
        name:'home',
        component:HomeComponent
    },
    {
        path:'/contact',
        name:'contact',
        component:ContactComponent
    },
    {
        path:'/DataInsert',
        name:'data',
        component:DataInsert
    },
    {
        path:'/registration',
        name:'registration',
        component:RegistrationComponent
    },
];
const router= createRouter({
    history:createWebHistory(),
    routes
});
 export default router;
