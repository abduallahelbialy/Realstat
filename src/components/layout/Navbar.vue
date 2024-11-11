<template>
  <div
    class="navhome"
    :style="{
      display: [
        '/login',
        '/forget',
        '/otpe',
        '/Newpass',
        '/Newaccount',
      ].includes(currentPath)
        ? 'none'
        : '',
    }"
  >
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav m-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link
                class="nav-link title px-4 fw-bold text-white"
                aria-current="page"
                :to="{ path: '/' }"
                exact-active-class="active"
                >هلا</router-link
              >
            </li>
            <li class="nav-item d-flex align-items-center">
              <div class="icon">
                <img
                  src="../../assets/Group 43637.png"
                  alt=""
                  class="img-fluid"
                />
              </div>
              <router-link
                class="nav-link text-white"
                :to="{ path: '/Steppe' }"
                exact-active-class="active"
                >أعلن عن عقارك</router-link
              >
            </li>
            <li class="nav-item d-flex align-items-center">
              <div class="icon">
                <img src="../../assets/heart.png" alt="" class="img-fluid" />
              </div>
              <router-link class="nav-link text-white" :to="{path:'/Favouirt'}"
              exact-active-class="active"
                >العقارات المفضلة</router-link
              >
            </li>
            <li class="nav-item d-flex align-items-center">
              <div class="icon">
                <img
                  src="../../assets/Group 43634.png"
                  alt=""
                  class="img-fluid"
                />
              </div>
              <router-link class="nav-link text-white"
              :to="{path:'/Serchrol'}"
              exact-active-class="active"
                >ابحث عن عقارات</router-link
              >
            </li>

            <li class="nav-item d-flex align-items-center">
              <div class="icon">
                <img
                  src="../../assets/Group 43635.png"
                  alt=""
                  class="img-fluid"
                />
              </div>
              <router-link class="nav-link text-white"  :to="{path:'/chat'}" exact-active-class="active">
                دردشة مباشرة
              </router-link>
            </li>
          </ul>
          <div
            class="d-flex gap-4 justify-content-between flex-wrap align-items-center"
          >
            <div class="icon-language flex-grow-1">
              <img src="../../assets/Path 36.png" alt="" class="img-fluid" />
            </div>
            <div
              class="icon-language flex-grow-1 position-relative"
              @click="toggleNotification"
            >
              <img
                src="../../assets/Group 43638.png"
                alt=""
                class="img-fluid notfaction"
              />
              <div v-if="showNotification" class="notification-popup">
                <template v-if="authStore.isLoggedIn">
                  <div class="notification-item">
                    <div
                      class="d-flex justify-content-between align-items-center"
                    >
                      <span class="flex-grow-1 text-black-50 time2"
                        >الاشعارات</span
                      >

                      <span class="text-black-50 time2" @click="gonot"
                        >عرض الكل</span
                      >
                    </div>
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
                          <p>{{ item.des }}</p>
                        </div>
                      </div>
                      <div class="d-flex flex-column time">
                        <span>{{ item.time }}</span>
                        <span>{{ item.date }}</span>
                      </div>
                    </div>
                  </div>
                </template>
                <p v-else class="text-center">يجب تسجيل الدخول</p>
              </div>
            </div>

            <div class="icon-language flex-grow-1">
              <img src="../../assets/Group 177.png" alt="" class="img-fluid" />
            </div>
          </div>

          <button
            type="submit"
            class="btn mx-2"
            @click="goLogin"
            v-if="!authStore.isLoggedIn"
          >
            تسجيل الدخول
          </button>
          <div class="user-account bg-white px-3" v-if="authStore.isLoggedIn">
            <div class="d-flex gap-2 align-items-center">
              <div class="img-user">
                <img src="../../assets/user2.png" alt="" class="img-fluid" />
              </div>
              <div class="d-flex flex-column text-user gap-2">
                <span class="text-black-50">مرحبا</span>
                <p class="text-dark">{{ authStore.user?.name }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
// import Home from "../../views/Home.vue";
import { useAuthStore } from "../../stores/authStore";
import { ref, onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import clienimg from "../../assets/user2.png";
export default {
  setup() {
    const authStore = useAuthStore();
    const route = useRoute();
    const list = ref([
      {
        id: 1,
        name: "محمد احمد",
        img: clienimg,
        des: "تم إضافة عقار جديد .... شقة دوبلكس",
        date: "الأربعاء 15 أكتوبر 2023",
        time: "01:45",
      },
      {
        id: 2,
        name: "عبدالله احمد",
        img: clienimg,
        des: "تم إضافة عقار جديد .... شقة دوبلكس",
        date: "الأربعاء 15 أكتوبر 2023",
        time: "01:55",
      },
      {
        id: 3,
        name: "عمر احمد",
        img: clienimg,
        des: "تم إضافة عقار جديد .... شقة دوبلكس",
        date: "الاثنين 15 أكتوبر 2023",
        time: "03:55",
      },
      {
        id: 4,
        name: "حسن احمد",
        img: clienimg,
        des: "تم إضافة عقار جديد .... شقة دوبلكس",
        date: "الثلاثاء 15 أكتوبر 2023",
        time: "02:55",
      },
    ]);
    const router = useRouter();
    const showNotification = ref(false);
    const currentPath = ref(route.path);

    const goLogin = () => {
      router.push("/login");
    };
    const gonot = () => {
      router.push("/Allnot");
    };
    const toggleNotification = () => {
      showNotification.value = !showNotification.value;
      if (!authStore.isLoggedIn && showNotification.value) {
        setTimeout(() => {
          showNotification.value = false;
        }, 3000); // إخفاء الإشعار بعد 3 ثوانٍ
      }
    };
    // مراقبة تغييرات مسار الصفحة وتحديث currentPath
    watch(
      () => route.path,
      (newPath) => {
        currentPath.value = newPath;
      }
    );

    return {
      authStore,
      currentPath,
      list,
      goLogin,
      gonot,
      showNotification,
      toggleNotification,
    };
  },
};
</script>

<style scoped>
.navhome {
  /* background-image: url(../../assets/riad.png);
  height: 108vh;
  padding: 10px 0; */
}
.nav-link.active {
  border-bottom: 2px solid var(--main-color);
}
.navbar-toggler {
  color: white;
  background-color: white;
}
nav {
  direction: rtl;
  background-color: #0f193e;
}
.navbar-nav {
  border: 1px solid #9399a3;
  border-radius: 6px;
  padding: 5px;
}
.navbar-nav li {
  padding: 0 13px;
}
.icon img {
  max-width: 25px;
}
.detils-client {
  font-size: 10px;
}
.time {
  font-size: 10px;
}
.time2 {
  font-size: 14px;
}
.icon-language {
  border: 1px solid #9399a3;
  border-radius: 6px;
  padding: 7px;
  cursor: pointer;
}
.icon-language img {
  max-width: 35px;
}
.btn {
  background-color: var(--main-color);
  padding: 12px;
  border-radius: 12px;
  cursor: pointer;
  width: 10%;
  color: white;
}
.img-user {
  width: 30px;
  height: 30px;
  object-fit: cover;
  border-radius: 50%;
}
.text-user {
  font-size: 10px;
}
.user-account {
  margin: 0 12px;
  border-radius: 12px;
}
.notification-popup {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-6%);
  background-color: white;
  border: 1px solid #ddd;
  padding: 8px 12px;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  white-space: nowrap;
  z-index: 10;
  width: 340px;
  margin: 7px 0px;
}
@media (max-width: 477px) {
  .navbar-nav {
    border: none;
  }
  .user-account {
    width: 145px;
  }
  .icon-language {
    display: none;
  }
  nav {
    background-color: hsl(227deg 61% 15% / 90%);

    backdrop-filter: blur(10px);
  }
  .navhome {
    padding: 0;
  }
  .nav-item {
    gap: 7px;
  }
  .title {
    text-align: center;
  }
  .btn {
    background-color: var(--main-color);
    padding: 12px;
    border-radius: 12px;
    cursor: pointer;
    width: 41%;
    color: white;
  }
}
</style>
