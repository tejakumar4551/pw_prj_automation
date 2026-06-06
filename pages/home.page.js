const logger = require('../utils/logger');

exports.HomePage = class HomePage {
  #amountInput;
  #currencyDropdown;
  #clickAndCollectLabel;
  #searchBox;
  #confirmButton;
  #addToCartButton;
  #noThanksModalButton;
  #checkoutButton;
  
  constructor(page) {
    this.page = page;

    // Exchange
    this.#amountInput = page.getByRole('spinbutton').first();
    this.#currencyDropdown = page.locator('.select-styled');

    // Delivery Method
    this.#clickAndCollectLabel = page.locator('label').filter({ hasText: 'Click & Collect' });

    // Search and Cart
    this.#searchBox = page.getByRole('searchbox', { name: 'eg: WC2N 5HY' });
    this.#confirmButton = page.getByRole('button', { name: 'Confirm' }).first();
    this.#addToCartButton = page.getByRole('button', { name: 'Add to cart' });
    
    // Upsell & Checkout
    this.#noThanksModalButton = page.getByText("I'm certain I won't have any");
    this.#checkoutButton = page.getByRole('button', { name: 'Proceed to checkout' });
  }

  async goto() {
    try {
      await this.page.goto('https://eurochange.frontend.uat.ecwlbl.co.uk/');
      logger.info('Navigated to HomePage successfully');
    } catch (error) {
      logger.error(`HomePage navigation failed: ${error.message}`);
      throw new Error(`HomePage goto error: ${error.message}`);
    }
  }

  async setExchangeDetails(currency, amount) {
    try {
      await this.#currencyDropdown.click();
      await this.page.getByText(currency).click();
      await this.#amountInput.click();
      await this.#amountInput.fill(amount);
      logger.info(`Successfully set exchange details: ${amount} ${currency}`);
    } catch (error) {
      logger.error(`Failed to set exchange details: ${error.message}`);
      throw new Error(`setExchangeDetails error: ${error.message}`);
    }
  }

  async selectDeliveryMethod() {
    try {
      await this.#clickAndCollectLabel.click();
      logger.info('Successfully selected Click & Collect delivery method');
    } catch (error) {
      logger.error(`Failed to select delivery method: ${error.message}`);
      throw new Error(`selectDeliveryMethod error: ${error.message}`);
    }
  }

  async searchAndConfirmStore(searchQuery) {
    try {
      await this.#searchBox.click();
      await this.#searchBox.fill(searchQuery);
      
      // Wait for the dropdown items to appear before pressing arrows
      await this.page.waitForSelector('.dropdown-menu-class, .autocomplete-list', { state: 'visible', timeout: 5000 }).catch(() => {});
      await this.#searchBox.press('ArrowDown');
      await this.#searchBox.press('Enter');
      
      await this.#confirmButton.click();
      logger.info(`Successfully searched and confirmed store: ${searchQuery}`);
    } catch (error) {
      logger.error(`Failed to search and confirm store: ${error.message}`);
      throw new Error(`searchAndConfirmStore error: ${error.message}`);
    }
  }

  async addToCartAndProceed() {
    try {
      await this.#addToCartButton.click();
      await this.#noThanksModalButton.click();
      await this.#checkoutButton.click();
      logger.info('Successfully added to cart and proceeded to checkout');
    } catch (error) {
      logger.error(`Failed to add to cart and proceed: ${error.message}`);
      throw new Error(`addToCartAndProceed error: ${error.message}`);
    }
  }

  async selectCollectionDate(dateText) {
    try {
      await this.page.getByText(dateText).click();
      await this.page.getByRole('button', { name: 'Next' }).click();
      logger.info(`Successfully selected collection date: ${dateText}`);
    } catch (error) {
      logger.error(`Failed to select collection date: ${error.message}`);
      throw new Error(`selectCollectionDate error: ${error.message}`);
    }
  }
};
