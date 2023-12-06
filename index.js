const express = require("express");

const app = express();
const port = 3005;

let products = [
  {
    id: 1,
    name: "iphone",
    price: 1000000,
  },
  {
    id: 2,
    name: "samsung",
    price: 2000000,
  },
  {
    id: 3,
    name: "huawei",
    price: 3000000,
  },
  {
    id: 4,
    name: "nokia",
    price: 4000000,
  },
];

app.get("/", (req, res) => {
  res.send("Welcome to my first server");
});
app.get("/products", (req, res) => {
  res.send({
    products: products,
  });
});
app.get("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const product = products.find((product) => product.id === id);
  res.send({
    product: product,
  });
});
app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
