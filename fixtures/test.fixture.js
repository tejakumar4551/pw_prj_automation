const base = require('@playwright/test');
const { HomePage } = require('../pages/home.page');
const { CheckoutPage } = require('../pages/checkout.page');
const { ReviewPage } = require('../pages/review.page');
const { PaymentPage } = require('../pages/payment.page');
const { SuccessPage } = require('../pages/success.page');

exports.test = base.test.extend({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
  reviewPage: async ({ page }, use) => {
    await use(new ReviewPage(page));
  },
  paymentPage: async ({ page }, use) => {
    await use(new PaymentPage(page));
  },
  successPage: async ({ page }, use) => {
    await use(new SuccessPage(page));
  }
});

exports.expect = base.expect;
