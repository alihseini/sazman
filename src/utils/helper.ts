const today = new Date().toLocaleDateString("fa-IR", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

interface User {
  [key: string]: any;
}

const getFormData = (user: User) => {
  const formData = new FormData();

  for (const [key, value] of Object.entries(user)) {
    if (typeof value === "string" || value instanceof Blob) {
      formData.append(key, value);
    } else {
      formData.append(key, JSON.stringify(value));
    }
  }

  return formData;
};

const validateIranianNationalCode = (input: string): boolean => {
  if (!/^\d{10}$/.test(input)) return false;

  const check = +input[9];
  const sum = input
    .split("")
    .slice(0, 9)
    .reduce((acc, digit, i) => acc + +digit * (10 - i), 0);

  const remainder = sum % 11;
  return (
    (remainder < 2 && check === remainder) ||
    (remainder >= 2 && check === 11 - remainder)
  );
};

export { today, getFormData, validateIranianNationalCode };
