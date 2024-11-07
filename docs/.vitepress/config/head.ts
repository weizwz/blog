import type { HeadConfig } from 'vitepress'
import { APP_BASE_PATH } from './env'

export const head: HeadConfig[] = [
  ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ['meta', { name: 'mobile-web-app-capable', content: 'yes' }],
  ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
  ['meta', { name: 'msapplication-TileImage', content: APP_BASE_PATH + 'favicon.ico' }],
  // ['meta', { name: 'baidu-site-verification', content: 'code-baidusitemap' }],
  ['link', { rel: 'icon', href: APP_BASE_PATH + 'favicon.ico' }],
  ['link', { rel: 'apple-touch-icon', href: APP_BASE_PATH + 'favicon.ico' }],
  ['link', { rel: 'mask-icon', href: APP_BASE_PATH + 'favicon.ico', color: '#1890ff' }],
  ['link', { rel: 'manifest', href: APP_BASE_PATH + 'manifest.webmanifest' }]
]