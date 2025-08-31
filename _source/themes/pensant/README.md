# Pensant Hugo Theme

一个专为沉思写作与摄影展示打造的 Hugo 主题，基于 Ananke 深度改造
![screenshot](images/screenshot.png)

示例站点：<https://asleepingreed.com/>
## 主题特性

- 中文优化：字体栈、段落节奏、标题间距
- 摄影友好：支持封面、摘要图片与宽屏布局
- 阅读体验：改良行高、代码块与引用样式
- 极简设计：去除冗余装饰，突出内容
- 自适应：移动端排版独立优化
- 自定义社交：`pensant_socials` 支持扩展及自定义图标
- 可定制样式：Hugo Pipes 合并与指纹
## 快速开始

```bash
git submodule add https://github.com/bingdian/pensant-theme.git themes/pensant
```

`config.toml`：

```toml
theme = 'pensant'
```
示例基础配置：

```toml
baseURL = 'https://yoursite.com/'
```

## 社交链接 (pensant_socials)

支持自定义 label / color / rel：

```toml
[params]
  pensant_socials = [
    # Pensant Hugo Theme

    一个为「安静写作 · 深度阅读 · 摄影呈现」而优化的 Hugo 主题。

    专注：可读性 / 中文排版 / 图片叙事 / 极简结构。

    ![screenshot](images/screenshot.png)

    演示：<https://asleepingreed.com/>

    ---
    ## 功能概览

    - ✅ 中文排版优化（字体栈、段落节奏、标题层级间距）
    - ✅ 摄影展示支持（封面 / 摘要缩略图 / 宽屏布局）
    - ✅ 阅读体验增强（行高、代码、引用、链接样式）
    - ✅ 响应式与移动端细化样式
    - ✅ 自定义社交：`pensant_socials`（标签 / 颜色 / rel / 自定义 SVG）
    - ✅ Hugo Pipes 构建与指纹
    - ✅ 可选目录（`toc: true`）
    - ✅ 可隐藏封面文字（`omit_header_text: true`）
    - ✅ 文章私有（`private: true` 禁索引）

    ---
    ## 安装

    Git 子模块：
    ```bash
    git submodule add https://github.com/bingdian/pensant-theme.git themes/pensant
    ```

    Hugo Module：
    ```toml
    [module]
      [[module.imports]]
      path = "github.com/bingdian/pensant-theme"
    ```

    启用：
    ```toml
hugo server -D
    ```

    ---
    ## 基础配置示例 (`config.toml`)
    ```toml
HUGO_ENV=production hugo --gc --minify
```

（使用构建工具）
```bash
npm install
npm start
```
## License

MIT

## 致谢
感谢 Ananke 原始主题提供的结构基础，并在其之上加入中文排版/摄影展示/阅读体验优化。
# Pensant - A Thoughtful Hugo Theme

一个专为沉思写作和摄影而设计的 Hugo 主题，基于 Ananke 主题进行深度定制。

![screenshot](https://raw.githubusercontent.com/bingdian/pensant-theme/main/images/screenshot.png)

[DEMO](https://gohugo-ananke-theme-demo.netlify.com/)

Features

- Responsive

    ---
    ## 社交配置 (`pensant_socials`)
    ```toml
# Pensant Hugo Theme

一个专为沉思写作与摄影展示打造的 Hugo 主题，基于 Ananke 深度改造，强化中文排版与阅读体验。

![screenshot](images/screenshot.png)

    自定义图标：放置 SVG 于 `assets/pensant/socials/<name>.svg`

    ---
    ## Front Matter 选项
    ```yaml
示例站点：https://asleepingreed.com/

## 主题特性
- 中文优化：字体栈、段落节奏、标题间距
- 摄影友好：支持封面、摘要图片与宽屏布局
- 阅读体验：改良行高、代码块与引用样式
- 极简设计：去除冗余装饰，突出内容

    图片优先推荐 Page Bundle 结构：
    ```
    content/photography/cats/index.md
    content/photography/cats/cover.jpg
    ```

    未显式 `featured_image` 时尝试匹配文件名含 cover/feature 的图片。

    ---
    ## 自定义样式
    新增文件：
    ```
    assets/pensant/css/custom.css
    ```
    注册：
    ```toml
- 自适应：移动端排版独立优化
- 自定义社交：`pensant_socials` 支持扩展及自定义图标
- 可定制样式：Hugo Pipes 合并与指纹
    所有文件按顺序合并进最终主 CSS。

    如需覆盖内置片段，可创建同路径同文件名。

    ---
    ## 代码与排版风格

    | 元素 | 设计 |
    |------|------|
    | 段落 | 行高 1.65~1.7，增强呼吸感 |
    | 代码块 | 浅灰背景 / 圆角 / 横向滚动 |
    | 行内代码 | 轻背景 + 圆角标记 |
    | 引用 | 左侧竖线 + 次级色 / 斜体 |
    | 标题 | 紧凑层级 + 首标题去上边距 |

    ---
    ## 开发与构建
    本地预览：
    ```bash
    hugo server -D
    ```
    生产构建：
    ```bash
    HUGO_ENV=production hugo --gc --minify
    ```
    （可选）前端资源：
    ```bash
    npm install
    npm start
    ```

    ---
    ## 目录 (TOC)
    在文章 Front Matter 设置：
    ```yaml

    ```

    ---
    ## 文章私有 / 禁止索引
    ```yaml
## 快速开始
```bash
    模板中会加 `robots` noindex。

    ---
    ## 常见问题

    Q: 仍看到旧的样式？
    → 清除浏览器缓存或删除 `resources/_gen` 后重新构建。

    Q: 社交图标未显示？
    → 确认放置路径：`assets/pensant/socials/name.svg` 且大小适中 (建议 24–32px viewBox)。

    Q: 想修改导航字体？
    → 覆盖自定义 CSS 中 `.navigation-font`。

    ---
    ## 升级策略
    拉取更新后建议：
    ```bash
git submodule add https://github.com/bingdian/pensant-theme.git themes/pensant
    ```
    并检查自定义覆盖文件是否需同步。

    ---
    ## License
    MIT

    ---
    ## 致谢
    基于 Ananke 主题演化，保留其结构思想并增强中文排版与摄影/阅读场景体验。
```
`config.toml`：
```toml
  [services.disqus]
    shortname = 'YOURSHORTNAME'

示例基础配置：
```toml
  ```

- COMMENTO:

  ```toml
  [params]
    commentoEnable = true
  ```

### Change the hero background

For any page or post you can add a featured image by including the local path in front matter (see content in the `exampleSite/content/_readme.md` file for examples): `featured_image: '/images/gohugo-default-sample-hero-image.jpg'`

#### Featured image as Page Resources
If user is using [Page Resources](https://gohugo.io/content-management/page-resources/), the theme will try and match the `featured_image` from with a page resource of type `image` and use its relative permalink. If no `featured_image` is set, the theme will look for a Page Resource of type `image` whose filepath incudes either `cover` or `feature`

#### Other hero settings
If you would like to hide the header text on the featured image on a page, set `omit_header_text` to `true`. See `exampleSite/content/contact.md` for an example.

You don't need an image though. The default background color is black, but you can change the color, by changing the default color class in the config.toml file. Choose a background color from any on the [Tachyons](https://tachyons.io/docs/themes/skins/) library site, and preface it with "bg-"

example: `background_color_class = "bg-blue"` or `background_color_class = "bg-gray"`




## 社交链接 (pensant_socials)
支持自定义 label / color / rel：
```toml
### Activate the contact form

This theme includes a shortcode for a contact form that you can add to any page (there is an example on the contact page in the exampleSite folder). One option is to use [formspree.io](//formspree.io/) as proxy to send the actual email. Each month, visitors can send you up to one thousand emails without incurring extra charges. Visit the Formspree site to get the "action" link and add it to your shortcode like this:

```
{{< form-contact action="https://formspree.io/your@email.com" >}}
自定义图标：放置 SVG 至 `assets/pensant/socials/<name>.svg`。

## Front Matter 常用参数
```yaml
```

### Read more link

The homepage and other areas of the site use a `read more` link on the element. You can customize the copy of this link to make it more descriptive with the parameter `read_more_copy` available as a site and front matter parameter.

## 阅读与排版
- 段落行高：1.65~1.7
- 代码块：圆角 + 浅灰背景 + 可横向滚动
- 引用块：加粗左边框 + 次级文字色

## 自定义样式
添加自定义文件：
```
assets/pensant/css/custom.css
```
在配置：
```toml

```
# config.yaml
文件会被合并进主 CSS。

## 图片与摄影内容
推荐使用 Page Bundle：
```
content/photography/cats/index.md
content/photography/cats/cover.jpg
```
未显式设置 `featured_image` 时自动尝试匹配含 cover/feature 的图片。

## 迁移自 Ananke 提示
- `ananke_socials` 重命名为 `pensant_socials`
- 资源路径 `assets/ananke/` -> `assets/pensant/`
- 类名 `.ananke-socials` -> `.pensant-socials`

## 开发任务
```bash
hugo server -D
HUGO_ENV=production hugo --gc --minify
```
（使用构建工具）
```bash
npm install
npm start
```

## License
MIT

## 致谢
感谢 Ananke 原始主题提供的结构基础，并在其之上加入中文排版/摄影展示/阅读体验优化。
# Globally for all pages:
params:
  read_more_copy: Read more about this entry
# Just for french
languages:
  fr:
    name: Français
    weight: 2
    params:
       read_more_copy: En savoir plus à ce sujet
```
Using front matter and cascade, this can be customized for a whole section, or just for one page.

```
# content/posts/tower-bridge-london.md
  title: The Tower Bridge of London
  read_more_copy: Read more about this bridge
```

### Social Follow + Share

The theme automatically adds "Follow" link icons to the header and footer and "Share" link icons to pages unless `disable_share` parameter is set to true either on the site level (site params) or page level (front matter). Each built-in services sports a label, an icon and a color.

In order to register a service to be used, user must add an `ananke_socials` parameter to its project configuration file and list them through it in the desired order. Each entry must bear a
- name*: It matches the built-in service reference (Ex: twitter, github)
- url*: The url of the handle's profile on the service (Ex: https://twitter.com/theNewDynamic, https://github.com/
theNewDynamic)
- rel: (default: `noopener`) Controls the `rel` attribute of the "follow" link. Useful for Mastodon verification which requires a `rel="me"` on the link.
```yaml
params:
  ananke_socials:
  - name: twitter
    url: https://twitter.com/theNewDynamic
  - name: github
    url: https://github.com/theNewDynamic
  - name: mastodon
    url: https://social.example.com/@username
    rel: me noopener
```

If user needs to overwrite default `color` and `label` of the service, they simply need to append the following to the entry:
- label: The displayed name of the service to be used to popuplate `[title]` attributes and read-only. (Ex: Twitter, GitHub)
- color: Used for styling purposes. (Ex: '#1da1f2', '#6cc644')

```yaml
params:
  ananke_socials:
  - name: twitter
    url: https://twitter.com/theNewDynamic
    label: TND Twitter
  - name: github
    url: https://github.com/theNewDynamic
    label: TND GitHub Account
    color: '#ff6800'
```

#### Limit Follow or Share

If a user needs to control Share and Follow of a service, for example enabling "Share on Facebook" without having a Facebook Page to "follow", they can set `follow: false` one the registered service.

```yaml
params:
  ananke_socials:
  - name: facebook
    label: Facebook
    follow: false
  - name: twitter
    url: https://twitter.com/theNewDynamic
    label: TND Twitter
```

#### Social Icons Customization

On top of easily customizing the built-in services' label and color, user can overwrite their icon by adding an svg file at `/assets/ananke/socials` with a filename matching the service's name.
For example, in order to use your own GitHub icon, simply add an svg file at `/assets/ananke/socials/github.svg`

#### Built-in Services
Here is the list of built-in services. Those marked with an `*` are also part of the "Share" module.

- twitter*
- instagram
- youtube
- github
- gitlab
- keybase
- linkedin*
- medium
- mastodon
- slack
- stackoverflow
- facebook*
- rss

#### Complement

In order to add an unkown service (absent from the list above), you simply need to add all three settings to `ananke_socials`: name, url, label, color, and optionally add an icon file matching the `name` to the `assets/ananke/socials` directory. In the absence of an icon, the theme will print the service's label.

### Content indexing

If the theme is ran in [production](#production), pages will be indexed by search engines. To prevent indexing on some given pages, add `private: true` to its Front Matter.

### Update font or body classes

The theme is set, by default, to use a near-white background color and the "Avenir" or serif typeface. You can change these in your config file with the `body_classes` parameter, like this:

```
[params]
  body_classes = "avenir bg-near-white"
```

which will give you a body class like this:

```
<body class="avenir bg-near-white">
```

note: The `body_classes` parameter will not change the font used in post content. To do this, you must use the `post_content_classes` parameter.

You can find a list of available typefaces [here](https://github.com/tachyons-css/tachyons/blob/v4.7.0/src/_font-family.css).

And a list of background colors [here](https://github.com/tachyons-css/tachyons/blob/v4.7.0/src/_skins.css#L96).


_n.b. in future versions we will likely separate the typeface and other body classes._


### CSS

Ananke stylesheet is built with Hugo Pipes's [Asset Bundling](https://gohugo.io/hugo-pipes/bundling/#readout) alone to maximize compatibiliy. The theme simply bundles its several files into one minified and fingerprinted (in production) CSS file.

Ananke uses [Tachyon.io](https://tachyons.io/) utility class library.

#### Custom CSS

WARNING: Pending resolution of this [discussion](https://github.com/theNewDynamic/gohugo-theme-ananke/discussions/452#discussioncomment-1865301), Custom CSS only works with Hugo Extended

In order to complement the default CSS with your own, you can add custom css files to the project.

1. Just add a `assets/ananke/css` directory to your project and add the file(s) in it.
2. Register the files using the `custom_css` key in your site's parameter. The path referenced in the parameter should be relative to the `assets/ananke/css` folder.

The css files will be added in their registered order to final `main.css` file.

For example, if your css files are `assets/ananke/css/custom.css` and `assets/ananke/special.css` then add the following to the config file:

```
  [params]
    custom_css = ["custom.css","special.css"]
```
__IMPORTANT__: Files registered through the `custom_css` array, while unlimited in number, must be of the same type (Ex: all `scss` or all `css`)

__Note on retrocompatibiliy for custom css__: If the files registered through the `custom_css` setting are not found in `assets/ananke/css` the theme will expect them to live at the given path relative to the static directory and load them as <link> requests.

### Show Reading Time and Word Count

If you add a key of `show_reading_time` true to either the Config Params, a page or section's front matter, articles will show the reading time and word count.


### Adding Scripts to the Page Head

Some scripts need to be added within the page head. To add your own scripts to the page head, simply insert them into the `head-additions.html` partial located in the `layouts/partials` folder.


### Logo

You can replace the title of your site in the top left corner of each page with your own logo. To do that put your own logo into the `static` directory of your website, and add the `site_logo` parameter to the site params in your config file. For example:

```
[params]
  site_logo = "img/logo.svg"
```

### Set Content Font Color

You can set the font color of the main content both globally and on individual pages:

Globally:
Set the `text_color` param in the `config.toml` file.
```
[params]
  text_color = "green"
```

Individual Page (prioritized over global):
Set the `text_color` param in a page's markdown file front matter.

note: The value of `text_color` must be a valid tachyons color class. A list can be found [here](https://tachyons.io/docs/themes/skins/).


### Localize date format

Dates of blog posts and single pages are rendered with the default date format commonly used in the USA and Canada. It is possible to specify a different format.

```
[params]
  date_format = "2. January 2006"
```

With hugo 0.87.0 and above, you can also use predefined layout, like `:date_full`, and it will output localized dates or times.
See hugo's documentation of the [`time.Format` function](https://gohugo.io/functions/dateformat/) for more details.

### Using a canonical url

When you want to publish content that is already published on a different site. You need to reference a canonical url of the original content.
By defining the `canonicalUrl` in the front matter definition the canonical url is set in the headers.

```
canonicalUrl: https://mydomain.com/path-to-the-oringinal-content/
```

### Nearly finished

In order to see your site in action, run Hugo's built-in local server.

`$ hugo server`

Now enter [`localhost:1313`](http://localhost:1313/) in the address bar of your browser.

## Production

To run in production (e.g. to have Google Analytics show up), run `HUGO_ENV=production` before your build command. For example:

```
HUGO_ENV=production hugo
```

Note: The above command will not work on Windows. If you are running a Windows OS, use the below command:

```
set HUGO_ENV=production
hugo
```

## Contributing

If you find a bug or have an idea for a feature, feel free to use the [issue tracker](https://github.com/theNewDynamic/gohugo-theme-ananke/issues) to let me know.




TODO:

- fix hard-coded link to [section](https://github.com/theNewDynamic/gohugo-theme-ananke/blob/master/layouts/index.html#L32)
