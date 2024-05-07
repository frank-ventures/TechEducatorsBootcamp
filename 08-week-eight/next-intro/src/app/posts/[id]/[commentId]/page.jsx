export default function CommentPage({ params }) {
  console.log(params);
  return (
    <>
      <h3>
        I am the comment ID for ID: {params.id} and Comment ID of{" "}
        {params.commentId}
      </h3>
    </>
  );
}
