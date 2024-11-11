<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div
          class="d-flex justify-content-center flex-wrap-reverse mt-3 px-3 gap-2 py-1 bacl"
        >
          <div class="map text-white flex-grow-1">
            <div class="d-flex gap-2 flex-wrap" dir="rtl">
              <div class="flat" v-for="btn in filteredButtons" :key="btn.id">
                <button
                  :class="{ active: activeButton === btn.id }"
                  @click="setActiveButton(btn.id)"
                >
                  {{ btn.flat }}
                </button>
              </div>
              <form class="flex-grow-1" role="search" @submit.prevent>
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  v-model="searchQuery"
                  aria-label="Search"
                />
              </form>
            </div>
            <div class="mt-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54695.30555318651!2d31.382839649999998!3d31.041386149999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79db7a9053547%3A0xf8dab3bbed766c97!2z2KfZhNmF2YbYtdmI2LHYqdiMINin2YTZhdmG2LXZiNix2KkgKNmC2LPZhSAyKdiMINin2YTZhdmG2LXZiNix2KnYjCDZhdit2KfZgdi42Kkg2KfZhNiv2YLZh9mE2YrYqQ!5e0!3m2!1sar!2seg!4v1730727326207!5m2!1sar!2seg"
                width="100%"
                height="600"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
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
                  <label for="priceRange" class="price-label px-3">السعر</label>
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
                  <div class="bathroom mt-2" v-for="num in nums" :key="num.id">
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeButton: null,
      searchQuery: "",
      minPrice: 900,
      maxPrice: 15000,
      valus: 100,
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
.home{
  background-image: url(../assets/riad.png);
  height: 100vh;
  padding: 10px 0;
  overflow: hidden;
}
.bacl {
  background-color: rgba(241, 241, 241, 0.2);
  backdrop-filter: blur(10px);
  overflow: hidden;
  border-radius: 4px;
}
.box {
  background-color: #ffffff;
  border-radius: 8px;
  border: 1px solid #9399a3;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 10px 18px;
  /* width: 440px; */
}
.one-card {
  background-color: var(--main-color);
  padding: 10px 53px;
  border-radius: 4px;
  color: white;
  cursor: pointer;
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
}
</style>
