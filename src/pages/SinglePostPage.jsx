import React from 'react';
import Container from '../components/ui/Container';
import { useParams } from 'react-router';
import SinglePost from '../components/postsComponents/SinglePost';
import styled from 'styled-components';
import useGetData from '../hooks/useGetData';

function SinglePostPage() {
  // /posts/:postId - :postId yra url parametras
  const { postId } = useParams();
  console.log('postId ===', postId);

  const hookRez = useGetData(`http://localhost:5000/posts/${postId}`);
  console.log('hookRez ===', hookRez);

  const currentPost = hookRez.data;

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
