import { push } from "firebase/database"
import { ref } from "vue"
// import { useCollection } from "vuefire"
// import { postsConf } from "../firebase/config.js"
import { db } from "../firebase/config"

const getPost = (id) => {
  const post = ref(null)
  const error = ref(null)
  // const postsDb = useCollection(postsConf)

  const load = async () => {
    try {
      const res = await db.collection("posts").get(id)
      post.value = res.docs.map((doc) => {
        return {
          ...doc.data(),
        }
      })
      post.value.forEach((i) => {
        post.value = i
      })
    } catch (err) {
      error.value = err.message
    }
  }
  return { post, error, load }
}
export default getPost
