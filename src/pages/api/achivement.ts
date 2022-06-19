/**
 * アチーブメント
 */
import type { NextApiRequest, NextApiResponse } from "next";
import { CharacterOriginName } from "../../atoms/character";
import { API_METHODS } from "../../constants/api";

type OriginData = {
  clearCount: number;
  difficulty: string; // TODO: 定数
  allUnlockedCard: boolean;
  allUpgradedCard: boolean;
};

type Data = { [T in CharacterOriginName]: OriginData };

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case API_METHODS.GET:
      res.status(200).json({
        prophet: {
          clearCount: 0,
          difficulty: "normal",
          allUnlockedCard: false,
          allUpgradedCard: false,
        },
        assassin: {
          clearCount: 0,
          difficulty: "normal",
          allUnlockedCard: false,
          allUpgradedCard: false,
        },
      });
    case API_METHODS.POST:
      res.status(200).json({
        prophet: {
          clearCount: 0,
          difficulty: "normal",
          allUnlockedCard: false,
          allUpgradedCard: false,
        },
        assassin: {
          clearCount: 0,
          difficulty: "normal",
          allUnlockedCard: false,
          allUpgradedCard: false,
        },
      });
  }
}
