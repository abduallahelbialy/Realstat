import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://6669fb722e964a6dfed74a46.mockapi.io", // الرابط الخاص بـ MockAPI
  headers: {
    "Content-Type": "application/json",
  },
});

// دالة تسجيل الدخول
export function login(email, password) {
  return apiClient.get(`/users?email=${email}&password=${password}`);
}

// دالة جلب بيانات المستخدم
export function fetchUserData(userId) {
  return apiClient.get(`/users/${userId}`);
}

// تعيين التوكن
export function setAuthToken(token) {
  if (token) {
    apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete apiClient.defaults.headers.common["Authorization"];
  }
}

export default apiClient;
