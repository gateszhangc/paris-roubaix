import { expect, test } from "@playwright/test";

test("homepage hydrates without missing next chunks", async ({ page }) => {
  const missingChunkRequests: string[] = [];

  page.on("response", (response) => {
    if (
      response.status() === 404 &&
      response.url().includes("/_next/static/chunks/")
    ) {
      missingChunkRequests.push(response.url());
    }
  });

  const response = await page.goto("/zh", { waitUntil: "networkidle" });

  expect(response?.ok()).toBeTruthy();

  await expect(
    page.getByRole("heading", { name: "Paris-Roubaix", exact: true })
  ).toBeVisible();

  await expect(
    page.locator('a[href="/zh/paris-roubaix-route-guide"]').first()
  ).toBeVisible();

  await page.goto("/zh/paris-roubaix-route-guide", { waitUntil: "networkidle" });
  await expect(page.getByRole("heading", { name: "路线与时间" })).toBeVisible();

  expect(missingChunkRequests).toEqual([]);
});
