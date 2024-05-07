export default function Home() {
  return (
    <>
      <div>
        <h1>Hello!</h1>
        <h2>Im also here</h2>
      </div>
      <ExtraHomeSection />
    </>
  );
}

export function ExtraHomeSection() {
  return (
    <>
      <h2>
        I am an extra <s>ainsley</s> home section
      </h2>
    </>
  );
}
