import { ref } from "vue"
import { useCollection } from "vuefire"
import { db } from "../firebase/config.js"

const getPosts = () => {
  // const postsDb = useCollection(postsConf)
  const posts = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      const res = await db.collection("posts").get()
      posts.value = res.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        }
      })
      // console.log(datas)
    } catch (err) {
      error.value = err.message
    }
  }
  return { posts, error, load }
}
export default getPosts
