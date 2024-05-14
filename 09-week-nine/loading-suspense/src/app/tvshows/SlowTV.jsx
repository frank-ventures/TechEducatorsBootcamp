async function delay(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

export async function SlowTV() {
  // slow because of a delay, or fetching lots of data over the network or from a database
  await delay(5000);

  return (
    <>
      <h1>PSYCE! WE HAVEN&apos;T GOT ANY!</h1>
    </>
  );
}
