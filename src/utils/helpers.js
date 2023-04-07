export function getAllDiffTags(arr) {
  const finalDiffTags = [];
  arr.forEach(({ tags }) => {
    tags.forEach((tagVal) => {
      // console.log('tagVal ===', tagVal);
      // pries idedant patikrinti ar tokio nera
      if (!finalDiffTags.includes(tagVal)) {
        finalDiffTags.push(tagVal);
      }
    });
  });
  // console.log('finalDiffTags ===', finalDiffTags);
  return finalDiffTags;
}
