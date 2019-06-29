<template>
    <div id="wrapper">
        <side-bar></side-bar>
        <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
                <nav-bar></nav-bar>
                <div class="container-fluid">

                    <!-- Page Heading -->
                    <transition
                        name="fade"
                        mode="out-in"
                    >
                        <router-view></router-view>
                    </transition>
                </div>
            </div>
            <app-footer></app-footer>
        </div>
        <!--Modals-->
        <modal-logout :show.sync="visiBleLogout"></modal-logout>
    </div>
</template>
<script>
import NavBar from './NavBar';
import SideBar from './SideBar';
import AppFooter from './Footer';
import ModalLogout from '../components/modal/Logout';
export default {
    name: 'App',
    components: {
        NavBar,
        SideBar,
        AppFooter,
        ModalLogout
    },
    data() {
        return {

        }
    },
    computed: {
        visiBleLogout()
        {
            return this.$store.state.modal.visibleLogout;
        }
    },
    mounted() {
        document.body.classList.add('page-top');
    },

}
</script>
<style scoped>

</style>
<style>

</style>


