<template>
    <div v-if="show">
        <div class="modal fade show" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" style="display: block; padding-right: 17px;">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close" @click="hideModal()">
                        <span aria-hidden="true">×</span>
                    </button>
                    </div>
                    <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                    <div class="modal-footer">
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                    <a class="btn btn-primary" href="#" @click="logout()">Logout</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
export default {
    name: 'modalLogout',
    props: {
        show: Boolean
    },
    methods: {
        hideModal()
        {
            this.$store.dispatch('modal/setVisibleLogout', false);
        },
        async logout() {
            await this.$store.dispatch('user/logout');
            this.$router.push({name: 'login'});
        },
    }
}
</script>
<style>

</style>


