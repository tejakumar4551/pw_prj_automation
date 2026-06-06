const { expect } = require('@playwright/test');
const logger = require('../utils/logger');

exports.ReviewPage = class ReviewPage {
  #orderSummary;
  #deliveryMethod;
  #contactDetails;
  #aboutYou;
  #billingAddress;
  #nextButton;

  constructor(page) {
    this.page = page;

    this.#orderSummary = page.getByText('Order Summary').first();
    this.#deliveryMethod = page.getByText('Delivery Method').first();
    this.#contactDetails = page.getByText('Contact Details').first();
    this.#aboutYou = page.getByText('About You').first();
    this.#billingAddress = page.getByText('Billing Address').first();
    this.#nextButton = page.getByRole('button', { name: 'Next' });
  }

  async verifyReviewSections() {
    try {
      await expect(this.#orderSummary).toBeVisible();
      await expect(this.#deliveryMethod).toBeVisible();
      await expect(this.#contactDetails).toBeVisible();
      await expect(this.#aboutYou).toBeVisible();
      await expect(this.#billingAddress).toBeVisible();
      logger.info('Successfully verified all Review Page sections');
    } catch (error) {
      logger.error(`Failed to verify review sections: ${error.message}`);
      throw new Error(`ReviewPage verifyReviewSections error: ${error.message}`);
    }
  }

  async clickNext() {
    try {
      await this.#nextButton.click();
      logger.info('Successfully clicked Next on Review Page');
    } catch (error) {
      logger.error(`Failed to click Next on Review Page: ${error.message}`);
      throw new Error(`ReviewPage clickNext error: ${error.message}`);
    }
  }
};
