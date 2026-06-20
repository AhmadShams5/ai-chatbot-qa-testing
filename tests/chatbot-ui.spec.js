import { test, expect } from '@playwright/test';

test('Chatbot UI loads correctly', async ({ page }) => {
  await page.goto('http://localhost:3000');
  
  await expect(page.locator('h1')).toHaveText('QA AI Chatbot');
  await expect(page.locator('#message-input')).toBeVisible();
  await expect(page.locator('#send-button')).toBeVisible();
});

test('Chatbot responds to user message', async ({ page }) => {
  // Increase test timeout to 2 minutes
  test.setTimeout(150000);
  
  await page.goto('http://localhost:3000');
  
  // Type a message
  await page.locator('#message-input').fill('What is QA testing?');
  
  // Click send
  await page.locator('#send-button').click();
  
  // Wait for AI response to appear (give it more time!)
  await page.waitForSelector('.ai-msg', { timeout: 150000 });
  
  // Verify AI response exists
  const aiResponse = page.locator('.ai-msg').first();
  await expect(aiResponse).toBeVisible();
});

test('User message appears in chat', async ({ page }) => {
  await page.goto('http://localhost:3000');
  
  await page.locator('#message-input').fill('Hello AI');
  await page.locator('#send-button').click();
  
  const userMsg = page.locator('.user-msg').first();
  await expect(userMsg).toContainText('Hello AI');
});