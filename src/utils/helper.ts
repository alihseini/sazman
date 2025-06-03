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

export { today, getFormData };
