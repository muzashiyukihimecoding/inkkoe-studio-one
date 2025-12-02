// Ganti simulasi dengan API real
import axios from "axios";

const login = async (email, password) => {
   const response = await axios.post("/api/login", { email, password });
   const userData = response.data;
   localStorage.setItem("token", userData.token);
   localStorage.setItem("user", JSON.stringify(userData.user));
   setUser(userData.user);
};
