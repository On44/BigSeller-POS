// src/services/discountService.js

export const discountTypes = {
    PERCENTAGE: 'percentage',
    FIXED: 'fixed',
    BOGO: 'bogo',
};

const discounts = [
    {
      code: 'SUMMER10',
      type: discountTypes.PERCENTAGE,
      value: 10, // 10% off
      minPurchase: 50, // Minimum purchase of $50
      startDate: '2024-06-01',
      endDate: '2024-08-31',
    },
    {
      code: 'FIVE_OFF',
      type: discountTypes.FIXED,
      value: 5, // $5 off
      minPurchase: 30, // Minimum purchase of $30
      startDate: '2024-09-01',
      endDate: '2024-10-31',
    },
    {
      code: 'BOGO50',
      type: discountTypes.BOGO,
      value: 50, // Buy one get one 50% off
      minPurchase: 0, // No minimum purchase required
      startDate: '2024-07-01',
      endDate: '2024-12-31',
    },
];

// Helper function to check if a discount is valid based on the current date
const isDiscountValid = (discount) => {
    const today = new Date();
    const start = new Date(discount.startDate);
    const end = new Date(discount.endDate);
    return today >= start && today <= end;
};

// Main function to apply the discount
export const applyDiscount = (totalAmount, discountCode) => {
    // Find the discount based on the provided discount code
    const discount = discounts.find((d) => d.code === discountCode);

    if (!discount) {
        throw new Error('Invalid discount code');
    }

    // Check if the discount is valid within the date range
    if (!isDiscountValid(discount)) {
        throw new Error('Discount code has expired or is not yet active');
    }

    // Check if the purchase meets the minimum purchase requirement
    if (totalAmount < discount.minPurchase) {
        throw new Error(`Minimum purchase of $${discount.minPurchase} required for this discount`);
    }

    // Apply discount based on type
    switch (discount.type) {
        case discountTypes.PERCENTAGE:
            return totalAmount - (totalAmount * discount.value) / 100;
        case discountTypes.FIXED:
            return totalAmount - discount.value;
        case discountTypes.BOGO:
            // Implement BOGO logic: Buy one, get one 50% off
            return totalAmount * 0.75; // For simplicity, assume 2 items in cart
        default:
            return totalAmount;
    }
};
