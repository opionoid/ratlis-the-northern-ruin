/**
 * 認証
 */

import type { NextApiRequest, NextApiResponse } from "next";
import firebaseApp from "../../firebase";
import { getAuth, signInWithRedirect, GoogleAuthProvider, signOut } from "firebase/auth";

type Data = {
  name: string;
  icon: string;
};

const provider = new GoogleAuthProvider();

// TODO: req, resどっちも受け取ってるけどNext.jsってこんなのだっけ。確認する
export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    /**
     * ユーザー情報
     */
    case 'GET':
      // TODO: firebaseで定義したAUTHの構造に合わせる
      res.status(200).json({ name: "テストユーザー", icon: "https://picsum.photos/200" });
      return;
    /**
     * 認証操作
     */
    case 'POST':
      if (req.query["action"] === "login") {
        // ログイン
        const auth = getAuth(firebaseApp);
        await signInWithRedirect(auth, provider).catch(() => res.status(401));
        res.status(200);
        return;
      } else if (req.query["action"] === "sign-out") {
        // ログアウト
        const auth = getAuth(firebaseApp);
        await signOut(auth).catch(() => res.status(400));
        res.status(200);
        return;
      }
  }
}
