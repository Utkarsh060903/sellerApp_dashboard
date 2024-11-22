const generateRandomData = () => {

  const randomFloat = (min, max) =>
    (Math.random() * (max - min) + min).toFixed(2);
  const randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const countries = [
    "USA",
    "Canada",
    "India",
    "Germany",
    "Australia",
    "China",
    "Brazil",
    "UK",
    "France",
    "Japan",
  ];

  const countryData = countries.map((country) => ({
    country,
    totalIncome: parseFloat(randomFloat(20000, 60000)),
    profit: parseFloat(randomFloat(5000, 20000)),
    totalViews: randomInt(20000, 100000),
    conversionRate: parseFloat(randomFloat(2, 10)),
    salesByRegion: {
      Asia: randomInt(1000, 5000),
      Europe: randomInt(1000, 5000),
      Pacific: randomInt(1000, 5000),
      MiddleEast: randomInt(1000, 5000),
      Africa: randomInt(1000, 5000),
      Americas: randomInt(1000, 5000),
    },
  }));

  return countryData;
};

const data = generateRandomData();
console.log(JSON.stringify(data, null, 2));

export default generateRandomData;
