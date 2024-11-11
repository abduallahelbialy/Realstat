<template>
  <div class="notf">
    <div class="container">
      <div class="row">
        <div class="text text-end mb-3">
          <h1>إدارة الاشعارات</h1>
        </div>
        <div class="bg">
          <div
            class="list mt-3 d-flex justify-content-between"
            v-for="item in list"
            :key="item.id"
          >
            <div class="cleint d-flex gap-2">
              <div class="img-client">
                <img :src="item.img" alt="" />
              </div>
              <div class="d-flex flex-column detils-client">
                <span class="fw-semibold">{{ item.name }}</span>
                <p class="mt-2">{{ item.des }}</p>
              </div>
            </div>
            <div class="d-flex gap-4 align-items-center mt-2">
              <div class="d-flex flex-column time mt-2">
                <span>{{ item.time }}</span>
                <span>{{ item.date }}</span>
              </div>
              <div class="icon" @click="togglePopup(item.id)">
                <i :class="item.icon"></i>
                <div
                  v-if="activePopup === item.id"
                  class="popup d-flex flex-column gap-2"
                >
                  <div class="d-flex gap-2 align-items-center">
                    <i class="pi pi-eye-slash"></i>
                    <button @click="hideItem(item.id)">إخفاء</button>
                  </div>
                  <div class="d-flex gap-2 align-items-center">
                    <i class="pi pi-trash text-danger"></i>
                  <button @click="deleteItem(item.id)">حذف</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import clienimg from "../assets/user2.png";
export default {
  data() {
    return {
      activePopup: null,

      list: [
        {
          id: 1,
          name: "محمد احمد",
          img: clienimg,
          icon: "pi pi-ellipsis-v",
          des: "فيلا مستقلة متشطبة سوبر لوكس Sea View Lagoon + التكيفات المركزية الجبارة فيلا مستقلة متشطبة سوبر لوكس Sea View Lagoon + التكيفات المركزية الجبارةفيلا مستقلة متشطبة سوبر لوكس Sea View Lagoon + التكيفات المركزية الجبارة فيلا مستقلة متشطبة سوبر لوكس Sea View Lagoon + التكيفات المركزية الجبارة ",
          date: "الأربعاء 15 أكتوبر 2023",
          time: "01:45",
        },
        {
          id: 2,
          name: "عبدالله احمد",
          img: clienimg,
          icon: "pi pi-ellipsis-v",
          des: "فيلا مستقلة متشطبة سوبر لوكس Sea View Lagoon + التكيفات المركزية الجبارة فيلا مستقلة متشطبة سوبر لوكس Sea View Lagoon + التكيفات المركزية الجبارةفيلا مستقلة متشطبة سوبر لوكس Sea View Lagoon + التكيفات المركزية الجبارة فيلا مستقلة متشطبة سوبر لوكس Sea View Lagoon + التكيفات المركزية الجبارة ",
          date: "الأربعاء 15 أكتوبر 2023",
          time: "01:55",
        },
        {
          id: 3,
          name: "عمر احمد",
          img: clienimg,
          icon: "pi pi-ellipsis-v",
          des: "فيلا مستقلة متشطبة سوبر لوكس Sea View Lagoon + التكيفات المركزية الجبارة فيلا مستقلة متشطبة سوبر لوكس Sea View Lagoon + التكيفات المركزية الجبارةفيلا مستقلة متشطبة سوبر لوكس Sea View Lagoon + التكيفات المركزية الجبارة فيلا مستقلة متشطبة سوبر لوكس Sea View Lagoon + التكيفات المركزية الجبارة ",
          date: "الاثنين 15 أكتوبر 2023",
          time: "03:55",
        },
        {
          id: 4,
          name: "حسن احمد",
          img: clienimg,
          icon: "pi pi-ellipsis-v",
          des: "فيلا مستقلة متشطبة سوبر لوكس Sea View Lagoon + التكيفات المركزية الجبارة فيلا مستقلة متشطبة سوبر لوكس Sea View Lagoon + التكيفات المركزية الجبارةفيلا مستقلة متشطبة سوبر لوكس Sea View Lagoon + التكيفات المركزية الجبارة فيلا مستقلة متشطبة سوبر لوكس Sea View Lagoon + التكيفات المركزية الجبارة ",
          date: "الثلاثاء 15 أكتوبر 2023",
          time: "02:55",
        },
        {
          id: 5,
          name: "عمر احمد",
          img: clienimg,
          icon: "pi pi-ellipsis-v",
          des: "فيلا مستقلة متشطبة سوبر لوكس Sea View Lagoon + التكيفات المركزية الجبارة فيلا مستقلة متشطبة سوبر لوكس Sea View Lagoon + التكيفات المركزية الجبارةفيلا مستقلة متشطبة سوبر لوكس Sea View Lagoon + التكيفات المركزية الجبارة فيلا مستقلة متشطبة سوبر لوكس Sea View Lagoon + التكيفات المركزية الجبارة ",
          date: "الثلاثاء 15 أكتوبر 2023",
          time: "02:55",
        },
        {
          id: 6,
          name: "عماد احمد",
          img: clienimg,
          icon: "pi pi-ellipsis-v",
          des: "فيلا مستقلة متشطبة سوبر لوكس Sea View Lagoon + التكيفات المركزية الجبارة فيلا مستقلة متشطبة سوبر لوكس Sea View Lagoon + التكيفات المركزية الجبارةفيلا مستقلة متشطبة سوبر لوكس Sea View Lagoon + التكيفات المركزية الجبارة فيلا مستقلة متشطبة سوبر لوكس Sea View Lagoon + التكيفات المركزية الجبارة ",
          date: "الثلاثاء 15 أكتوبر 2023",
          time: "02:55",
        },
        {
          id: 7,
          name: "حسن عمر",
          img: clienimg,
          icon: "pi pi-ellipsis-v",
          des: "فيلا مستقلة متشطبة سوبر لوكس Sea View Lagoon + التكيفات المركزية الجبارة فيلا مستقلة متشطبة سوبر لوكس Sea View Lagoon + التكيفات المركزية الجبارةفيلا مستقلة متشطبة سوبر لوكس Sea View Lagoon + التكيفات المركزية الجبارة فيلا مستقلة متشطبة سوبر لوكس Sea View Lagoon + التكيفات المركزية الجبارة ",
          date: "الثلاثاء 15 أكتوبر 2023",
          time: "02:55",
        },
        {
          id: 8,
          name: "حسن عمر",
          img: clienimg,
          icon: "pi pi-ellipsis-v",
          des: "فيلا مستقلة متشطبة سوبر لوكس Sea View Lagoon + التكيفات المركزية الجبارة فيلا مستقلة متشطبة سوبر لوكس Sea View Lagoon + التكيفات المركزية الجبارةفيلا مستقلة متشطبة سوبر لوكس Sea View Lagoon + التكيفات المركزية الجبارة فيلا مستقلة متشطبة سوبر لوكس Sea View Lagoon + التكيفات المركزية الجبارة ",
          date: "الثلاثاء 15 أكتوبر 2023",
          time: "02:55",
        },
        {
          id: 9,
          name: "حسن عمر",
          img: clienimg,
          icon: "pi pi-ellipsis-v",
          des: "فيلا مستقلة متشطبة سوبر لوكس Sea View Lagoon + التكيفات المركزية الجبارة فيلا مستقلة متشطبة سوبر لوكس Sea View Lagoon + التكيفات المركزية الجبارةفيلا مستقلة متشطبة سوبر لوكس Sea View Lagoon + التكيفات المركزية الجبارة فيلا مستقلة متشطبة سوبر لوكس Sea View Lagoon + التكيفات المركزية الجبارة ",
          date: "الثلاثاء 15 أكتوبر 2023",
          time: "02:55",
        },
        {
          id: 10,
          name: "حسن عمر",
          img: clienimg,
          icon: "pi pi-ellipsis-v",
          des: "فيلا مستقلة متشطبة سوبر لوكس Sea View Lagoon + التكيفات المركزية الجبارة فيلا مستقلة متشطبة سوبر لوكس Sea View Lagoon + التكيفات المركزية الجبارةفيلا مستقلة متشطبة سوبر لوكس Sea View Lagoon + التكيفات المركزية الجبارة فيلا مستقلة متشطبة سوبر لوكس Sea View Lagoon + التكيفات المركزية الجبارة ",
          date: "الثلاثاء 15 أكتوبر 2023",
          time: "02:55",
        },
      ],
    };
  },
  methods: {
    togglePopup(id) {
      this.activePopup = this.activePopup === id ? null : id;
    },
    hideItem(id) {
      this.list = this.list.filter((item) => item.id !== id);
      console.log("إخفاء العنصر:", id);
    },
    deleteItem(id) {
      this.list = this.list.filter((item) => item.id !== id);
      console.log("حذف العنصر:", id);
    },
  },
};
</script>

<style scoped>
.notf {
  padding: 27px 0;
  direction: rtl;
  background-color: #f7f6f5;
    overflow: hidden;

}
.popup {
  position: absolute;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 8px;
  border-radius: 4px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}
.popup button{
  border: none;
  background-color: transparent;
}
.text h1 {
  color: var(--main-color);
  font-size: 20px;
  font-weight: bold;
}
.bg {
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
}
.detils-client p {
  font-size: 8px;
  font-weight: 600;
}
.time {
  font-size: 10px;
}
@media (max-width:477px) {
.popup {

    margin-right: -79px;
}
.detils-client p {
    font-size: 5px;
      margin: 0  !important;

}
.detils-client span{
  font-size: 5px;
}
.time {
  margin: 0  !important;
    font-size: 6px;
    text-wrap: nowrap;
}
.img-client img{
  max-width: 20px;
}
.text h1{

    font-size: 8px;
    margin: 0 !important;
}
}
</style>
