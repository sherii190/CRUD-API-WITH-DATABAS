// import required essentials
const router = require("express").Router();
let Item = require("../models/item.model");

// !Create
router.route("/add").post((req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const price = Number(req.body.price);
    const newItem = new Item({
        name,
        description,
        price,
    });
    newItem
    .save()
        .then(() => res.json("Item added!"))
        .catch((err) => res.status(400).json("Error: " + err));
});

// !Read All
router.route("/").get((req, res) => {
  Item.find()
      .then((items) => res.json(items))
      .catch((err) => res.status(400).json("Error: " + err));
  }
);

// !Read One
router.route("/:id").get((req, res) => {
  Item.findById(req.params.id)
      .then((item) => res.json(item))
      .catch((err) => res.status(400).json("Error: " + err));
});

// !Update
router.route("/:id").put((req, res) => {
  Item.findByIdAndUpdate(req.params.id)
      .then((item) => {
          item.name = req.body.name;
          item.description = req.body.description;
          item.price = Number(req.body.price);
          item
              .save()
              .then(() => res.json("Item updated!"))
              .catch((err) => res.status(400).json("Error: " + err));
      })
      .catch((err) => res.status(400).json("Error: " + err));
});