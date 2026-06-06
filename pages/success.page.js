const { expect } = require('@playwright/test');
const logger = require('../utils/logger');

exports.SuccessPage = class SuccessPage {
  #orderConfirmationHeading;
  #currencyText;
  #branchCollectionText;
  #collectionDetailsText;
  #openingTimesText;
  #yourDetailsHeading;

  constructor(page) {
    this.page = page;

    this.#orderConfirmationHeading = page.getByRole('heading', { name: 'Order Confirmation' });
    this.#currencyText = page.getByText('Currency');
    this.#branchCollectionText = page.locator('b').filter({ hasText: 'Branch collection' });
    this.#collectionDetailsText = page.getByText('Collection details');
    this.#openingTimesText = page.getByText('Opening times');
    this.#yourDetailsHeading = page.getByRole('heading', { name: 'Your details' });
  }

  async verifySuccessDetails() {
    try {
      await expect(this.#orderConfirmationHeading).toBeVisible({ timeout: 15000 });
      await expect(this.#currencyText).toBeVisible();
      await expect(this.#branchCollectionText).toBeVisible();
      await expect(this.#collectionDetailsText).toBeVisible();
      await expect(this.#openingTimesText).toBeVisible();
      await expect(this.#yourDetailsHeading).toBeVisible();
      logger.info('Successfully verified all Order Confirmation details');
    } catch (error) {
      logger.error(`Failed to verify Order Confirmation details: ${error.message}`);
      throw new Error(`SuccessPage verifySuccessDetails error: ${error.message}`);
    }
  }
};
