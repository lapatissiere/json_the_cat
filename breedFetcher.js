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

const fetchBreedDescription = function(breedName, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    function(error, response, body) {
      // error in making request
      if (error) {
        callback(error, null);
        return;
      }

      const data = JSON.parse(body);

      // breed not found
      if (data.length === 0) {
        callback("breed not found", null);
        return;
      }

      // breed is found
      callback(null, data[0].description);
      // let cats = JSON.parse(body);
      // if (breedName === "not found") {
      //   console.log("Breed not found.");
      // }
      // console.group(breedName);
      // console.log(body);
      // let cat = cats[0];
      // console.log(`${cat}`);
    }
  );
};

module.exports = { fetchBreedDescription };
