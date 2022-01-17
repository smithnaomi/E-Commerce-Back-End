const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

// find all tags
// be sure to include its associated Product data
router.get("/", async (req, res) => {});

// find a single tag by its `id`
// be sure to include its associated Product data
router.get("/:id", async (req, res) => {});

// create a new tag
router.post("/", async (req, res) => {});

// update a tag's name by its `id` value
router.put("/:id", async (req, res) => {});

// delete on tag by its `id` value
router.delete("/:id", async (req, res) => {});

module.exports = router;
