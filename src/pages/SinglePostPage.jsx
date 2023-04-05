import React from 'react';
import Container from '../components/ui/Container';
import { useParams } from 'react-router';

function SinglePostPage() {
  // /posts/:postId - :postId yra url parametras
  const { postId } = useParams();
  console.log('postId ===', postId);
  // pasiimti id is postId
  // parsisiusti post is backen pagal id
  // atvaizduoti singlePost
  return (
    <Container>
      <h1>SinglePost Page</h1>
      <p>Welcome to SinglePost Page</p>
    </Container>
  );
}

export default SinglePostPage;
