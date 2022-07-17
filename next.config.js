/** @type {import('next').NextConfig} */

// publicの静的ファイルのimportパス解消
const pathPrefix = process.env.NEXT_PUBLIC_PATH_PREFIX || "";

// 多言語
const { i18n } = require("./src/i18n");

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: pathPrefix,
  basePath: pathPrefix,
  trailingSlash: true,
  i18n,
  eslint: {
    dirs: [
      "pages/",
      "components/"
    ]
  }
};

module.exports = nextConfig;
