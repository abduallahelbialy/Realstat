<template>
  <div class="forget">
    <div class="container">
      <div class="row">
        <div class="d-flex justify-content-around flex-wrap-reverse">
          <div class="img-login">
            <img :src="imglog" alt="" class="img-fluid" />
          </div>
          <div class="section-form">
            <div class="box">
              <div class="text-user text-end mt-5">
                <span class="fw-bold">إستعادة كلمة المرور</span>
                <p>اختر طريقة استعادة كلمة المرور</p>
              </div>

              <div
                class="d-flex justify-content-around align-items-center flex-wrap"
              >
                <div
                  class="form-check"
                  @click="toggleOption('2')"
                  :class="[activeTap === '2' ? 'active' : '']"
                >
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexCheckCheckedDisabled"
                    :checked="activeTap === '2'"
                  />
                  <label
                    class="form-check-label"
                    for="flexCheckCheckedDisabled1"
                  >
                    البريد الالكتروني
                  </label>
                </div>
                <div
                  class="form-check"
                  @click="toggleOption('1')"
                  :class="[activeTap === '1' ? 'active' : '']"
                >
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexCheckCheckedDisabled2"
                    :checked="activeTap === '1'"
                  />
                  <label
                    class="form-check-label"
                    for="flexCheckCheckedDisabled2"
                  >
                    رقم الجوال
                  </label>
                </div>
              </div>
              <div class="mb-3 mt-4" v-if="activeTap === '1'">
                <label for="tel" class="form-label d-flex justify-content-end">
                  رقم الجوال
                </label>
                <input type="tel" class="form-control" id="tel" required />
              </div>
              <div class="mb-3 mt-4" v-if="activeTap === '2'">
                <label
                  for="email"
                  class="form-label d-flex justify-content-end"
                >
                  البريد الالكتروني
                </label>
                <input type="email" class="form-control" id="email" required />
              </div>
              <button
                type="submit"
                class="btn d-flex justify-content-center mt-4 mb-2"
                @click="gonew"
              >
                التالى
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img from "../assets/elegant_home_for_sale_6.png";

export default {
  data() {
    return {
      imglog: img,
      activeTap: "1",
    };
  },
  methods: {
    gonew() {
      this.$router.push("/otpe");
    },
    toggleOption(option) {
      this.activeTap = this.activeTap === option ? "" : option;
    },
  },
};
</script>

<style scoped>
.forget {
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
  .forget {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
@media (max-width: 799px) {
  .img-login {
    display: none;
  }
  .forget {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
@media (max-width: 992px) {
  .img-login {
    display: none;
  }
  .forget {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
@media (max-width: 1024px) {
  .img-login {
    display: none;
  }
  .forget {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
