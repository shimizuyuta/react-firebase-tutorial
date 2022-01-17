import { collection, getDocs,doc, deleteDoc } from 'firebase/firestore'
import React,{useEffect,useState} from 'react'
import { db ,auth} from '../firebase-config'

const Home = ({isAuth}) => {
  const [postList, setPostList] = useState([])
  const postsCollectionRef = collection(db,'posts')


 const deletePost = async(id) =>{
   const postDoc = doc(db,'posts',id)
   await deleteDoc(postDoc)
   getPosts()
 }
 const getPosts = async()=>{
  const data = await getDocs(postsCollectionRef)
  setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
};

 useEffect(() => {
  getPosts()
},[])

  return (
    <div className="homePage">
    {postList.map((post,index) => {
      return (
        <div className="post" key={index}>
          <div className="postHeader">
            <div className="title">
              <h1> {post.title}</h1>
            </div>
            <div className="deletePost">
              {isAuth && post.author.id === auth.currentUser.uid && (
                <button
                  onClick={() => {
                    deletePost(post.id)
                  }}
                >
                  {" "}
                  &#128465;
                </button>
              )}
            </div>
          </div>

          <div className="postTextContainer"> {post.postText} </div>
          <h3>@{post.author.name}</h3>
        </div>
      );
    })}
  </div>
  )
}

export default Home
