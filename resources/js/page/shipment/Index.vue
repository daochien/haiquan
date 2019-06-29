<template>
    <div class="shipment">
        <h1 class="h3 mb-4 text-gray-800">Shipment</h1>
        <transition
            name="fade"
            mode="out-in"
        >
            <router-view></router-view>
        </transition>
    </div>

</template>
<script>
export default {

}
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
    opacity: 0
}
</style>


