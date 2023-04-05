import React, { useEffect } from 'react';
import Container from '../components/ui/Container';
import { useParams } from 'react-router';
import { useState } from 'react';
import axios from 'axios';
import SinglePost from '../components/postsComponents/SinglePost';
import styled from 'styled-components';

function SinglePostPage() {
  const [currentPost, setCurrentPost] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/posts/${postId}`;
    axios
      .get(url)
      .then((resp) => {
        console.log('resp.data ===', resp.data);
        setCurrentPost(resp.data);
      })
      .catch((err) => {
        console.warn('err ===', err);
      });
  }, []);
  // /posts/:postId - :postId yra url parametras
  const { postId } = useParams();
  console.log('postId ===', postId);

  // parsisiusti post is backen pagal id
  // atvaizduoti singlePost
  return (
    <Container>
      <Title>{currentPost.title}</Title>
      <SinglePost post={currentPost} full />
    </Container>
  );
}

const Title = styled.h1`
  margin: 3rem;
`;

export default SinglePostPage;
