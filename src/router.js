import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import PostDetails from './views/PostDetails.vue';
import CreatePost from './views/CreatePost.vue';
import UpdatePost from './views/UpdatePost.vue';

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    { 
      path: '/details/:id', 
      name: 'details',
      component: PostDetails 
    },
    { 
      path: '/create', 
      name: 'create-post',
      component: CreatePost 
    },
    { 
      path: '/edit/:id', 
      name: 'update-post',
      component: UpdatePost 
    },
    {
      path: '/home',
      component: Home
    }
  ]
});

