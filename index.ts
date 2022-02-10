import express, { Application, Request, Response} from "express";
import dotenv from "dotenv";

dotenv.config();

const port: string | number = process.env.PORT || 3000;

const app: Application = express();

app.post("/", (req: Request, res: Response) => {
    console.log("METHOD IS POST");
    console.log(req);
    res.json({
        "modelSuccess": true,
        "modelScore": 123,
        "modelVersion": 1
    })
});

app.put("/", (req: Request, res: Response) => {
    console.log("METHOD IS PUT");
    console.log(req);
    res.json({
        "modelSuccess": true,
        "modelScore": 123,
        "modelVersion": 1
    })
});

app.patch("/", (req: Request, res: Response) => {
    console.log("METHOD IS PATCH");
    console.log(req);
    res.json({
        "modelSuccess": true,
        "modelScore": 123,
        "modelVersion": 1
    })
});

app.get("/", (req: Request, res: Response) => {
    console.log("METHOD IS GET");
    console.log(req);
    res.json({
        "modelSuccess": true,
        "modelScore": 123,
        "modelVersion": 1
    })
});
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});