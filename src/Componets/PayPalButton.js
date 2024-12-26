import React, { useEffect } from "react";

const PayPalButton = () => {
  useEffect(() => {
    const loadPayPalButton = async () => {
      if (window.paypal) {
        window.paypal.Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: "10.00", // Set the transaction amount
                  },
                },
              ],
            });
          },
          onApprove: (data, actions) => {
            return actions.order.capture().then((details) => {
              alert(`Transaction completed by ${details.payer.name.given_name}`);
            });
          },
          onError: (err) => {
            console.error(err);
          },
        }).render("#paypal-button-container");
      }
    };
    loadPayPalButton();
  }, []);

  return <div id="paypal-button-container"></div>;
};

export default PayPalButton;
