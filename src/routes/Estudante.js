const express = require("express");
const Estudante_controller = require("../controllers/Estudante.js");
const router = express.Router();

router.get("/", (req, res) => {
    res.json(Estudante_controller.index());
});

router.get("/:id", (req, res) => {
    res.json(Estudante_controller.show(req.params.id));
});

router.post("/", (req, res) => {
    const code = Estudante_controller.store(req.body);
    res.status(code).json();
});

router.put("/:id", (req, res) => {
    const code = Estudante_controller.update(req.body, req.params.id);
    res.status(code).json();
});

router.delete("/:id", (req, res) => {
    Estudante_controller.destroy(req.params.id);
    res.json();
});

module.exports = router;
