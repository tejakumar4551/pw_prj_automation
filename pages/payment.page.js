const logger = require('../utils/logger');

exports.PaymentPage = class PaymentPage {
  #iframe;
  #cardNumberInput;
  #expiryMonthSelect;
  #expiryYearSelect;
  #cvvInput;
  #payNowButton;

  constructor(page) {
    this.page = page;
    this.#iframe = page.locator('#eurochange-barclays-iframe').contentFrame();
    
    // Form Inputs inside iframe
    this.#cardNumberInput = this.#iframe.getByRole('textbox', { name: 'Debit Card Number The long' });
    this.#expiryMonthSelect = this.#iframe.getByLabel('Expiry Month');
    this.#expiryYearSelect = this.#iframe.getByLabel('Expiry Year');
    this.#cvvInput = this.#iframe.getByRole('textbox', { name: 'Card Security Code The Card' });
    
    // Buttons inside iframe
    this.#payNowButton = this.#iframe.getByRole('button', { name: 'Pay Now button is enabled' });
  }

  async fillCardDetailsAndSubmit(payment) {
    try {
      await this.#cardNumberInput.click();
      await this.#cardNumberInput.fill(payment.cardNumber);
      
      await this.#expiryMonthSelect.selectOption(payment.expiryMonth);
      await this.#expiryYearSelect.selectOption(payment.expiryYear);
      
      await this.#cvvInput.click();
      await this.#cvvInput.fill(payment.cvv);
      
      await this.#payNowButton.click();
      logger.info('Successfully filled card details and submitted payment');
    } catch (error) {
      logger.error(`Failed to submit payment details: ${error.message}`);
      throw new Error(`PaymentPage fillCardDetailsAndSubmit error: ${error.message}`);
    }
  }
};
