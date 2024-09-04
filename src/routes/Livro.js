const express = require("express");
const Livro_controller = require("../controllers/Livro.js");
const router = express.Router();

router.get("/", (req, res) => {
    res.json(Livro_controller.index());
});

router.get("/:id", (req, res) => {
    res.json(Livro_controller.show(req.params.id));
});

router.post("/", (req, res) => {
    const code = Livro_controller.store(req.body);
    res.status(code).json();
});

router.put("/:id", (req, res) => {
    const code = Livro_controller.update(req.body, req.params.id);
    res.status(code).json();
});

router.delete("/:id", (req, res) => {
    Livro_controller.destroy(req.params.id);
    res.json();
});

module.exports = router;
