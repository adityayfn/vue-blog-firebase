import { createWebHistory, createRouter } from "vue-router"
import Home from "../views/Home.vue"
import ShowPost from "../views/posts/ShowPost.vue"
import CreatePost from "../views/posts/CreatePost.vue"
import Tag from "../views/posts/Tag.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/posts/create",
    name: "CreatePost",
    component: CreatePost,
  },
  {
    path: "/posts/:id",
    name: "ShowPost",
    component: ShowPost,
    props: true,
  },
  {
    path: "/tag/:tag",
    name: "Tag",
    component: Tag,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
