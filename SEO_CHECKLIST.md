# SEO 檢查清單與部署指南

## ✅ 已完成的 SEO 優化

### 1. Meta 標籤優化
- ✅ 完整的頁面標題（包含關鍵字）
- ✅ 詳細的 meta description
- ✅ 相關的 meta keywords
- ✅ Open Graph 標籤（Facebook 分享）
- ✅ Twitter Card 標籤（Twitter 分享）

### 2. 技術 SEO
- ✅ robots.txt（搜尋引擎爬蟲指令）
- ✅ sitemap.xml（網站地圖）
- ✅ Google Search Console 驗證檔案
- ✅ 響應式設計（mobile-friendly）
- ✅ 語言標籤（lang="en"）
- ✅ Favicon 和 Apple Touch Icon

### 3. 效能優化
- ✅ CSS/JS 壓縮和最小化
- ✅ 程式碼分割（vendors 和 main 分離）
- ✅ 圖片優化（通過 webpack 處理）
- ✅ 快取策略（contenthash 檔名）

### 4. URL 和內容結構
- ✅ URL 結構保持不變（/index.html, /blog-*.html）
- ✅ 所有內部連結正常
- ✅ 語義化 HTML 標籤
- ✅ 圖片 alt 屬性（部分需要補充）

## 📋 重新部署時的 SEO 清單

### 部署前檢查

1. **驗證 sitemap.xml 中的網址**
   - 確認所有 URL 都指向正確的域名
   - 更新 `<lastmod>` 日期為部署日期

   ```bash
   # 編輯 src/sitemap.xml，將所有 URL 中的域名改成你的實際域名
   # 例如：https://yourdomain.com/index.html
   ```

2. **更新 robots.txt**
   - 確認 Sitemap URL 指向正確位置

   ```bash
   # 編輯 src/robots.txt，更新 Sitemap 行
   Sitemap: https://yourdomain.com/sitemap.xml
   ```

3. **檢查 Open Graph 圖片路徑**
   - 確保 og:image 使用完整 URL

   ```html
   <!-- 在 src/index.html 中更新 -->
   <meta property="og:image" content="https://yourdomain.com/assets/img/about.jpg">
   ```

4. **重新建置**
   ```bash
   npm run build
   ```

### 部署後檢查

1. **驗證頁面載入**
   - ✅ 主頁正常顯示
   - ✅ 所有 blog 頁面正常
   - ✅ 圖片和樣式正確載入
   - ✅ JavaScript 功能正常

2. **SEO 工具驗證**
   - 訪問 `https://yourdomain.com/robots.txt`
   - 訪問 `https://yourdomain.com/sitemap.xml`
   - 使用 [Google Rich Results Test](https://search.google.com/test/rich-results)
   - 使用 [PageSpeed Insights](https://pagespeed.web.dev/)

3. **Google Search Console**
   - 提交新的 sitemap.xml
   - 請求重新索引主要頁面
   - 監控爬蟲錯誤

4. **社交媒體預覽**
   - [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
   - [Twitter Card Validator](https://cards-dev.twitter.com/validator)

## 🚀 部署步驟（不影響 SEO）

### 方案 1: GitHub Pages（推薦）

```bash
# 建置專案
npm run build

# 部署到 GitHub Pages
cd dist
git init
git add -A
git commit -m "Deploy website"
git push -f git@github.com:ncumibrs/ncumibrs_web.git main:gh-pages
cd ..
```

**優點：**
- URL 不變（如果之前也用 GitHub Pages）
- 免費 SSL 證書
- 自動 CDN
- 零停機時間

### 方案 2: 使用 CNAME（自定義域名）

如果你有自己的域名：

1. 在 `src/` 目錄創建 CNAME 檔案：
   ```bash
   echo "yourdomain.com" > src/CNAME
   ```

2. 更新 webpack.config.js 複製 CNAME：
   ```javascript
   {
     from: 'src/CNAME',
     to: 'CNAME',
     noErrorOnMissing: true,
   }
   ```

3. 重新建置並部署

### 方案 3: 直接替換（最簡單）

如果你的託管服務允許直接上傳檔案：

```bash
npm run build
# 將 dist/ 目錄中的所有檔案上傳到網站根目錄
```

## ⚠️ SEO 注意事項

### 不會影響 SEO：
- ✅ 程式碼壓縮（HTML/CSS/JS）
- ✅ 檔案重新組織（只要 URL 不變）
- ✅ 使用 webpack 打包
- ✅ 更新依賴套件版本

### 可能影響 SEO：
- ⚠️ 更改域名（需要做 301 重定向）
- ⚠️ 更改 URL 結構（需要做 301 重定向）
- ⚠️ 刪除或重命名頁面（需要做 404 處理）
- ⚠️ 大幅修改內容

## 📊 監控 SEO 健康度

### Google Search Console 監控項目
1. **索引覆蓋率** - 確保所有頁面都被索引
2. **核心網頁指標** - 監控載入速度
3. **行動裝置可用性** - 確保響應式設計正常
4. **安全性問題** - 檢查是否有安全警告

### 定期檢查（每月一次）
- [ ] sitemap.xml 是否最新
- [ ] robots.txt 是否正確
- [ ] 斷開的連結（404）
- [ ] 頁面載入速度
- [ ] SSL 證書有效期

## 🔧 未來 SEO 改進建議

### 優先級：高
1. **結構化資料（Schema.org）**
   - 添加 Organization schema
   - 添加 Event schema（活動頁面）

2. **圖片優化**
   - 添加所有圖片的 alt 屬性
   - 使用 WebP 格式
   - 實施圖片懶加載

### 優先級：中
1. **內容優化**
   - 為每個 blog 頁面添加獨特的 meta description
   - 優化標題層級（H1, H2, H3）

2. **效能優化**
   - 實施關鍵 CSS 內聯
   - 延遲載入非關鍵 JavaScript

### 優先級：低
1. **進階功能**
   - 添加麵包屑導航
   - 實施 AMP 頁面
   - 添加多語言支援（如果需要）

## 📞 問題排除

### 問題：Google 找不到我的網站
**解決方案：**
1. 在 Google Search Console 提交 sitemap.xml
2. 請求索引主頁
3. 確保 robots.txt 沒有阻擋 Google

### 問題：頁面載入很慢
**解決方案：**
1. 優化大圖片（壓縮或使用 WebP）
2. 啟用 CDN
3. 實施瀏覽器快取

### 問題：社交分享預覽不正確
**解決方案：**
1. 確認 Open Graph 標籤完整
2. 圖片使用絕對 URL
3. 使用 Facebook/Twitter 除錯工具清除快取

## 📚 有用的資源

- [Google Search Console](https://search.google.com/search-console)
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [SEO 檢查工具](https://www.seobility.net/en/seocheck/)
- [Schema.org 文檔](https://schema.org/)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)

---

**最後更新：** 2024-11-25
**維護者：** NCUMIBRS 技術團隊
