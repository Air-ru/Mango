<template>
    <view class="container">
        <view class="header-filter">
            <view class="type-filter" @click="clickType">点击</view>
            <view class="time-filter"></view>
        </view>
        <uni-popup ref="popup" type="bottom">底部弹出 Popup</uni-popup>
    </view>
</template>

<script>
export default {
    data() {
        return {
            typeLabels: [{}],
        };
    },
    onLoad() {},
    methods: {
        clickType: function () {
            console.log(1);
            this.$refs.popup.open();
        },
    },
};
</script>

<style>
</style>
