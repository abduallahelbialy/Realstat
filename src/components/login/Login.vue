<template>
  <div class="login">
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
                  <span class="fw-bold">تسجيل الدخول</span>
                  <p>برجاء تسجيل الدخول حتي تتمكن من استخدم الموقع بكل سهولة</p>
                </div>
                <div class="mb-3">
                  <label
                    for="email"
                    class="form-label d-flex justify-content-end"
                  >
                    البريد الالكتروني او رقم الهاتف
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
                <div
                  class="d-flex justify-content-between align-items-center flex-wrap"
                >
                  <div class="forget">
                    <router-link to="/forget" class="text-danger"
                      >هل نسيت كلمة المرور ؟</router-link
                    >
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="flexCheckCheckedDisabled"
                      v-model="rememberMe"
                    />
                    <label
                      class="form-check-label"
                      for="flexCheckCheckedDisabled"
                    >
                      ذكرني
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  class="btn d-flex justify-content-center mt-4 mb-2"
                >
                  تسجيل الدخول
                </button>
                <button class="btn-2 d-flex justify-content-center mt-3 mb-4">
                  الدخول عبر النفاذ الوطني
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
import { useAuthStore } from "../../stores/authStore";
import img from "../../assets/elegant_home_for_sale_6.png";
import eyeOpenIcon1 from "../../assets/eye-regular.svg";
import eyeClosedIcon2 from "../../assets/eye-slash-solid.svg";
export default {
  data() {
    return {
      imglog: img,
      email: "",
      password: "",
      rememberMe: false,
      showPassword: false,
      emailError: "",
      passwordError: "",
      eyeOpenIcon: eyeOpenIcon1,
      eyeClosedIcon: eyeClosedIcon2,
    };
  },
  methods: {
    goToHome() {
      this.$router.push("/home");
    },
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    validateEmail() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!this.email) {
        this.emailError = "البريد الالكتروني مطلوب";
      } else if (!emailPattern.test(this.email)) {
        this.emailError = "البريد الالكتروني غير صالح";
      } else {
        this.emailError = "";
      }
    },
    validatePassword() {
      if (!this.password) {
        this.passwordError = "كلمة المرور مطلوبة";
      } else if (this.password.length < 6) {
        this.passwordError = "يجب أن تكون كلمة المرور 6 أحرف على الأقل";
      } else {
        this.passwordError = "";
      }
    },
    handleSubmit() {
      this.validateEmail();
      this.validatePassword();
      if (!this.emailError && !this.passwordError) {
        const authStore = useAuthStore();
        const isAuthenticated = authStore.loginUser(this.email, this.password);

        if (isAuthenticated) {
          this.$router.push("/");
        } else {
          alert("الحساب غير موجود أو البيانات غير صحيحة");
        }
      }
    },
  },
};
</script>

<style scoped>
.login {
  padding: 20px 0;
  background-image: url(../../assets/Screenshot.png);
  background-size: cover;
  height: 100vh;
  background-position: 100%;
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
  max-width: 540px;
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
  .text-user p {
    color: var(--text-color);
    font-size: 12px;
  }
  .box {
    width: 356px;
    margin: auto;
  }
  .login {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .policy {
    font-size: 10px;
  }
}
@media (max-width: 799px) {
  .img-login {
    display: none;
  }
  .login {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
@media (max-width: 992px) {
  .img-login {
    display: none;
  }
  .login {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
@media (max-width: 1024px) {
  .img-login {
    display: none;
  }
  .login {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
