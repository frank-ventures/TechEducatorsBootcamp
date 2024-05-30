export default async function NewName() {
  const response = await fetch("http://localhost:3000/api/sensitive");
  const data = await response.json();
  console.log(data);

  return (
    <>
      <h2>Welcome to the home page</h2>
      {data.map((hacked) => {
        return (
          <div key={hacked.id}>
            <h2>{hacked.username} got hacked</h2>
            <p>Their very special number is {hacked.sensitiveNumber}</p>
          </div>
        );
      })}
      <p>
        <em>
          Disclaimer: This page has no real information. Any similarity between
          numbers on this page and real-life special numbers are purely
          coincedental
        </em>
      </p>
    </>
  );
}
