//example
function PaymentService(bankName, bankCode, type, re_route) {
  this.bank = {
    name: bankName,
    code: bankCode,
  };
  this.type = type;
  this.handleRerouting = re_route;
}
PaymentService.prototype.handlePayment = async function () {
  this.type === "fintech" && Promise.resolve(this.handleRerouting);
  return `You've successfully paid from your ${this.bank.name} with the ISBN code: ${this.bank.code}`;
};

function BankPaymentService(bankName, bankCode) {
  PaymentService.call(this, bankName, bankCode, "bank");
}
// to chain the prototype of the payment service into the bank service function through prototypal inheritance
BankPaymentService.prototype = Object.create(PaymentService.prototype);
BankPaymentService.prototype.constructor = BankPaymentService;
// instantiate a new bank from the bank payment servicce
const access_bank = new BankPaymentService("access bank", "5402");
console.log(access_bank.handlePayment());

function FintechPaymentService(bankName, bankCode, re_route) {
  PaymentService.call(this, bankName, bankCode, "fintech", re_route);
}
// to chain the prototype of the payment service into the bank service function through prototypal inheritance
FintechPaymentService.prototype = Object.create(PaymentService.prototype);
FintechPaymentService.prototype.constructor = BankPaymentService;
// instantiate a new fintech from the bank payment servicce
const paystack = new FintechPaymentService("paystack", "1402", () => {
  console.log(
    "this payment is being processed by a third party user and not directly from a bank but maybe an affilation"
  );
});
console.log("paystack --->", paystack.handlePayment());
// instantiate a new fintech from the bank payment servicce
const flutterwave = new FintechPaymentService("flutterwave", "2002", () => {
    console.log(
      "this payment is being processed by a third party user and not directly from a bank but maybe an affilation"
    );
  });
console.log("flutterwave --->", flutterwave.handlePayment());
