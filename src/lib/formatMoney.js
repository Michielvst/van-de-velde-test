export default function formatMoney(amount) {
  const options = {
    style: "currency",
    currency: "EUR",
  };

  const formatter = Intl.NumberFormat("be-BE", options);

  return formatter.format(amount);
}
