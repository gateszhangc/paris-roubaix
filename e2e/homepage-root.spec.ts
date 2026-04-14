import { expect, test } from "@playwright/test";

test("root path resolves to the localized homepage", async ({ page }) => {
  const response = await page.goto("/");

  expect(response?.ok()).toBeTruthy();
  await expect(page).toHaveURL(/\/zh$/);
  await expect(
    page.getByRole("heading", { name: "Paris-Roubaix", exact: true })
  ).toBeVisible();
  await expect(page.getByText(/更新至 2026 年 4 月 14 日/)).toBeVisible();
});
