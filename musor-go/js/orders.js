import { db } from "./firebase.js";

export async function createOrder(data) {
  return await db.collection("orders").add({
    ...data,
    status: "new",
    createdAt: new Date().toISOString()
  });
}