const log = function (title, ...rest) {
  console.log(
    "%c*** " + title + " ***\n",
    "color:tomato;font-size:1.1rem;background:gray",
    ...rest
  );
};
