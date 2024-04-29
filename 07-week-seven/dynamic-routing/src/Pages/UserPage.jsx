import { useParams, Link, Outlet, useSearchParams } from "react-router-dom";

export default function UserPage() {
  const { username } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get("sort");

  const handleSearch = (event) => {
    setSearchParams({ sort: event.target.value });
  };

  return (
    <>
      <h2>Welcome to your user page, {username}.</h2>
      <p>Your name is {username}.</p>

      <form>
        <label>
          Sort by:
          <select
            value={searchParams.get("sort") || ""}
            onChange={handleSearch}
          >
            <option value="">Select...</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </label>
      </form>
      <p>Your sort type is: {sort}</p>

      <nav>
        <Link to="">Profile home</Link>
        <Link to="posts">Posts</Link>
        <Link to="favourites">Posts</Link>
      </nav>
      <Outlet />
    </>
  );
}
