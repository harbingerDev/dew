const objectRepository = {
  "default": {
    "label__exact_true_": (page) => page.getByLabel("Search", { exact: true }),
    "link_top_15_automated_api_testing": (page) => page.getByRole("link", { name: "Top 15 Automated API Testing" }),
    "button_close": (page) => page.getByRole("button", { name: "Close" }),
    "link_start_testing_now_katalon": (page) => page.getByRole("link", { name: "Start Testing Now - Katalon" }),
    "div": (page) => page.locator("div").filter({ hasText: {} }).getByRole("img"),
    "text_macos_apple_siliconmacosmacos_intelmacos_apple_siliconwindows_64linux": (page) => page.getByText("macOS (Apple Silicon)macOSmacOS (Intel)macOS (Apple Silicon)Windows 64Linux").nth("1"),
    "text_ver_920ver_868ver": (page) => page.getByText("Ver. 9.2.0Ver. 8.6.8Ver."),
    "text_macosmacosmacoswindows_64linux": (page) => page.getByText("macOSmacOSmacOSWindows 64Linux"),
    "Pricing": (page) => page.locator("#katalon_header").getByRole("link", { name: "Pricing" }),
    "link_start_free_trial": (page) => page.getByRole("link", { name: "Start free trial" }),
  },
};
module.exports = objectRepository;