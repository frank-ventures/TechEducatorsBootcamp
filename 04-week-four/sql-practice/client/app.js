const gamesWrapper = document.getElementById("gamesWrapper");

async function testJoined() {
  const response = await fetch(
    "https://render-server-demo-01.onrender.com/gamesjoined"
  );
  const gamesInfo = await response.json();
  console.log(gamesInfo);
  gamesInfo.forEach((element) => {
    const h2 = document.createElement("h2");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");

    h2.textContent = element.the_game_name;
    p1.textContent = element.game_year;
    p2.textContent = element.platform;

    gamesWrapper.appendChild(h2);
    gamesWrapper.appendChild(p1);
    gamesWrapper.appendChild(p2);
  });
}

testJoined();

// async function populatePage() {
//   const response = await fetch(
//     "https://render-server-demo-01.onrender.com/gamesjoined"
//   );
//   const gamesInfo = await response.json();
//   console.log(gamesInfo);

//   gamesInfo.forEach(element => {
//     const h2 = document.createElement("h2");
//     const p1 = document.createElement("p");
//     const p2 = document.createElement("p");

//     h2.textContent = element.name;
//     p1.textContent = element.year;
//     p2.textContent = element.platform_id;
//   });
// }

// populatePage();
