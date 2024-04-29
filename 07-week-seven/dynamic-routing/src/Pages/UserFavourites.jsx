import { useParams } from "react-router-dom";

export default function UserFavourites() {
  const { username } = useParams();

  return (
    <>
      <h3>Welcome to your favourites page, {username}.</h3>
      <p>Your favourites would be displayed here.</p>
    </>
  );
}
