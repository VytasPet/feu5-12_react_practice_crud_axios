import React from 'react';
import styled from 'styled-components';
import SinglePost from './SinglePost';
import PropTypes from 'prop-types';
function PostsList({ posts, onDeletePost }) {
  return (
    <Container>
      {posts.map((post) => (
        <SinglePost key={post.id} post={post} onDeletePost={onDeletePost} />
      ))}
    </Container>
  );
}

PostsList.propTypes = {
  posts: PropTypes.array,
  onDeletePost: PropTypes.func,
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
`;

export default PostsList;
