import { defineConfig, loadEnv } from 'vitepress'
import { nav } from './nav'
import { algolia } from './algolia'
import { head } from './head'
import { sidebar } from './sidebar'
import { footer } from './footer'
import MarkdownPreview from 'vite-plugin-markdown-preview'
// https://shiki-zh-docs.vercel.app/packages/vitepress
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'

// https://github.com/vuejs/vitepress/discussions/3533
export default async ({ mode }) => {
  const env = loadEnv(mode || '', process.cwd())

  // https://vitepress.dev/zh/reference/site-config
  return defineConfig({
    outDir: '../dist',
    base: env.VITE_APP_BASE_PATH,

    lang: 'zh-CN',
    title: '唯知笔记',
    titleTemplate: ':title - 唯知笔记',
    description: '唯知笔记',

    head,

    lastUpdated: true,
    cleanUrls: true,
    // 忽略死链查询
    ignoreDeadLinks: true,

    markdown: {
      // 行号显示
      lineNumbers: true,
      image: {
        lazyLoading: true
      },
      codeTransformers: [
        transformerTwoslash() 
      ]
    },

    // https://vitepress.dev/reference/default-theme-config
    themeConfig: {
      logo: '/logo.png',
      // 标题隐藏 需设置为false
      siteTitle: '唯知笔记',

      i18nRouting: false,

      nav,
      sidebar,
      footer,
      // 社交按钮
      socialLinks: [{ icon: 'github', link: 'https://github.com/weizwz/' }],

      // 相关文字和提示修改
      returnToTopLabel: '回到顶部', // 返回顶部文字修改(移动端)
      sidebarMenuLabel: '菜单', // 侧边菜单
      darkModeSwitchLabel: '主题',
      lightModeSwitchTitle: '切换到浅色模式',
      darkModeSwitchTitle: '切换到深色模式',

      // 大纲显示2-3级标题
      outline: {
        level: [2, 3],
        label: '页面导航'
      },

      lastUpdated: {
        text: '最后更新于',
        formatOptions: {
          dateStyle: 'short',
          timeStyle: 'medium'
        }
      },

      // 自定义上下页名
      docFooter: {
        prev: '上一篇',
        next: '下一篇'
      },

      //本地搜索
      search: {
        provider: 'algolia',
        options: algolia
      }
    },
    // 站点地图
    sitemap: {
      hostname: 'https://weizwz.com'
    },
    vite: {
      plugins: [MarkdownPreview()],
      // 解决sass告警的问题 Deprecation Warning: The legacy JS API is deprecated and will be removed in Dart Sass 2.0.0.
      css: {
        preprocessorOptions: {
          scss: {
            api: 'modern'
          }
        }
      }
    }
  })
}
