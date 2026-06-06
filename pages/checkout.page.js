const logger = require('../utils/logger');

exports.CheckoutPage = class CheckoutPage {
  #freeDeliveryRadio;
  #nextButton;
  #emailInput;
  #phoneInput;
  #firstNameInput;
  #lastNameInput;
  #dayInput;
  #monthInput;
  #yearInput;
  #addressInput;
  #termsCheckbox;
  #submitButton;

  constructor(page) {
    this.page = page;

    // Delivery
    this.#freeDeliveryRadio = page.getByRole('radio', { name: /Free/i }).first();
    this.#nextButton = page.getByRole('button', { name: 'Next' });

    // User Details
    this.#emailInput = page.locator('input[name="emailAddress"]');
    this.#phoneInput = page.locator('input[name="phoneNumber"]');
    this.#firstNameInput = page.locator('input[name="firstName"]');
    this.#lastNameInput = page.locator('input[name="lastName"]');

    // DOB
    this.#dayInput = page.getByPlaceholder('DD', { exact: true });
    this.#monthInput = page.getByPlaceholder('MM');
    this.#yearInput = page.getByPlaceholder('YYYY');

    // Address
    this.#addressInput = page.getByRole('textbox', {
      name: 'Start typing your address to'
    });

    // Terms & Submit
    this.#termsCheckbox = page.locator('label').filter({ hasText: 'Please tick the box to' });
    this.#submitButton = page.getByRole('button', { name: 'Submit' });
  }

  async selectFreeDelivery() {
    try {
      await this.#freeDeliveryRadio.check();
      await this.#nextButton.click();
      logger.info('Successfully selected free delivery');
    } catch (error) {
      logger.error(`Failed to select free delivery: ${error.message}`);
      throw new Error(`CheckoutPage selectFreeDelivery error: ${error.message}`);
    }
  }

  async fillUserDetails(user) {
    try {
      await this.#emailInput.fill(user.email);
      await this.#phoneInput.fill(user.phone);
      await this.#firstNameInput.fill(user.firstName);
      await this.#lastNameInput.fill(user.lastName);

      await this.#dayInput.fill(user.dob.day);
      await this.#monthInput.fill(user.dob.month);
      await this.#yearInput.fill(user.dob.year);
      logger.info(`Successfully filled user details for ${user.email}`);
    } catch (error) {
      logger.error(`Failed to fill user details: ${error.message}`);
      throw new Error(`CheckoutPage fillUserDetails error: ${error.message}`);
    }
  }

  async fillAddress(addressQuery, addressSelection) {
    try {
      await this.#addressInput.fill(addressQuery);
      await this.page.getByText(addressSelection).click();
      logger.info(`Successfully filled address: ${addressSelection}`);
    } catch (error) {
      logger.error(`Failed to fill address: ${error.message}`);
      throw new Error(`CheckoutPage fillAddress error: ${error.message}`);
    }
  }

  async acceptTermsAndSubmit() {
    try {
      await this.#termsCheckbox.click();
      await this.#submitButton.click();
      logger.info('Successfully accepted terms and submitted checkout form');
    } catch (error) {
      logger.error(`Failed to accept terms and submit: ${error.message}`);
      throw new Error(`CheckoutPage acceptTermsAndSubmit error: ${error.message}`);
    }
  }
};
