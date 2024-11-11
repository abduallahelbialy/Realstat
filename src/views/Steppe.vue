<template>
  <div class="public">
    <div class="container">
      <div class="row">
        <div class="text">
          <h1 class="fw-bold">أعلن عن عقارك</h1>
        </div>
        <!-- ///setupone//// -->
        <div
          class="info d-flex justify-content-between align-items-center flex-wrap mt-4"
          v-if="activeTap === '1'"
        >
          <div class="one">
            <h1>بيانات العقار</h1>
            <div class="d-flex justify-content-between gap-4 mb-3 flex-wrap">
              <div class="d-flex flex-column gap-2">
                <label for="s">نوع العقار</label>
                <select class="form-select" aria-label="Default select example">
                  <option selected></option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="d-flex flex-column gap-2">
                <label for="d"> ارفاق رقم الايجار</label>
                <input type="tel" class="form-control" />
              </div>
            </div>
            <div class="d-flex justify-content-between gap-4 mb-3 flex-wrap">
              <div class="d-flex flex-column gap-2">
                <label for="ss"> المنطفة</label>
                <select class="form-select" aria-label="Default select example">
                  <option selected></option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="d-flex flex-column gap-2">
                <label for="ssf"> الحى</label>
                <select class="form-select" aria-label="Default select example">
                  <option selected></option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div class="d-flex justify-content-between gap-4 mb-3">
              <div class="d-flex flex-column gap-2">
                <label for="dm"> المكان </label>
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="d-flex justify-content-between gap-4 mb-3">
              <div class="d-flex flex-column gap-2">
                <label for="dmn"> ملاحظات </label>
                <textarea name="nots" id="nots"> </textarea>
              </div>
            </div>
          </div>
          <div class="two-map">
            <div class="map mt-5">
              <p>حدد عنوان العقار علي الخريطة</p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54695.30555318651!2d31.382839649999998!3d31.041386149999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79db7a9053547%3A0xf8dab3bbed766c97!2z2KfZhNmF2YbYtdmI2LHYqdiMINin2YTZhdmG2LXZiNix2KkgKNmC2LPZhSAyKdiMINin2YTZhdmG2LXZiNix2KnYjCDZhdit2KfZgdi42Kkg2KfZhNiv2YLZh9mE2YrYqQ!5e0!3m2!1sar!2seg!4v1731246046427!5m2!1sar!2seg"
                width="600"
                height="430"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div
              class="two-btns d-flex gap-3 align-items-center flex-wrap mt-3 justify-content-end"
            >
              <button @click="nextStep">خطوة (1)</button>
              <button>رجوع</button>
            </div>
          </div>
        </div>
        <!-- ///setuptwo//// -->
        <div
          class="info d-flex justify-content-between align-items-center flex-wrap mt-4"
          v-if="activeTap === '2'"
        >
          <div class="one">
            <h1>تفاصيل العقار</h1>
            <div
              class="d-flex justify-content-between gap-4 mb-3 flex-wrap mt-3"
            >
              <div class="d-flex flex-column gap-2">
                <label for="st2"> نوع العقار في السوق</label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>إعادة بيع</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="d-flex flex-column gap-2">
                <label for="sta2"> سنة البناء / التسليم </label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>2011</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="d-flex flex-column gap-2">
                <label for="std2"> المساحة (بالمتر) </label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>500</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div
              class="d-flex justify-content-between gap-4 mb-3 flex-wrap mt-3"
            >
              <div class="d-flex flex-column gap-2">
                <label for="st2">أختر الاطلالة</label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>شارع فرعي</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="d-flex flex-column gap-2">
                <label for="st2">نوع التشطيب</label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>سوبر لوكس</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="d-flex flex-column gap-2">
                <label for="st2">الدور</label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>الثالث</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div
              class="d-flex justify-content-between gap-4 mb-3 flex-wrap mt-3"
            >
              <div class="d-flex gap-2">
                <div class="d-flex flex-column gap-2">
                  <label for="dm"> الغرف </label>
                  <input type="number" class="form-contro" placeholder="20" />
                </div>
                <div class="d-flex flex-column gap-2">
                  <label for="dm"> الحمامات </label>
                  <input type="number" class="form-contro" placeholder="10" />
                </div>
              </div>
              <div class="d-flex flex-column gap-2">
                <label for="strd2">السعر بالريال السعودي</label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>1,000,000</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="d-flex flex-column gap-2">
                <label for="stdj2">طريقة الدفع</label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>نقدا</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>

            <div
              class="two-btns d-flex gap-3 align-items-center flex-wrap mt-3 justify-content-end"
            >
              <button @click="setthree">
                خطوة (2)
              </button>
              <button @click="prevStep">رجوع</button>
            </div>
          </div>
        </div>
        <!-- //setupthree///// -->
         <div
          class="info d-flex justify-content-between align-items-center flex-wrap mt-4"
          v-if="activeTap === '3'"
        >
          <div class="one">
            <h1>تفاصيل صاحب الإعلان
</h1>
            <div
              class="d-flex justify-content-between gap-4 mb-3 flex-wrap mt-3"
            >
              <div class="d-flex flex-column gap-2">
                <label for="anm">الاسم</label>
                <input type="text" placeholder="عبدالله احمد" class="form-control" name="user">
              </div>
              <div class="d-flex flex-column gap-2">
                 <label for="anm">رقم الهاتف</label>
                <input type="tel" placeholder="01028924906 " class="form-control">
              </div>
              <div class="d-flex flex-column gap-2">
                <div class="d-flex flex-column gap-2">
                 <label for="mail"> البريد الالكتروني</label>
                <input type="email" placeholder="abduallahelbialy@gmail.com " class="form-control">
              </div>
              </div>
            </div>



            <div
              class="two-btns d-flex gap-3 align-items-center flex-wrap mt-3 justify-content-end"
            >
              <button @click="gopubcil">
                اعلن
              </button>
              <button @click="prevSteptwo">رجوع</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTap: "1",

    };
  },
  methods: {
    gopubcil(){
      this.$router.push('/Serchrol')
    },
    nextStep() {
      this.activeTap = "2";
    },
    setthree() {
      this.activeTap = "3";
    },
    prevStep() {
      this.activeTap = "1";
    },
    prevSteptwo() {
      this.activeTap = "2";
    },

  },
};
</script>

<style scoped>
.public {
  padding: 20px 0;
  direction: rtl;
}
.text h1 {
  font-size: 22px;
  color: var(--main-color);
}
.attch h1{
  font-size: 22px;
  color: #4d5f65;
}
.one h1 {
  font-size: 22px;
  color: #4d5f65;
}
.form-control {
  width: 100%;
  width: 320px;
  background-color: #f0f2f0;
  padding: 10px;
}
.form-contro {
  width: 100%;
  width: 155px;
  padding: 10px;
  border-radius: 7px;
  border: none;
  background-color: antiquewhite;
  outline: none;
  background-color: #f0f2f0;
}
select {
  width: 100%;
  width: 320px;
  background-color: #f0f2f0;
  background-position: left 0.75rem center;
  padding: 10px;
}
textarea {
  width: 655px;
  height: 136px;
  resize: none;
  border-radius: 7px;
  background-color: #f0f2f0;
  border: none;
}
.two-btns button:first-child {
  background-color: var(--main-color);
  border: none;
  border-radius: 4px;
  padding: 8px 25px;
  color: #fff;
}
.two-btns button:last-child {
  background-color: transparent;
  border: none;
  border-radius: 4px;
  padding: 10px 16px;
  color: black;
}

@media (max-width: 477px) {
  textarea {
    width: 336px;
  }
  iframe {
    width: 340px !important;
  }
  .map{
    display: none;
  }
}
</style>
