# 國立中央大學分子創意飲品研究社官方網站

這是國立中央大學調酒社的官方網站，使用現代化的 npm + webpack 構建系統開發。

## 技術棧

- **構建工具**: Webpack 5
- **CSS 框架**: Bootstrap 5.3.3
- **動畫庫**: AOS (Animate On Scroll), Animate.css
- **UI 組件**: Swiper, GLightbox, Isotope Layout
- **圖標**: Bootstrap Icons, Boxicons

## 專案結構

```
ncumibrs_web/
├── src/                    # 源代碼目錄
│   ├── js/                 # JavaScript 檔案
│   │   ├── index.js        # 主入口文件
│   │   └── main.js         # 自定義邏輯
│   ├── css/                # CSS 檔案
│   │   └── style.css       # 自定義樣式
│   └── *.html              # HTML 頁面
├── assets/                 # 靜態資源（圖片等）
│   ├── img/                # 圖片資源
│   └── vendor/             # 第三方資源（保留作為備份）
├── dist/                   # 構建輸出目錄（自動生成）
├── webpack.config.js       # Webpack 配置
├── package.json            # 項目依賴配置
└── .gitignore              # Git 忽略文件配置

```

## 安裝依賴

在首次使用前，需要安裝項目依賴：

```bash
npm install
```

## 開發模式

啟動開發服務器，支持熱重載：

```bash
npm run dev
```

開發服務器會自動在瀏覽器中打開 `http://localhost:3000`

## 生產構建

構建優化後的生產版本：

```bash
npm run build
```

構建完成後，所有文件會輸出到 `dist/` 目錄。

## 監視模式

在開發時持續監視文件變化並自動重新構建：

```bash
npm run watch
```

## 部署

### 靜態網站託管

構建完成後，可以將 `dist/` 目錄的內容部署到任何靜態網站託管服務：

- **GitHub Pages**: 將 `dist/` 目錄推送到 `gh-pages` 分支
- **Netlify**: 直接拖放 `dist/` 目錄或連接 Git 倉庫
- **Vercel**: 連接 Git 倉庫並設置構建命令為 `npm run build`
- **Cloudflare Pages**: 連接 Git 倉庫並設置構建輸出目錄為 `dist`

### GitHub Pages 部署示例

```bash
# 構建項目
npm run build

# 切換到 dist 目錄
cd dist

# 初始化 git（如果還沒有）
git init
git add -A
git commit -m 'Deploy'

# 推送到 gh-pages 分支
git push -f git@github.com:username/repo.git master:gh-pages

cd ..
```

## 開發指南

### 添加新頁面

1. 在 `src/` 目錄創建新的 HTML 文件
2. 在 `webpack.config.js` 中添加新的 `HtmlWebpackPlugin` 配置：

```javascript
new HtmlWebpackPlugin({
  template: './src/your-new-page.html',
  filename: 'your-new-page.html',
  chunks: ['main'],
  minify: !isDevelopment,
}),
```

### 修改樣式

- 全局樣式：編輯 `src/css/style.css`
- Bootstrap 自定義：可以通過覆蓋 Bootstrap 變量來自定義主題

### 添加 JavaScript 功能

- 在 `src/js/main.js` 中添加自定義邏輯
- 需要新庫時，使用 `npm install` 安裝並在 `src/js/index.js` 中導入

## 注意事項

- `node_modules/` 和 `dist/` 目錄已被 `.gitignore` 忽略
- 所有第三方庫通過 npm 管理，無需手動下載
- 圖片和其他靜態資源保留在 `assets/` 目錄中

## 授權

本項目基於 BootstrapMade 的 Restaurantly 模板開發。

## 聯繫方式

- **社團**: 國立中央大學分子創意飲品研究社
- **電話**: +886-980890448
- **郵箱**: seaton@gmail.com
