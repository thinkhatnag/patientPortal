describe('Testing the code', () => {
  it('verifying the data fetch using the path', async () => {
    await browser.pause(10000)
    const selector = 'new UiSelector().text("Rating Scale")';
    const scrollable = `new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(${selector})`;

    const el = await $(`android=${scrollable}`);
    await el.waitForDisplayed({ timeout: 5000 });
    await el.click(); // or interact however you want
  });
});
