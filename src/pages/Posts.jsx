import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const Posts = () => {
  const trigger = useRef(null);
  const observer = useRef(null);
  const [loadData, setLoadData] = useState(true)
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 10;
  const pageCount = 100 / limit;
  const pageChange = (page) => {
    console.log(page);
    setPage(page.selected + 1);
  };

  const fetchPosts = async () => {
    const value = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
      {
        params: {
          _limit: limit,
          _page: page,
        },
      }
    );
    console.log(value.data);
    setPosts([...posts,...value.data]);
    setLoadData(false)
  };

  const removePost = (id) => {
    console.log(id);
    const confirm = window.confirm("Реально удалить?");
    if (confirm) setPosts(posts.filter((post) => post.id !== id));
  };
useEffect(() =>{
  if (!loadData) return;
  if (observer.current) observer.current.disconnect()
const callback = function(entries){
  if (entries.isIntersecting){
    console.log('worked')
  }

};
observer.current = new IntersectionObserver(callback)
 observer.current.observe(trigger.current)
},[loadData])


  useEffect(() => {
    fetchPosts();
  }, [page]);

  console.log(posts);
  
  return (
    <div>
      {posts &&
        posts.map((post) => (
          <>
            <div className="container">
              <div class="row">
                <div class="col s12 m6">
                  <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                      <span class="card-title">
                        {" "}
                        <h5>{post.title}</h5>
                      </span>
                      <p>
                        {" "}
                        <div>{post.body}</div>
                      </p>
                    </div>
                    <div class="card-action">
                      <a href="#">Read</a>
                      <a onClick={() => removePost(post.id)}>Delete</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
            <div ref={trigger} className="red accent-4">I'am Danila </div>
    </div>
  );
};

export default Posts;
