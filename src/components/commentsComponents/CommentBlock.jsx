import React from 'react';
import CommentForm from '../forms/CommentForm';
import CommentsList from './CommentsList';
import useGetData from '../../hooks/useGetData';

function CommentBlock({ postId }) {
  const [currentComments, setComments, commentErr, isLoading] = useGetData(
    'http://localhost:5000/comments/' + postId,
  );
  console.log('currentComments ===', currentComments);
  // sukurti state arba pasinaudoti musu custom hook
  // gauti visus komentarus is http://localhost:5000/comments
  // paduoti i Comment list kad jame atvaizduotume sarasa

  // fn addNewComment()
  // siusti su axios i back end
  // setComments() kad atvaizduoti nauja komentara

  return (
    <div>
      <CommentForm />
      <CommentsList items={currentComments} />
    </div>
  );
}

export default CommentBlock;
