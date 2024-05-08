export default async function Home() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/albums/1/photos"
  );
  const data = await response.json();
  console.log(data);

  return (
    <>
      <div className="bg-slate-800 p-1 text-white ">
        <h1 className="">Hello!</h1>
        <h2 className="text-center">Nobody said it'd look good</h2>
      </div>
      <div className="flex flex-col gap-2 p-2 items-center justify-between bg-slate-400">
        {data.map((photo) => {
          return (
            <div
              key={photo.id}
              className="flex items-center justify-between gap-1 w-6/12 border p-1 bg-cyan-600"
            >
              <p className="w-80">{photo.title}</p>
              <img className="w-28" src={`${photo.url}`}></img>
            </div>
          );
        })}
      </div>
    </>
  );
}
