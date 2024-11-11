<template>
  <div class="fav">
    <div class="container">
      <div class="row">
        <div class="text mb-3">
          <h1>العقارات المفضلة</h1>
        </div>
        <div>
          <div v-if="favorites.length">
            <div
              v-for="property in favorites"
              :key="property.id"
              class="box-card mb-3"
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
                  {{ property.sincs }}
                </div>
              </div>
              <div class="content d-flex gap-3 flex-wrap p-2">
                <div class="img-car">
                  <img :src="property.image" alt="" class="img-fluid" />
                </div>
                <div class="text-card">
                  <p>{{ property.text }}</p>
                  <span v-html="property.des"> </span>
                  <div class="d-flex flex-wrap mt-4 justify-content-between">
                    <div class="location d-flex align-items-center">
                      <i class="pi pi-map-marker"></i>
                      <span>{{ property.map }}</span>
                    </div>
                    <div class="price-card position-relative">
                      <p>{{ property.price }}</p>
                      <span>{{ property.num }}</span>
                    </div>
                  </div>
                </div>
              </div>
                <div
                  class="footer-card p-2 d-flex align-items-center justify-content-end"
                >
                  <div class="d-flex gap-5  flex-wrap">
                    <div
                      class="d-flex gap-1 align-items-center "
                      v-for="itemcard in cards"
                      :key="itemcard.id"
                    >
                      <div >
                        <img :src="itemcard.imge" alt="" class="img-fluid" />
                      </div>
                      <div>{{ itemcard.text }}</div>
                    </div>
                    <div class="iconcard">
                      <i class="pi pi-heart"></i>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          <p v-else class=" text-center">لا توجد عقارات مفضلة</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useFavoritesStore } from "../stores/favoritesStore";
import imgone from "../assets/bathtub.png";
import imgtwo from "../assets/Path 220.png";
import imgtspace from "../assets/plans.png";
import imgttype from "../assets/Group 43634.png";
import Rating from "primevue/rating";
import { ref } from "vue";
export default {
  data() {
    return {
      favoritesStore: useFavoritesStore(),
      value:ref(3),
      cards: [
        { id: 4, imge: imgone, text: "دورات المياة 4" },
        { id: 3, imge: imgtwo, text: "الغرف 12" },
        { id: 2, imge: imgtspace, text: "المساحة 500 م" },
        { id: 1, imge: imgttype, text: "نوع العقار" },
      ],
    };
  },
    components: { Rating },

  computed: {
    favorites() {
      return this.favoritesStore.favorites;
    },
  },
};
</script>

<style scoped>
.fav {
  padding: 20px 0;
  direction: rtl;
}
.text h1 {
  font-size: 20px;
  color: var(--main-color);
  font-weight: bold;
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
  color: var(--main-color);
}
.price-card {
  right: 230px;
}
.img-car img {
  max-width: 200px;
}
.time-public {
  background-color: #4d5f65;
  color: #fff;
  font-size: 13px;
  padding: 7px 22px;
  border-radius: 4px;
  border-top-left-radius: 10px;
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
