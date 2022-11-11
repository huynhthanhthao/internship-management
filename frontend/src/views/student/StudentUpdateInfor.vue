<template>
    <div class="student-update my-5 animate__animated animate__fadeIn">
        <h2 class="update__title text-center fw-bold" style="color: #555555">
            Cập nhật thông tin cá nhân
        </h2>

    <div class="form-update row col-6 mt-5 p-4 rounded-3 m-auto justify-content-center">
      <AvatarComponent :avatar="{path: account.urlAvatar, height: 200, width:200}"/>
      <form class="form-update-infor ms-5 col-6 " >
          <div class="mb-3 ">
            <label for="fullname" class="form-label"><strong>Họ và tên</strong></label>
            <input type="text" class="form-control" id="fullname" aria-describedby="name" name="name" v-model="name">
          </div>
          <div class="mb-3">
              <label for="email" class="form-label"><strong>Email</strong></label>
              <input type="email" class="form-control" id="email" aria-describedby="emailHelp" name="email" v-model="email">
          </div>
          <div class="mb-3 ">
            <label for="phone" class="form-label"><strong>Số điện thoại</strong></label>
            <input type="text" class="form-control" id="phone" aria-describedby="name" name="phoneNumber" v-model="phoneNumber">
          </div>
          <div class="mb-3">
            <label for="avatar" class="form-label"><strong>Cập nhật ảnh đại diện</strong></label>
            <input type="file" id="avatar" name="avatar"
            accept="image/png, image/jpeg" value=""/>
          </div>
          <div class="form__footer d-flex justify-content-around mt-5">
            <button type="submit" class="btn btn-danger" @click="btnPreventDefault">
              <i class="bi bi-arrow-clockwise"></i>&nbsp;Đặt lại
            </button>
            <button type="submit" class="btn btn-primary btn-save" @click="updateInfo($event)">
              <i class="bi bi-calendar4"></i>&nbsp;Lưu
            </button>
          </div>
      </form>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
import { mapGetters } from 'vuex';
import AvatarComponent from "../../components/GlobalComponent/AvatarComponent.vue";

export default {
    name: "StudentInfor",
    components: { AvatarComponent },  
    data(){
      return {
        name: "",
        email:"",
        phoneNumber: "",
        avatar: "",
      }
    },
    computed:{
      ...mapGetters({account:"getAccount"})
    },
    async created(){
      await this.$store.dispatch("setAccount");
      this.name = this.account.name;
      this.email = this.account.email;
      this.phoneNumber = this.account.phoneNumber;
      this.avatar = this.account.urlAvatar;
    },
    mounted() {
        const nav = document.querySelector("nav");
        nav.scrollIntoView();
    },
    methods: {
        async updateInfo(event){
          event.preventDefault();
        }

    },
   
};
</script>

<style scoped>
.btn-save {
    min-width: 70px;
}

.form-update {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
</style>
