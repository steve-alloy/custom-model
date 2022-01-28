import express, { Application, Request, Response} from "express";
const app: Application = express();

app.get("/", (req: Request, res: Response) => {
    res.json({
        "modelSuccess": true,
        "modelScore": 123,
        "modelVersion": 1
    })
});

app.listen(3000, () => {
    console.log("Listen on the port 3000...");
});