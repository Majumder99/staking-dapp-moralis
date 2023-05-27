import express from "express";
import Moralis from "moralis";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
const port = 5001;
dotenv.config();

app.use(cors());
app.use(express.json());

const MORALIS_API_KEY = process.env.MORALIS_API_KEY;

app.get("/getwalletbalance", async (req, res) => {
  try {
    const { query } = req;
    const response = await Moralis.EvmApi.balance.getNativeBalance({
      chain: "0xaa36a7",
      address: query.address,
    });
    console.log(response);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error });
  }
});

Moralis.start({
  apiKey: MORALIS_API_KEY,
}).then(() => {
  app.listen(port, () => {
    console.log("Listening for API callse");
  });
});
