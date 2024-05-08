import CardDisplay from "./components/CardDisplay";

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
        <CardDisplay data={data} />
      </div>
    </>
  );
}
