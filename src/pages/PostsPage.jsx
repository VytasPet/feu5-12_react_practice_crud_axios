import React, { useEffect, useState } from 'react';
import Container from '../components/ui/Container';
import PostsList from '../components/postsComponents/PostsList';
import axios from 'axios';

function PostsPage() {
  // parsisiusti postus is back end
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/posts')
      .then((resp) => {
        console.log('resp.data ===', resp.data);
        setAllPosts(resp.data);
      })
      .catch((err) => {
        console.warn('axios.get', err);
      });
  }, []);

  return (
    <Container>
      <h1>PostsPage</h1>
      <p>Welcome to PostsPage</p>
      <PostsList posts={allPosts} />
    </Container>
  );
}

export default PostsPage;
