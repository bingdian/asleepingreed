# Pensant Hugo Theme

一个专为沉思写作和摄影而设计的 Hugo 主题，基于 Ananke 主题进行深度定制。

[DEMO](https://asleepingreed.com/)

Pensant（法语：思考者）主题专为文艺创作和深度思考而设计，具有以下特色：

- **中文优化**：专门优化的中文字体栈和排版
- **摄影友好**：适合摄影作品展示的布局
- **阅读体验**：优化的文章阅读体验
- **极简设计**：专注内容的简洁设计
- **响应式布局**：完美适配各种设备

## 特性

- 响应式设计
- 多语言支持
- 社交媒体集成
- SEO 优化
- 快速加载
- 中文字体优化
- 摄影作品展示
- 阅读笔记布局

## 安装

### 作为 Git 子模块

```bash
git submodule add https://github.com/bingdian/pensant-theme.git themes/pensant
```

然后在你的 `config.toml` 中添加：

```toml
theme = "pensant"
```

### 作为 Hugo 模块

```toml
[module]
   [[module.imports]]
   path = "github.com/bingdian/pensant-theme"
```

## 配置

在你的站点根目录创建或更新 `config.toml` 文件：

```toml
baseURL = 'https://yoursite.com/'
languageCode = "zh"
defaultContentLanguage = "zh"
title = 'Your Site Title'
theme = 'pensant'

[params]
  site_logo = "images/logo.svg"
  description = "Your site description"
  mainSections = ["posts", "photography", "reading"]
  pensant_socials = [
    {name = "Github", url = "https://github.com/yourusername"},
  ]
  background_color_class = "bg-white"
  body_classes = "bg-white"

[Menus]
  main = [
      {Name = "首页", URL = "/", Weight = 1},
      {Name = "摄影", URL = "/photography/", Weight = 2},
      {Name = "阅读", URL = "/reading/", Weight = 3},
      {Name = "关于", URL = "/about/", Weight = 4}
  ]
```

## 社交媒体配置

Pensant 主题支持多种社交媒体平台。通过 `pensant_socials` 参数配置：

### 基本配置

```toml
[params]
  pensant_socials = [
    {name = "github", url = "https://github.com/yourusername"},
    {name = "twitter", url = "https://twitter.com/yourusername"},
  ]
```

### 高级配置

```toml
[params]
  pensant_socials = [
    {name = "github", url = "https://github.com/yourusername", label = "GitHub"},
    {name = "custom", url = "https://yoursite.com", label = "My Site", color = "#ff6b6b"},
  ]
```

### 支持的社交平台

- GitHub
- Twitter
- Facebook
- Instagram
- LinkedIn
- YouTube
- RSS
- 等等...

### 自定义图标

你可以通过在 `/assets/pensant/socials/` 目录下添加 SVG 文件来自定义社交媒体图标。例如，添加 `github.svg` 来自定义 GitHub 图标。

## 自定义样式

### CSS 自定义

要添加自定义 CSS：

1. 在项目根目录创建 `assets/pensant/css` 目录
2. 在其中添加你的 CSS 文件
3. 在 `config.toml` 中注册：

```toml
[params]
  custom_css = ["custom.css", "photography.css"]
```

### 字体自定义

Pensant 主题已针对中文阅读进行优化，使用了专门的中文字体栈。如需自定义，可在自定义 CSS 中覆盖：

```css
body {
  font-family: "Your Custom Font", "PingFang SC", "Hiragino Sans GB", sans-serif;
}
```

## 内容组织

### 摄影作品

在 `content/photography/` 目录下创建摄影作品：

```markdown
---
title: "作品标题"
date: 2024-01-01
featured_image: "/images/photo.jpg"
tags: ["摄影", "风景"]
---

作品描述...
```

### 阅读笔记

在 `content/reading/` 目录下创建阅读笔记：

```markdown
---
title: "书籍标题"
date: 2024-01-01
featured_image: "/images/book-cover.jpg"
tags: ["读书笔记", "文学"]
---

读书心得...
```

## 开发

如果你想参与开发或自定义主题：

```bash
# 克隆仓库
git clone https://github.com/bingdian/pensant-theme.git

# 安装依赖
npm install

# 开发模式
npm start
```

## 贡献

欢迎提交 Issue 和 Pull Request！

## 许可证

MIT License

## 致谢

本主题基于 [Ananke](https://github.com/theNewDynamic/gohugo-theme-ananke) 主题开发，感谢原作者的贡献。
