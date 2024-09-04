const express = require("express");
const Aluguel_controller = require("../controllers/Aluguel.js");
const router = express.Router();

router.get("/", (req, res) => {
    res.json(Aluguel_controller.index());
});

router.get("/:id", (req, res) => {
    res.json(Aluguel_controller.show(req.params.id));
});

router.post("/", (req, res) => {
    const code = Aluguel_controller.store(req.body);
    res.status(code).json();
});

router.put("/:id", (req, res) => {
    const code = Aluguel_controller.update(req.body, req.params.id);
    res.status(code).json();
});

router.delete("/:id", (req, res) => {
    Aluguel_controller.destroy(req.params.id);
    res.json();
});

module.exports = router;
