(async () => {
    let response = await fetch('http://localhost:8080/points');
    let points = await response.json();
    console.log(points);
  })();

/*
equally:

async function getPoints() {
    let response = await fetch('http://localhost:8080/points');
  let points = await response.json();
  console.log(points);
}

getPoints();

Note:
await doesn't work at top-level:

// syntax error in top-level code
let response = await fetch('/article/promise-chaining/user.json');
let user = await response.json();

*/