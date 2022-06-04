import getConfig from 'next/config'

/**
 * public以下のURLを正しい形式にフォーマットして返却します
 * ref: https://maku.blog/p/xjjbwes/
 */
export function url(filename: string): string {
  const { publicRuntimeConfig } = getConfig();
  return publicRuntimeConfig['pathPrefix'] + filename
}