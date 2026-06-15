import express from "express";
import {getBooksCollection} from "../models/Book.js";

const router = express.Router();

router.get("/:listID", async (req, res) => {
    try {
        const books = await getBooksCollection()
        .find({ listId: req.params.listId})
        .toArray();
        res.json(books);
    } catch (err) {
        res.status(500).json({error: err.essage});
    }
});

export default router;