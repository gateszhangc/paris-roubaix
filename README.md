# Paris-Roubaix.lol

中文 Paris-Roubaix 关键词站，聚焦 2026 赛事的最新战报、路线与时间、关键石板区和经典历史。

## 本地运行

1. 安装依赖

```bash
npm install
```

2. 启动前端开发环境

```bash
BACKEND_AUTOSTART=false npm run dev
```

默认打开 `http://localhost:3000/zh`。

如果只想跑浏览器测试用的隔离环境：

```bash
BACKEND_AUTOSTART=false npm run dev:playwright
```

对应地址是 `http://localhost:3002/zh`。

## 已改造内容

- 首页改为中文 Paris-Roubaix 速览页
- 新增 3 个内容页：
  - `/zh/paris-roubaix-2026-results`
  - `/zh/paris-roubaix-route-guide`
  - `/zh/paris-roubaix-history`
- 自定义 logo / favicon / OG 图
- canonical、robots、sitemap、FAQ JSON-LD、OG metadata
- Clarity project id: `wb53esm6lg`
- Argo CD / Kustomize 最小部署清单
- GitHub Actions -> internal registry -> Argo CD 自动发布链路

## 关键文件

- 内容数据：`src/data/paris-roubaix.ts`
- 首页与内容页组件：`src/components/paris-roubaix/`
- SEO metadata：`src/lib/paris-roubaix-metadata.ts`
- 品牌素材：`public/brand/`、`docs/branding/`
- Argo/K8s：`deploy/k8s/`、`docs/paris-roubaix-argo-deploy.md`

## 测试

构建：

```bash
npm run build
```

首页相关 Playwright：

```bash
npx playwright test e2e/homepage-root.spec.ts e2e/homepage-hydration.spec.ts e2e/landing-model-selection.spec.ts
```

## 部署

当前仓库里已经有：

- `deploy/k8s/base`
- `deploy/k8s/overlays/prod`
- `deploy/k8s/argocd/project.yaml`
- `deploy/k8s/argocd/repository-secret.yaml`
- `deploy/k8s/argocd/application.yaml`
- `.github/workflows/build-and-release.yml`

真实部署映射：

- GitHub repository: `gateszhangc/paris-roubaix`
- Git branch: `main`
- Image repository: `registry.144.91.77.245.sslip.io/paris-roubaix`
- Argo CD application: `paris-roubaix`

部署映射与待确认项见：

```text
docs/paris-roubaix-argo-deploy.md
```

## 许可

见 [LICENSE](LICENSE)。
