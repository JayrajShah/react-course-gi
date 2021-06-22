export const validateEmail = (email) => {
  const re = /^[^@]+@[^@]+\.[^@]+$/i;
  return re.test(email);
};

export const validatePassword = (password) => {
  const re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  return re.test(password);
};
