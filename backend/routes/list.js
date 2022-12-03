import express from "express"
import { getlist } from "../models/index.js";

const listRouter = express.Router();

listRouter.get("/", async function (req, res) {
    const todo = await getlist();

    res.status(200).json({
        success: true,
        payload: todo,
    });
});

export default listRouter;