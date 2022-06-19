/**
 * 1回あたりのゲーム（盤面）の進捗
 */
import type { NextApiRequest, NextApiResponse } from "next";
import { CharacterOriginName, CHARACTER_ORIGIN } from "../../atoms/character";
import { API_METHODS } from "../../constants/api";

type Data = {
  origin: CharacterOriginName;
  level: string; // TODO: 定数管理
  point: string; // TODO: これnumberとかのほうがいい？
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case API_METHODS.GET:
      res.status(200).json({ origin: CHARACTER_ORIGIN.prophet.name, level: "grave", point: "0" });
    case API_METHODS.POST:
      res
        .status(200)
        .json({ origin: CHARACTER_ORIGIN.prophet.name, level: req.body["level"], point: req.body["point"] });
  }
}
