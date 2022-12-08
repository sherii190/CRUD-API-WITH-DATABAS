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