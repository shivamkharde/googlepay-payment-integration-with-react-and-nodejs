import GooglePayButton from "@google-pay/button-react";
import "./App.css";

function App() {
	return (
		<div className="App">
			<GooglePayButton
				environment="TEST"
				paymentRequest={{
					apiVersion: 2,
					apiVersionMinor: 0,
					allowedPaymentMethods: [
						{
							type: "CARD",
							parameters: {
								allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
								allowedCardNetworks: ["MASTERCARD", "VISA"],
							},
							tokenizationSpecification: {
								type: "PAYMENT_GATEWAY",
								parameters: {
									gateway: "example",
								},
							},
						},
						{
							type: "PAYPAL",
							tokenizationSpecification: {
								type: "PAYMENT_GATEWAY",
								parameters: {
									gateway: "example",
								},
							},
						},
					],
					merchantInfo: {
						merchantId: "12345678901234567890",
						merchantName: "Demo Merchant",
					},
					transactionInfo: {
						totalPriceStatus: "FINAL",
						totalPriceLabel: "Total",
						totalPrice: "100.00",
						currencyCode: "USD",
						countryCode: "US",
					},
				}}
				onLoadPaymentData={(paymentRequest) => {
					console.log("load payment data", paymentRequest);
				}}
			/>
		</div>
	);
}

export default App;
