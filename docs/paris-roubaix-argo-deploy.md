# Paris-Roubaix Argo CD 部署映射

真实部署链路如下：

- GitHub repository: `gateszhangc/paris-roubaix`
- Git branch: `main`
- Image repository: `registry.144.91.77.245.sslip.io/paris-roubaix`
- K8s manifest path: `deploy/k8s/overlays/prod`
- Argo CD project: `paris-roubaix`
- Argo CD application: `paris-roubaix`
- K8s namespace: `paris-roubaix`
- Primary domain: `paris-roubaix.lol`
- Clarity project id: `wb53esm6lg`

汇总链路：

`gateszhangc/paris-roubaix -> main -> registry.144.91.77.245.sslip.io/paris-roubaix -> deploy/k8s/overlays/prod -> argocd/paris-roubaix`

## 仓库内清单

1. `deploy/k8s/base/namespace.yaml`
2. `deploy/k8s/base/deployment.yaml`
3. `deploy/k8s/base/service.yaml`
4. `deploy/k8s/base/ingress.yaml`
6. `deploy/k8s/overlays/prod/kustomization.yaml`
7. `deploy/k8s/argocd/project.yaml`
8. `deploy/k8s/argocd/repository-secret.yaml`
9. `deploy/k8s/argocd/application.yaml`
10. `.github/workflows/build-and-release.yml`

## 发布流程

1. 推送到 `main`
2. GitHub Actions 构建并推送 `registry.144.91.77.245.sslip.io/paris-roubaix:${GITHUB_SHA}`
3. Workflow 回写 `deploy/k8s/overlays/prod/kustomization.yaml` 的 `newTag`
4. Argo CD 自动同步 `paris-roubaix` 应用
5. Ingress 提供 `paris-roubaix.lol` 和 `www.paris-roubaix.lol`

## DNS 目标

Cloudflare 中的最终记录应为：

- `A paris-roubaix.lol -> 144.91.73.228`
- `A paris-roubaix.lol -> 144.91.77.245`
- `A paris-roubaix.lol -> 144.91.78.201`
- `CNAME www.paris-roubaix.lol -> paris-roubaix.lol`

## 验收

1. `kubectl kustomize deploy/k8s/overlays/prod`
2. `kubectl get application paris-roubaix -n argocd`
3. `kubectl get deploy,svc,ingress -n paris-roubaix`
4. 浏览器打开 `https://paris-roubaix.lol/zh`
5. Clarity 控制台确认 `wb53esm6lg` 有页面命中
