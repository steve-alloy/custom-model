import express, { Application, Request, Response} from "express";
import dotenv from "dotenv";

dotenv.config();

const port: string | number = process.env.PORT || 3000;

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
    res.json({
        "modelSuccess": true,
        "modelScore": "ABC",
        "modelVersion": 1
    })
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});