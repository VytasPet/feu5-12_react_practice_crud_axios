import React from 'react';
import Container from '../components/ui/Container';
import PostsList from '../components/postsComponents/PostsList';
import useGetData from '../hooks/useGetData';
import Alert from '../components/ui/Alert';
import styled from 'styled-components';

function PostsPage() {
  // 2 sukrti state klaidai errorPosts
  const [allPosts, setAllPosts, error, isLoading] = useGetData(
    'http://localhost:5000/posts',
  );
  console.log('allPosts ===', allPosts);

  // is all posts gauti visus skirtingus tagus
  // ['html', 'css'...]
  const testFilter = ['html', 'css', 'JS'];
  // sugeneruoti radio button elementus su label is testFilter

  // sukurti state activeFilterVal  = 'all'
  if (error) {
    // console.log('error ===', error);
  }

  const networkError = error.code === 'ERR_NETWORK';

  // 4 sukurti klaidos texto kintamaji errorText
  // errorText yra lygus tusciai kabutei, bet jei errorPosts yra lygus ERR_NETWORK
  // tada jis lygus "There was a network error, try agail later"

  return (
    <Container>
      {isLoading && <Alert>Loading...</Alert>}
      {networkError && (
        <Alert type={'danger'}>Tinklo klaida, bandyti veliau</Alert>
      )}
      <Wrap>
        <h1>PostsPage</h1>
        <p>Welcome to PostsPage</p>
      </Wrap>
      <fieldset>
        <legend>Filter by</legend>
        <div>
          <input type="radio" />
          <label htmlFor="">CSS</label>
        </div>
        <div>
          <input type="radio" />
          <label htmlFor="">HTML</label>
        </div>
      </fieldset>
      {/* 5 sukrti ir atvaizduoti styled komponenta jei errorText yra ne tuscia kabute */}
      <PostsList posts={allPosts} />
    </Container>
  );
}

const Wrap = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

export default PostsPage;
