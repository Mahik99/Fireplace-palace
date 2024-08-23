// @ts-check
import { test, expect } from "@playwright/test";

// 1st test
test("has title", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await expect(page).toHaveTitle("Fireplace Palace");
});

// 2nd test
test("Bookings test", async ({ page }) => {
  await page.goto("http://localhost:3000");

  // Click the Request a design consultation
  await page
    .getByRole("link", { name: "Request a design consultation" })
    .click();

  // Expects page to have a heading with the name of Design Booking.
  await expect(
    page.getByRole("heading", { name: "Design Booking" })
  ).toBeVisible();
});

//3rd test

test("form input", async ({ page }) => {
  await page.goto("http://localhost:3000/design");

  await page.getByLabel('city').fill('london');

  await page.getByLabel('postcode').fill('');

  await expect(page.locator('p:has-text("Please enter postcode.")')).toBeVisible();


})