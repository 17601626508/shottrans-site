# shottrans.com

ShotTrans 的官网。**这个目录是构建产物，不要直接改。**

正文在主仓库的 `site/content/<语言>/*.html`，改完跑：

```bash
./site/publish.sh
```

它会重新生成再同步到这里。手改这里的文件，下次发布就被覆盖了。

- 托管：GitHub Pages（main 分支 / 根目录）
- 自定义域名：`CNAME` 文件声明，**别删**——一删就退回 `<用户名>.github.io`，
  App 里写死的 shottrans.com 链接会全部 404
- `.nojekyll`：让 Pages 跳过 Jekyll，否则带下划线的目录会被吃掉
