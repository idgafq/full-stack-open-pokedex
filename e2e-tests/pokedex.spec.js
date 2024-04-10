const { test, describe, expect } = require('@playwright/test')

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })

  test('ivysaur page details', async ({ page }) => {
    await page.goto('')
    const baseUrl = page.url()
    await page.getByText('ivysaur').click()
    expect(page.url()).toBe(`${baseUrl.replace(/\/$/, '')}/pokemon/ivysaur`)
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('chlorophyll')).toBeVisible()
  })
})