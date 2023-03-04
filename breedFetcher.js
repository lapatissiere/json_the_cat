const request = require("request");

// request(
//   "https://api.thecatapi.com/v1/breeds/search?q=sib",
//   (error, response, body) => {
//     if (error) {
//       console.log(error);
//     }
//     let typeOfBody = JSON.parse(body);
//     //console.log(typeOfBody);
//     //console.log(typeof body);

//     const data = JSON.parse(body);
//     //console.log(data);
//     //console.log(typeof data);
//     const item_name = data[0].weight;
//     console.log(item_name);
//   }
// );

const breed = process.argv[2];
request(
  `https://api.thecatapi.com/v1/breeds/search?q=${breed}`,
  function(error, response, body) {
    let cats = JSON.parse(body);
    if (breed === "not found") {
      console.log("Breed not found.");
    }
    console.group(breed);
    console.log(body);
    let cat = cats[0];
    console.log(`${cat}`);
  }
);
