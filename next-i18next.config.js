const path = require('path')

/**
 * @type {import('next-i18next').UserConfig}
 */
module.exports = {
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en'],
  },
  defaultNS: 'translations',
  keySeparator: '.',
  // reloadOnPrerender: true,
}
