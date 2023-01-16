<template>
  <div>
    <!-- <form>
      <div>
        <label for="">Title</label>
        <input type="text" v-model="title" />
      </div>
      <div>
        <label for="">Body</label>
        <textarea cols="30" rows="10"></textarea>
      </div>
      <div>
        <label for="">Tags</label>
        <input
          type="text"
          v-model="tag"
          @keydown.enter.prevent="handleKeydown"
        />
      </div>
      <button type="submit">Create</button>
    </form> -->

    <header
      class="masthead"
      style="background-image: url('/img/contact-bg.jpg')"
    >
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="page-heading">
              <h1>Create Post</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Main Content-->
    <main class="mb-4">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="my-5">
              <form @submit.prevent="handleSubmit">
                <div class="form-floating">
                  <input
                    class="form-control"
                    id="name"
                    type="text"
                    placeholder="Enter title..."
                    v-model="title"
                  />
                  <label for="title">Title</label>
                </div>
                <div class="form-floating">
                  <textarea
                    class="form-control"
                    id="message"
                    placeholder="Enter your message here..."
                    style="height: 12rem"
                    v-model="body"
                  ></textarea>
                  <label for="body">Body</label>
                </div>
                <div class="form-floating">
                  <input
                    class="form-control"
                    id="name"
                    type="text"
                    placeholder="Enter tag..."
                    v-model="tag"
                    @keydown.enter.prevent="handleKeydown"
                  />
                  <label for="tag">Tag</label>
                </div>
                <div v-for="tag in tags" :key="tag">#{{ tag }}</div>
                <br />
                <button
                  class="btn btn-primary text-uppercase"
                  id="submitButton"
                  type="submit"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import { ref } from "@vue/reactivity"
import { useRouter } from "vue-router"
import { db } from "../../firebase/config.js"

export default {
  setup() {
    const router = useRouter()
    const title = ref("")
    const body = ref("")
    const tag = ref("")
    const tags = ref([])

    const handleKeydown = () => {
      if (!tags.value.includes(tag.value)) {
        tag.value = tag.value.replace(/\s/g, "")
        tags.value.push(tag.value)
      }
      tag.value = ""
    }
    const handleSubmit = async () => {
      const post = {
        title: title.value,
        body: body.value,
        tags: tags.value,
      }
      const res = await db.collection("posts").add(post)

      router.push({ name: "Home" })
    }

    return { title, body, tag, tags, handleKeydown, handleSubmit }
  },
}
</script>
<style></style>
