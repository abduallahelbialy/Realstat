<template>
  <div class="Newaccount">
    <div class="container">
      <div class="row">
        <div class="d-flex justify-content-around flex-wrap-reverse">
          <div class="img-login">
            <img :src="imglog" alt="" class="img-fluid" />
          </div>
          <div class="section-form">
            <div class="box">
              <form @submit.prevent="handleSubmit">
                <div class="text text-center">
                  <h1>هلا</h1>
                </div>
                <div class="text-user text-end">
                  <span>إنشاء حساب</span>
                  <p>أنشئ حسابك حتي تتمكن من استخدم الموقع بكل سهولة</p>
                </div>
                <div class="mb-3">
                  <label
                    for="name"
                    class="form-label d-flex justify-content-end"
                  >
                    اسمك بالكامل
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    v-model="name"
                    @input="validateName"
                  />
                  <span
                    v-if="nameError"
                    class="text-danger d-flex justify-content-end"
                    >{{ nameError }}</span
                  >
                </div>
                <div class="mb-3">
                  <label
                    for="phone"
                    class="form-label d-flex justify-content-end"
                  >
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    class="form-control"
                    id="phone"
                    v-model="phone"
                    @input="validatePhone"
                  />
                  <span
                    v-if="phoneError"
                    class="text-danger d-flex justify-content-end"
                    >{{ phoneError }}</span
                  >
                </div>
                <div class="mb-3">
                  <label
                    for="email"
                    class="form-label d-flex justify-content-end"
                  >
                    البريد الالكتروني
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="email"
                    v-model="email"
                    @input="validateEmail"
                  />
                  <span
                    v-if="emailError"
                    class="text-danger d-flex justify-content-end"
                    >{{ emailError }}</span
                  >
                </div>
                <div class="mb-3">
                  <label
                    for="password"
                    class="form-label d-flex justify-content-end"
                  >
                    كلمة المرور
                  </label>
                  <div class="position-relative">
                    <input
                      :type="showPassword ? 'text' : 'password'"
                      class="form-control"
                      id="password"
                      v-model="password"
                      @input="validatePassword"
                    />
                    <div
                      class="eye-icon position-relative"
                      @click="togglePassword"
                    >
                      <img
                        :src="showPassword ? eyeOpenIcon : eyeClosedIcon"
                        alt="Toggle Password"
                        class="img-fluid eya-iconimg"
                      />
                    </div>
                  </div>
                  <span
                    v-if="passwordError"
                    class="text-danger d-flex justify-content-end"
                    >{{ passwordError }}</span
                  >
                </div>
                <div class="mb-3">
                  <label
                    for="confirmPassword"
                    class="form-label d-flex justify-content-end"
                  >
                    تأكيد كلمة المرور
                  </label>
                  <input
                    :type="showPassword ? 'text' : 'password'"
                    class="form-control"
                    id="confirmPassword"
                    v-model="confirmPassword"
                    @input="validateConfirmPassword"
                  />
                  <div
                    class="eye-icon position-relative"
                    @click="togglePassword"
                  >
                    <img
                      :src="showPassword ? eyeOpenIcon : eyeClosedIcon"
                      alt="Toggle Password"
                      class="img-fluid eya-iconimg"
                    />
                  </div>
                  <span
                    v-if="confirmPasswordError"
                    class="text-danger d-flex justify-content-end"
                    >{{ confirmPasswordError }}</span
                  >
                </div>
                <button
                  type="submit"
                  class="btn d-flex justify-content-center mt-4 mb-2"
                >
                  انشاء حسابك
                </button>
                <div class="no-account text-center mb-3">
                  <span class="text-black-50">
                    ليس لديك حساب؟
                    <router-link to="/Newaccount">إنشاء حساب</router-link>
                  </span>
                </div>
                <div
                  class="policy d-flex justify-content-center align-items-center mb-3"
                >
                  <router-link to="/policy" class="text-black"
                    >أحكام وشروط هلا</router-link
                  >
                  <span>بالضغط على تسجيل، أنت توافق على</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from "../stores/authStore";

import img from "../assets/elegant_home_for_sale_6.png";
import eyeOpenIcon1 from "../assets/eye-regular.svg";
import eyeClosedIcon2 from "../assets/eye-slash-solid.svg";
export default {
  data() {
    return {
      imglog: img,
      name: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
      showPassword: false,
      nameError: "",
      phoneError: "",
      emailError: "",
      passwordError: "",
      confirmPasswordError: "",
      eyeOpenIcon: eyeOpenIcon1,
      eyeClosedIcon: eyeClosedIcon2,
    };
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    validateName() {
      this.nameError = this.name ? "" : "الاسم مطلوب";
    },
    validatePhone() {
      const phonePattern = /^[0-9]{11}$/;
      this.phoneError = phonePattern.test(this.phone)
        ? ""
        : "رقم الهاتف غير صالح";
    },
    validateEmail() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      this.emailError = emailPattern.test(this.email)
        ? ""
        : "البريد الإلكتروني غير صالح";
    },
    validatePassword() {
      this.passwordError =
        this.password.length >= 6
          ? ""
          : "يجب أن تكون كلمة المرور 6 أحرف على الأقل";
    },
    validateConfirmPassword() {
      this.confirmPasswordError =
        this.confirmPassword === this.password ? "" : "كلمة المرور غير متطابقة";
    },
    handleSubmit() {
      this.validateName();
      this.validatePhone();
      this.validateEmail();
      this.validatePassword();
      this.validateConfirmPassword();

      if (
        !this.nameError &&
        !this.phoneError &&
        !this.emailError &&
        !this.passwordError &&
        !this.confirmPasswordError
      ) {
        const authStore = useAuthStore();
        authStore.registerUser({
          name: this.name,
          phone: this.phone,
          email: this.email,
          password: this.password,
        });
        this.$router.push("/login");
      }
    },
  },
};
</script>

<style scoped>
.Newaccount {
  padding: 20px 0;
  background-image: url(../assets/Screenshot.png);
  background-size: cover;
  height: 100vh;
  background-position: 100%;
  overflow: scroll;
}
/* ////page login and create account////////// */
.text h1 {
  color: var(--main-color);
}
.text-user {
  line-height: 2.5;
}
.text-user span {
  color: #4d5f65;
}
.text-user p {
  color: var(--text-color);
  font-size: 13px;
}
.form-label {
  color: var(--text-color);
  font-size: 13px;
}
.box {
  background-color: #ffffff;
  border-radius: 8px;
  border: 1px solid #9399a3;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 10px 20px;
  width: 420px;
}
.img-login img {
  max-width: 600px;
}
.form-control {
  padding: 11px;
  border: var(--bs-border-width) solid #9399a3;
  border-radius: 12px;
  text-align: end;
}
.form-check-input:checked {
  background-color: var(--main-color);
  border-color: var(--main-color);
}
.form-check .form-check-input {
  float: right;
  margin-left: 10px;
}
.form-check-label {
  font-weight: 600;
  font-size: 10px;
}
.forget {
  font-size: 12px;
}
.btn {
  background-color: var(--main-color);
  padding: 12px;
  border-radius: 12px;
  cursor: pointer;
  width: 100%;
  color: white;
}
.btn-2 {
  background-color: transparent;
  border: 1px solid var(--main-color);
  width: 100%;
  padding: 12px;
  border-radius: 12px;
  cursor: pointer;
  color: var(--main-color);
}

.no-accout span:last-child {
  color: var(--main-color);
}
.no-accout a {
  color: var(--main-color);
}
a {
  color: var(--main-color);
}
.poicy span {
  color: var(--text-color);
}
.poicy {
  font-size: 12px;
}
.eya-iconimg {
  max-width: 15px;
  bottom: 15px;
  left: 9px;
  position: absolute;
  object-fit: cover;
  cursor: pointer;
}
/* ///media//////// */
@media (max-width: 477px) {
  .img-login img {
    display: none;
  }
  .box {
    width: 330px;
    margin: auto;
  }
  .text {
    margin-top: 60px;
  }
  .policy {
    font-size: 10px;
  }
  .login {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
@media (max-width: 799px) {
  .img-login {
    display: none;
  }
  .Newaccount {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
@media (max-width: 992px) {
  .img-login {
    display: none;
  }
  .Newaccount {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
@media (max-width: 1024px) {
  .img-login {
    display: none;
  }
  .Newaccount {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
