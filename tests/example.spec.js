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

  await page.getByLabel("city").fill("london");
  // Checking if error message is displayed when input is blank, clicking out of the input to display the error message.
  await page.getByLabel("postcode").fill("");
  await page.getByLabel("city").click();
  await expect(
    page.locator('p:has-text("Please enter postcode.")')
  ).toBeVisible();
});

//4th test

test("submit button", async ({ page }) => {
  await page.goto("http://localhost:3000/design");

  // ensure all fields are filled in
  await page.getByLabel("Full Name").fill("Ben");
  await page.getByLabel("Postcode").fill("123456");
  await page.getByLabel("House/ Flat Number And Street Name").fill("654321");
  await page.getByLabel("City").fill("london");
  await page.getByLabel("Phone Number").fill("123456789");
  await page.getByLabel("Email").fill("Ben@mail.com");

  // click submit button
  await page
    .getByRole("button", { name: "Request design consultation" })
    .click();

  // delay timeout so submit success screen is shown
  await page.waitForTimeout(3000);

  // check heading is thank you
  await expect(page.getByRole("heading", { name: "Thank you" })).toBeVisible();
});
