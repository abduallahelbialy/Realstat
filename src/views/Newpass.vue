<template>
  <div class="Newpass">
    <div class="container">
      <div class="row">
        <div
          class="d-flex justify-content-around flex-wrap-reverse align-items-center"
        >
          <div class="img-login">
            <img :src="imglog" alt="" class="img-fluid" />
          </div>
          <div class="section-form">
            <div class="box">
              <form @submit.prevent="handleSubmit">
                <div class="text-user text-end mt-5">
                  <span> إنشاء كلمة مرور جديدة </span>
                </div>

                <div class="mb-3 mt-3">
                  <label
                    for="password"
                    class="form-label d-flex justify-content-end"
                  >
                    كلمة المرور الجديدة
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
                  @click="gonew"
                  type="submit"
                  class="btn d-flex justify-content-center mt-4 mb-3"
                >
                  تأكيد
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img from "../assets/elegant_home_for_sale_6.png";
import eyeOpenIcon1 from "../assets/eye-regular.svg";
import eyeClosedIcon2 from "../assets/eye-slash-solid.svg";
export default {
  data() {
    return {
      imglog: img,
      password: "",
      confirmPassword: "",
      showPassword: false,
      passwordError: "",
      confirmPasswordError: "",
      eyeOpenIcon: eyeOpenIcon1,
      eyeClosedIcon: eyeClosedIcon2,
    };
  },
  methods: {
    gonew() {
      this.$router.push("/Newpass");
    },
    togglePassword() {
      this.showPassword = !this.showPassword;
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
      this.validatePassword();
      this.validateConfirmPassword();

      if (!this.passwordError && !this.confirmPasswordError) {
        this.$router.push("/login");
      }
    },
  },
};
</script>

<style scoped>
.Newpass {
  padding: 20px 0;
  background-image: url(../assets/Screenshot.png);
  background-size: cover;
  height: 100vh;
  background-position: 100%;
  overflow: hidden;
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
  height: 100%;
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
.btn {
  background-color: var(--main-color);
  padding: 12px;
  border-radius: 12px;
  cursor: pointer;
  width: 100%;
  color: white;
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
  .Newpass {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
@media (max-width: 799px) {
  .img-login {
    display: none;
  }
  .Newpass {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
@media (max-width: 992px) {
  .img-login {
    display: none;
  }
  .Newpass {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
@media (max-width: 1024px) {
  .img-login {
    display: none;
  }
  .Newpass {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
