/**
 * @file next-i18nをSSGオンリーの環境でも機能させるラッパーライブラリ
 * https://github.com/martinkr/next-export-i18n
 * 
 * 方針:
 * - t関数はコンポーネントで呼び出す
 * - propsで渡されるnameなどの値はt関数の引数となるkeyとして利用する
 */

const ja = require("./words/ja.json");

const i18n = {
  translations: {
    ja
  },
  defaultLang: "ja",
  useBrowserDefault: true,
};

module.exports = i18n;
