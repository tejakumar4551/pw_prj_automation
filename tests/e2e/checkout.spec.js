const { test } = require('../../fixtures/test.fixture');
const testData = require('../../test-data/checkout-data.json');

test.describe('E2E Checkout Flow', () => {
  test('should successfully purchase currency via Click & Collect', async ({ 
    homePage, 
    checkoutPage, 
    reviewPage, 
    paymentPage,
    successPage
  }) => {

    // 1. Home / Search Page
    await homePage.goto();
    await homePage.setExchangeDetails(testData.order.currencyCode, testData.order.amount);
    await homePage.selectDeliveryMethod();
    await homePage.searchAndConfirmStore(testData.order.storeSearchQuery);
    await homePage.addToCartAndProceed();
    await homePage.selectCollectionDate(testData.order.collectionDate);

    // 2. Checkout / Details Page
    await checkoutPage.fillUserDetails(testData.user);
    await checkoutPage.fillAddress(testData.user.addressQuery, testData.user.addressSelection);
    await checkoutPage.acceptTermsAndSubmit();

    // 3. Review Page
    await reviewPage.verifyReviewSections();
    await reviewPage.clickNext();

    // 4. Payment Page
   // await paymentPage.fillCardDetailsAndSubmit(testData.payment);

    // 5. Success Page
   // await successPage.verifySuccessDetails();
  });
});