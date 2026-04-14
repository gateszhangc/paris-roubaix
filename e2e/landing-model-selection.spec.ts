import { expect, test } from "@playwright/test";

test("homepage surfaces the latest news cards and FAQ content", async ({
  page,
}) => {
  await page.goto("/zh", { waitUntil: "networkidle" });

  await expect(
    page.getByRole("heading", { name: "Paris-Roubaix", exact: true })
  ).toBeVisible();
  await expect(page.getByText(/Wout van Aert 赢下“生涯之战”/)).toBeVisible();
  await expect(page.getByText(/Franziska Koch 为女子组写下新名字/)).toBeVisible();

  await page
    .getByRole("button", {
      name: /Paris-Roubaix 2026 男子组冠军是谁/,
    })
    .click();

  await expect(
    page.getByText(/男子组冠军是 Wout van Aert/)
  ).toBeVisible();
});

test("homepage links into the dedicated results page", async ({ page }) => {
  await page.goto("/zh", { waitUntil: "networkidle" });

  await expect(
    page.locator('a[href="/zh/paris-roubaix-2026-results"]').first()
  ).toBeVisible();

  await page.goto("/zh/paris-roubaix-2026-results", {
    waitUntil: "networkidle",
  });
  await expect(page.getByRole("heading", { name: "最新战报" })).toBeVisible();
  await expect(
    page.getByText(/Cyclingnews 赛后把本届男子组均速写成 48.91 km\/h/)
  ).toBeVisible();
});
