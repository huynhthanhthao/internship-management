<template>
    <div class="home-page d-flex" style="height: 500px;
            background-image: url('https://img.freepik.com/free-vector/flat-geometric-background_23-2148974368.jpg?w=996&t=st=1664254415~exp=1664255015~hmac=e1fc52663e631f60f546832a0225ac30468ca0280a6cddf8da6d7d81ad95457a');
        ">
        <div class="col-6 d-flex align-items-center px-5 animate__animated animate__backInUp">
            <div class="app-name ms-3">
                <h2 class="d-flex align-items-center fw-bold p-0 m-0 py-3">
                    <p class="m-0">Xin chào&nbsp;</p>
                    <p class="m-0" style="color: #0d6efd">{{account.name}}&nbsp;</p>
                    !!!
                </h2>
                <h5 class="lh-lg">
                    Chào mừng bạn đến với hệ thống quản lý <br />
                    sinh viên thực tập thực tế.
                </h5>
            </div>
        </div>
        <div class="col-6 d-flex align-items-center animate__animated animate__fadeInRight">
            <img src="https://assets-global.website-files.com/5af97a9c84ec1bc79d81b5f4/5b442d9ca51a7f5b711e6d60_home_mast.png"
                alt="" style="width: 500px" />
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: "HomePage",
    computed:{
        ...mapGetters({account: "getAccount"})
    }
};
</script>

<style>

</style>
