<template>
  <div>
    <header class="masthead" style="background-image: url('/img/home-bg.jpg')">
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="site-heading">
              <h1>Clean Blog</h1>
              <span class="subheading">Simple Blog </span>
              <button class="btn btn-primary p-1 m-2" @click="handleCreate">
                Create posts
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Main Content-->

    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <div v-if="error">{{ error }}</div>
          <div v-if="posts.length">
            <PostList :posts="posts" />
          </div>
          <div v-else>
            <Loading />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PostList from "../components/posts/PostList.vue"
import Loading from "../components/Loading.vue"
import getPosts from "../composable/getPosts"
import { useRouter } from "vue-router"
export default {
  name: "Home",
  components: {
    PostList,
    Loading,
  },
  setup() {
    const { posts, error, load } = getPosts()
    load()
    const router = useRouter()
    const handleCreate = () => {
      router.push({
        name: "CreatePost",
      })
    }
    return { posts, handleCreate, error }
  },
}
</script>
<style></style>
