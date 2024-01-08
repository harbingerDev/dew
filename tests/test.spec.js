import { test, expect, request } from "@playwright/test";
const objectRepository = require("../objectRepository")
const dataRepository = require("../dataRepository.json")
require("dotenv").config()

test("ui_test @smoke", async ({ page, context }) => {
  await page.goto("https://www.google.com/");
  await objectRepository.default.label__exact_true_(page).click();
  await objectRepository.default.label__exact_true_(page).fill(dataRepository[process.env.EXECUTION_ENVIRONMENT].data_139215);
  await objectRepository.default.link_top_15_automated_api_testing(page).click();
  await objectRepository.default.button_close(page).click();
  await objectRepository.default.link_start_testing_now_katalon(page).click();
  await page
    .locator("div")
    .filter({ hasText: /^DownloadOther Add-Ons$/ })
    .getByRole("img")
    .click();
  await objectRepository.default.text_macos_apple_siliconmacosmacos_intelmacos_apple_siliconwindows_64linux(page).first().click();
  await objectRepository.default.text_macos_apple_siliconmacosmacos_intelmacos_apple_siliconwindows_64linux(page).first().click();
  await objectRepository.default.text_ver_920ver_868ver(page).first().click();
  await page.getByText("macOS (Apple Silicon)macOSmacOS (Intel)macOS (Apple Silicon)Windows 64Linux").nth(1).click();
  await objectRepository.default.text_macosmacosmacoswindows_64linux(page).click();
  await page.goto("https://katalon.com/resources-center/blog/top-5-free-api-testing-tools");
  await objectRepository.default.Pricing(page).click();
  await objectRepository.default.link_start_free_trial(page).click();
});
