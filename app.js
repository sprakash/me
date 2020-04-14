/*import Vue from 'vue';
import Router from './router'
import App from './App';


const vue = new Vue ({
	el : '#app',
	router: Router,
	template : h => h(App)

});*/


import Vue from 'vue';
import Vuetify from 'vuetify';
import VueMq from 'vue-mq';
import Router from 'vue-router';
import App from './App.vue';
import Digital from './components/Digital'
import Theatre from './components/Theatre'
import Film from './components/Film'
import Connect from './components/Connect'
import Landing from './components/Landing'

Vue.use(VueMq, {
  breakpoints: {
    sm: 904,
    md: 1065,
    lg: Infinity,
  }
}),

Vue.use(Router)
Vue.use(Vuetify)

const routes= [
    {
      path: '/digital',
      name: 'Digital',
      component: Digital,
      props: true
    },
     {
      path: '/theatre',
      name: 'Theatre',
      component: Theatre,
      props: true
    },
     {
      path: '/film',
      name: 'Film',
      component: Film,
      props: true
    },
     {
    	path: '/connect',
    	name: 'Connect',
    	component: Connect,
     	props: false
    },
    {
    	path: '/',
    	name: 'Landing',
    	component: Landing,
    	props: false
    }
  ]

 const router = new  Router({
 	routes
 });


 new Vue({
        el: '#app',
        vuetify: new Vuetify(),
        router: router,
        components: { App },
        render: h => h(App)
});


