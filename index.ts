import express, { Application, Request, Response} from "express";
import dotenv from "dotenv";

dotenv.config();

const port: string | number = process.env.PORT || 3000;

const app: Application = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/", (req: Request, res: Response) => {
    const attributeName = req.body["Steve G. Test Account Meta"].attributeName;
    const sentilinkScore = parseInt(attributeName.sentilink.attributeValue);
    const socureScore = parseInt(attributeName.socure_risk_score.attributeValue);

    const modelScore = sentilinkScore + socureScore;
    console.log("Score is", modelScore);
    res.json({
        modelScore,
        "modelSuccess": true,
        "modelVersion": 1
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});