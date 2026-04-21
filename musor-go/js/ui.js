export function getOrderFormData() {
  return {
    street: document.getElementById("street").value,
    house: document.getElementById("house").value,
    flat: document.getElementById("flat").value,
    phone: document.getElementById("phone").value,
  };
}

export function getAuthData() {
  return {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };
}