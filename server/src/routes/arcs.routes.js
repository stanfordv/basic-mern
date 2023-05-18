// arcs.routes.js
import express from "express";

import arcs from "../models/arcs.model.js";

const router = express.Router();

router.post("/", (req, res) => {
  const newArc = new arcs({
    node: req.body.node,
    body: req.body.body,
    size: req.body.size,
  });

  newArc
    .save()
    .then(() => res.json("Arc added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/", (req, res) => {
  arcs
    .find()
    .then((arcs) => res.json(arcs))
    .catch((err) => res.status(400).json("Error: " + err));
});

export default router;
