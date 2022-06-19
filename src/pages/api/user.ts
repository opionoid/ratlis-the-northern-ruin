/**
 * 認証
 */

import type { NextApiRequest, NextApiResponse } from "next";
import firebaseApp from "../../firebase";
import { getAuth, signInWithRedirect, GoogleAuthProvider, signOut } from "firebase/auth";
import { API_METHODS } from "../../constants/api";

type Data = {
  name: string;
  icon: string;
};

const provider = new GoogleAuthProvider();

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    /**
     * ユーザー情報
     */
    case API_METHODS.GET:
      // TODO: firebaseで定義したAUTHの構造に合わせる
      res.status(200).json({ name: "テストユーザー", icon: "https://picsum.photos/200" });
    /**
     * 認証操作
     */
    case API_METHODS.POST:
      if (req.query["action"] === "login") {
        // ログイン
        const auth = getAuth(firebaseApp);
        await signInWithRedirect(auth, provider).catch(() => res.status(500));
        res.status(200);
      } else if (req.query["action"] === "sign-out") {
        // ログアウト
        const auth = getAuth(firebaseApp);
        await signOut(auth).catch(() => res.status(500));
        res.status(200);
      }
  }
}
