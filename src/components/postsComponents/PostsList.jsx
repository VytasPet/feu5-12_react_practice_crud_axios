import React from 'react';
import styled from 'styled-components';

function PostsList({ posts }) {
  return (
    <Container>
      {posts.map((post) => (
        <Card key={post.id}>
          <Title>{post.title}</Title>
          <Body>{post.body}</Body>
          <Footer>
            <Author>{post.author}</Author>
            <Tags>{post.tags.join(', ')}</Tags>
            <Date>{post.date}</Date>
          </Footer>
        </Card>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
`;

const Card = styled.div`
  border: 1px solid #e2e8f0;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Body = styled.p`
  font-size: 1rem;
  margin-bottom: 10px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const Author = styled.span`
  font-size: 0.875rem;
  color: #4a5568;
  margin-right: 10px;
`;

const Tags = styled.span`
  font-size: 0.875rem;
  color: #4a5568;
  margin-right: 10px;
`;

const Date = styled.span`
  font-size: 0.875rem;
  color: #4a5568;
`;

export default PostsList;
