<template>
  <div class="rola">
    <div class="container">
      <div class="row">
        <!-- ///header////// -->
        <div
          class="d-flex justify-content-between align-items-center flex-wrap"
        >
          <form class="d-flex flex-grow-1 mb-2" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="فيلا دوبلكس"
              aria-label="Search"
            />
            <button class="btn-search" type="submit">بحث</button>
          </form>
          <form class="d-flex flex-grow-1 mb-2 select-map" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder=" الرياض , بجوار فندق الرياض"
              aria-label="Search"
            />
            <button class="btn-map" type="submit">
              حدد الموقع علي الخريطة
            </button>
          </form>
          <div
            class="d-flex justify-content-between align-items-center flex-wrap me-2 gap-2 mb-2"
          >
            <div class="one">
              <button>الاعلي سعراً</button>
            </div>
            <div class="one">
              <button>الأعلى تقييم</button>
            </div>
            <div class="one">
              <button>الاحدث</button>
            </div>
          </div>
        </div>
        <!-- ///content/////// -->
        <div class="d-flex gap-3 flex-wrap mt-3">
          <div class="chose">
            <div class="box">
              <div class="content p-2 px-1">
                <p class="text-end px-4">أختر نوع الوحدة السكنية</p>
                <div class="d-flex justify-content-center gap-3">
                  <div class="two-card">
                    <div class="d-flex flex-column gap-3 align-items-center">
                      <img
                        src="../assets/Repeat Grid 1.png"
                        alt=""
                        class="img-fluid"
                      />
                      <p>تجارى</p>
                    </div>
                  </div>
                  <div class="one-card">
                    <div class="d-flex flex-column gap-3 align-items-center">
                      <img src="../assets/Path.png" alt="" class="img-fluid" />
                      <p>سكني</p>
                    </div>
                  </div>
                </div>
                <div class="price mt-4">
                  <div class="price-slider">
                    <label for="priceRange" class="price-label px-3"
                      >السعر</label
                    >
                    <div class="slider-container">
                      <input
                        type="range"
                        min="900"
                        max="15000"
                        v-model="minPrice"
                        class="slider"
                        @input="updateRange"
                      />
                      <input
                        type="range"
                        min="900"
                        max="15000"
                        v-model="maxPrice"
                        class="slider"
                        @input="updateRange"
                      />
                      <div class="range-track" :style="trackStyle"></div>
                    </div>
                    <div class="price-range">{{ formattedRange }} ر.س</div>
                  </div>
                </div>
                <div class="rooms mt-3" dir="rtl">
                  <p class="px-3">عدد الغرف</p>
                  <span class="text-black-50 px-3">الغرف</span>
                  <div class="d-flex justify-content-center gap-4">
                    <div class="num mt-2" v-for="num in nums" :key="num.id">
                      <span>{{ num.number }}</span>
                    </div>
                  </div>
                </div>
                <div class="rooms mt-3" dir="rtl">
                  <span class="text-black-50 px-3">دورات المياة</span>
                  <div class="d-flex justify-content-center gap-4">
                    <div
                      class="bathroom mt-2"
                      v-for="num in nums"
                      :key="num.id"
                    >
                      <span>{{ num.number }}</span>
                    </div>
                  </div>
                </div>
                <div class="rang mt-3 d-flex flex-column" dir="rtl">
                  <label for="">المساحة الكلية</label>
                  <input type="range" />
                  <span class="text-start mt-2 text-black-50">225متر²</span>
                </div>
                <div class="mt-2 d-flex justify-content-end">
                  <button class="btn">التالى</button>
                </div>
              </div>
            </div>
          </div>
          <div class="cards flex-grow-1">
            <div class="b-card d-flex gap-2 flex-wrap mb-3">
              <div class="flat" v-for="btn in filteredButtons" :key="btn.id">
                <button
                  :class="{ active: activeButton === btn.id }"
                  @click="setActiveButton(btn.id)"
                >
                  {{ btn.flat }}
                </button>
              </div>
            </div>
            <div
              class="box-card mb-3"
              v-for="boxcard in boxx"
              :key="boxcard.id"
            >
              <div
                class="star d-flex justify-content-end gap-2 align-items-center"
              >
                <div class="card flex justify-center">
                  <Rating v-model="value" :stars="5" />
                </div>
                <div
                  class="time-public d-flex justify-content-center align-items-center"
                >
                  {{ boxcard.sincs }}
                </div>
              </div>
              <div class="content d-flex gap-3 flex-wrap p-2">
                <div class="img-car">
                  <img :src="boxcard.image" alt="" class="img-fluid" />
                </div>
                <div class="text-card">
                  <p>{{ boxcard.text }}</p>
                  <span v-html="boxcard.des"> </span>
                  <div class="d-flex flex-wrap mt-4 justify-content-between">
                    <div class="location d-flex align-items-center">
                      <i class="pi pi-map-marker"></i>
                      <span>{{ boxcard.map }}</span>
                    </div>
                    <div class="price-card position-relative">
                      <p>{{ boxcard.price }}</p>
                      <span>{{ boxcard.num }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="footer-card p-2 d-flex align-items-center justify-content-end"
              >
                <div class="d-flex gap-5 flex-wrap">
                  <div
                    class="d-flex gap-1 align-items-center"
                    v-for="itemcard in cards"
                    :key="itemcard.id"
                  >
                    <div>
                      <img :src="itemcard.imge" alt="" class="img-fluid" />
                    </div>
                    <div>{{ itemcard.text }}</div>
                  </div>
<div
          class="iconcard"
          :style="{ color: isFavorite(boxcard) ? 'green' : 'inherit' }"
          @click="toggleFavorite(boxcard)"
        >
          <i class="pi pi-heart"></i>
        </div>                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Rating from "primevue/rating";
import { useFavoritesStore } from '../stores/favoritesStore';

import { ref } from "vue";
import imgone from "../assets/bathtub.png";
import imgtwo from "../assets/Path 220.png";
import imgtspace from "../assets/plans.png";
import imgttype from "../assets/Group 43634.png";
import cardimg from "../assets/img1.png";
export default {
  data() {
    return {
      activeButton: null,
            favoritesStore: useFavoritesStore(),

      searchQuery: "",
      minPrice: 900,
      value: ref(3),
      maxPrice: 15000,
      valus: 100,
      cards: [
        { id: 4, imge: imgone, text: "دورات المياة 4" },
        { id: 3, imge: imgtwo, text: "الغرف 12" },
        { id: 2, imge: imgtspace, text: "المساحة 500 م" },
        { id: 1, imge: imgttype, text: "نوع العقار" },
      ],
      boxx: [
        {
          id: 1,
          image: cardimg,
          text: "فيلا دوبلكس",
          des: "وبلكس بحديقة تشطيب كامل سوبر لوكس وفرش جديد بالتكيفات باطلالة علي 4<br /> جوانب . في ار قي كمبوند سكني كازا فيردي كمبوند متكامل به جميع الخدمات",
          map: " المملكة العربية السعودية, الرياض , بجوار فندق  الرياض",
          price: "السعر",
          num: "33,000,000 ر.س",
          sincs: " نُشِر منذ 20 ساعات",
        },
        {
          id: 2,
          image: cardimg,
          text: "فيلا دوبلكس",
          des: "وبلكس بحديقة تشطيب كامل سوبر لوكس وفرش جديد بالتكيفات باطلالة علي 4<br /> جوانب . في ار قي كمبوند سكني كازا فيردي كمبوند متكامل به جميع الخدمات",
          map: " المملكة العربية السعودية, الرياض , بجوار فندق  الرياض",
          price: "السعر",
          num: "33,000,000 ر.س",
          sincs: " نُشِر منذ 20 ساعات",
        },
        {
          id: 3,
          image: cardimg,
          text: "فيلا دوبلكس",
          des: "وبلكس بحديقة تشطيب كامل سوبر لوكس وفرش جديد بالتكيفات باطلالة علي 4<br /> جوانب . في ار قي كمبوند سكني كازا فيردي كمبوند متكامل به جميع الخدمات",
          map: " المملكة العربية السعودية, الرياض , بجوار فندق  الرياض",
          price: "السعر",
          num: "33,000,000 ر.س",
          sincs: " نُشِر منذ 20 ساعات",
        },
        {
          id: 4,
          image: cardimg,
          text: "فيلا دوبلكس",
          des: "وبلكس بحديقة تشطيب كامل سوبر لوكس وفرش جديد بالتكيفات باطلالة علي 4<br /> جوانب . في ار قي كمبوند سكني كازا فيردي كمبوند متكامل به جميع الخدمات",
          map: " المملكة العربية السعودية, الرياض , بجوار فندق  الرياض",
          price: "السعر",
          num: "33,000,000 ر.س",
          sincs: " نُشِر منذ 20 ساعات",
        },
      ],
      bttns: [
        { id: 1, flat: "شقة" },
        { id: 2, flat: "فيلا" },
        { id: 3, flat: "عمارة" },
        { id: 4, flat: "غرفة" },
      ],
      nums: [
        { id: 1, number: "1" },
        { id: 2, number: "2" },
        { id: 3, number: "3" },
        { id: 4, number: "4" },
        { id: 5, number: "+5" },
      ],
    };
  },
  components: { Rating },
  computed: {
    formattedRange() {
      return `${this.minPrice} - ${this.maxPrice}`;
    },
    filteredButtons() {
      return this.bttns.filter((btn) => btn.flat.includes(this.searchQuery));
    },
    trackStyle() {
      const minPos = ((this.minPrice - 900) / (15000 - 900)) * 100;
      const maxPos = ((this.maxPrice - 900) / (15000 - 900)) * 100;
      return {
        left: `${minPos}%`,
        right: `${100 - maxPos}%`,
      };
    },
  },
  methods: {
     toggleFavorite(property) {
      this.favoritesStore.toggleFavorite(property);
    },
    isFavorite(property) {
      return this.favoritesStore.isFavorite(property);
    },
    setActiveButton(id) {
      this.activeButton = id;
    },
    updateRange() {
      if (parseInt(this.minPrice) > parseInt(this.maxPrice)) {
        [this.minPrice, this.maxPrice] = [this.maxPrice, this.minPrice];
      }
    },
  },
};
</script>

<style scoped>
.rola {
  padding: 20px 0;
  direction: rtl;
  background-color: #f7f6f5;
}
.btn-map {
  width: 296px;
  padding: 12px;
  background-color: #d9ae66;
  color: #fff;
  border: none;
  outline: none;
  border-radius: 6px;
}
.b-card {
  background-color: #e8ebe7;
  border-radius: 4px;
  padding: 10px;
}
.box-card {
  background-color: #e8ebe7;
  border-radius: 4px;
  padding: 5px;
}
.footer-card {
  background-color: #bdc7bc;
}
.btn-search {
  width: 180px;
  padding: 12px;
  background-color: var(--main-color);
  color: #fff;
  border: none;
  outline: none;
  border-radius: 6px;
}
.iconcard {
  font-size: 22px;
}
.time-public {
  background-color: #4d5f65;
  color: #fff;
  font-size: 13px;
  padding: 7px 22px;
  border-radius: 4px;
  border-top-left-radius: 10px;
}
.one button {
  border: 1px solid #4d5f65;
  color: black;
  border-radius: 4px;
  background-color: transparent;
  padding: 10px;
}
.form-control {
  border-radius: 6px;
}
.box {
  background-color: #ffffff;
  border-radius: 8px;
  border: 1px solid #9399a3;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 10px 18px;
  /* width: 440px; */
}
.img-car img {
  max-width: 200px;
}
.one-card {
  background-color: var(--main-color);
  padding: 10px 53px;
  border-radius: 4px;
  color: white;
  cursor: pointer;
}
.price-card {
  right: 230px;
}
.price-card p {
  margin: 2px 0;
}
.text-card span {
  font-size: 13px;
}
.location {
  font-size: 10px;
}
.two-card {
  cursor: pointer;
  background-color: #f0f2f0;
  padding: 10px 53px;
  border-radius: 4px;
  color: var(--main-color);
  border: 1px solid #01937c;
}
.one-card img,
.two-card img {
  max-width: 25px;
}
.price-slider {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: Arial, sans-serif;
}

.price-label {
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
  align-self: end;
}

.slider-container {
  position: relative;
  width: 100%;
}

.slider {
  -webkit-appearance: none;
  width: 100%;
  background: transparent;
  position: absolute;
  pointer-events: none;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 16px;
  height: 16px;
  background-color: #008060;
  border-radius: 50%;
  pointer-events: auto;
  cursor: pointer;
}

.slider::-webkit-slider-runnable-track {
  height: 2px;
  background: #e0e0e0;
}

.range-track {
  position: absolute;
  height: 2px;
  background-color: #008060;
  top: 50%;
  transform: translateY(-50%);
}

.price-range {
  font-size: 14px;
  color: #555;
  margin-top: 20px;
  align-self: start;
}
.num,
.bathroom {
  width: 45px;
  height: 45px;
  background-color: #f1efef;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
}

.num:nth-child(4),
.bathroom:nth-child(2) {
  background-color: var(--main-color);
  color: #fff;
}
.num:hover,
.bathroom:hover {
  background-color: var(--main-color);
  color: #fff;
}
.btn {
  background-color: var(--main-color);
  padding: 12px;
  border-radius: 12px;
  cursor: pointer;
  width: 40%;
  color: white;
}
.flat button {
  padding: 7px 32px;
  border-radius: 12px;
  color: var(--main-color);
  border: none;
  background-color: #fff;
}

.form-control {
  padding: 7px;
}
iframe {
  border-radius: 4px;
}
button.active {
  background-color: var(--main-color);
  color: #fff;
}

@media (max-width: 477px) {
  .btn-map {
    width: 184px;
    padding: 7px;
    font-size: 12px;
  }
  .box {
    width: 334px;
    margin: auto;
  }
  .map {
    display: none;
  }
  .num,
  .bathroom {
    width: 35px;
    height: 35px;
  }
  .one-card,
  .two-card {
    padding: 8px 36px;
  }
  .content {
    padding: 0px !important;
  }
  .footer-card {
    background-color: transparent;
    margin: 12px 0;
}
.text-card span {
    font-size: 10px;
}
.img-car img{
  max-width: 110px;
}
.select-map{
  display: none !important;
}
}
</style>
