import { useParams } from "react-router-dom";

export default function UserPosts() {
  const { username } = useParams();

  return (
    <>
      <h3>Welcome to your posts page, {username}.</h3>
      <p>Your submitted posts would be displayed here.</p>
    </>
  );
}
