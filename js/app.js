import { login, register, getCurrentUser } from "./auth.js";
import { createOrder } from "./orders.js";
import { getOrderFormData, getAuthData } from "./ui.js";

document.getElementById("loginBtn").onclick = async () => {
  const { email, password } = getAuthData();
  try {
    await login(email, password);
    alert("Вошел!");
  } catch (e) {
    alert(e.message);
  }
};

document.getElementById("registerBtn").onclick = async () => {
  const { email, password } = getAuthData();
  try {
    await register(email, password);
    alert("Зарегистрирован!");
  } catch (e) {
    alert(e.message);
  }
};

document.getElementById("createOrderBtn").onclick = async () => {
  const user = getCurrentUser();

  if (!user) {
    alert("Сначала войди");
    return;
  }

  const data = getOrderFormData();

  try {
    await createOrder({
      ...data,
      userId: user.uid,
    });

    alert("Заказ создан!");
  } catch (e) {
    alert(e.message);
  }
};