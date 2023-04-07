import React from 'react';
import Container from '../components/ui/Container';
import PostsList from '../components/postsComponents/PostsList';
import useGetData from '../hooks/useGetData';
import Alert from '../components/ui/Alert';
import styled from 'styled-components';
import { getAllDiffTags } from '../utils/helpers';
import { useState } from 'react';

function PostsPage() {
  const [activeFilterVal, setActiveFilterVal] = useState('all');
  // 2 sukrti state klaidai errorPosts
  const [allPosts, setAllPosts, error, isLoading] = useGetData(
    'http://localhost:5000/posts',
  );
  console.log('allPosts ===', allPosts);

  let testFilter = ['all', 'html', 'css', 'JS'];
  testFilter = getAllDiffTags(allPosts);
  testFilter.unshift('all');
  // sugeneruoti radio button elementus su label is testFilter

  // sukurti state activeFilterVal  = 'all'
  if (error) {
    // console.log('error ===', error);
  }

  const networkError = error.code === 'ERR_NETWORK';

  function handleTagFilterChange(e) {
    // console.log('handleTagFilterChange e.target.value ===', e.target.value);
    setActiveFilterVal(e.target.value);
  }

  // atrinkimo salyga?
  // kai kas su taps su kuo atrinksim elementa?
  // activeFilterVal => CSS
  // kai viename is all posts tagu masyve bus activeFilterVal reiksme, mes atrinkim ta reikme

  const filteredPosts = allPosts.filter(({ tags }) =>
    tags.includes(activeFilterVal),
  );

  const filteredOrAll = activeFilterVal === 'all' ? allPosts : filteredPosts;

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
        <Flex>
          {testFilter.map((tag) => (
            <div key={tag}>
              <input
                onChange={handleTagFilterChange}
                type="radio"
                name="tagFilter"
                checked={activeFilterVal === tag}
                id={tag}
                value={tag}
              />
              <label htmlFor={tag}>{tag}</label>
            </div>
          ))}
        </Flex>
      </fieldset>
      {/* 5 sukrti ir atvaizduoti styled komponenta jei errorText yra ne tuscia kabute */}
      <PostsList posts={filteredOrAll} />
    </Container>
  );
}

const Wrap = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
`;
const Flex = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

export default PostsPage;
