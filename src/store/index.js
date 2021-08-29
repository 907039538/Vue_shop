import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    latitude: 40.10038, // 纬度
    longitude: 116.36867, // 经度
    address: {}, //地址相关信息对象
    categorys: [], // 食品分类数组
    shops: [], // 商家数组
    userInfo: {}, // 用户信息
    goods: [], // 商品列表
    ratings: [], // 商家评价列表
    info: {}, // 商家信息
    cartFoods: [], // 购物车中食物的列表
    searchShops: [], // 搜索得到的商家列表
}
import {
    reqAddress,
    reqFoodCategorys,
    reqShops,
    reqUserInfo
} from '../api'
const actions = {
    async getAddress(context) {
        const result = await reqAddress(context.state.latitude + ',' + context.state.longitude)
        if (result.code === 0) {
            context.commit("GETADDRESS", result.data)
        }
    },
    async getFoodCategorys(context) {
        const result = await reqFoodCategorys()
        if (result.code === 0) {
            context.commit("GETFOODCATEGORYS", result.data)
        }
    },
    async getShops(context) {
        const result = await reqShops(context.state.latitude, context.state.longitude)
        if (result.code === 0) {
            context.commit("GETSHOPS", result.data)
        }
    },
    // 异步获取用户信息
    async getUserInfo(context) {
        const result = await reqUserInfo()
        if (result.code === 0) {
            context.commit('GETUSERINFO', result.data)
        }
    }
}
const mutations = {
    GETADDRESS(state, address) {
        state.address = address
    },
    GETFOODCATEGORYS(state, categorys) {
        state.categorys = categorys
    },
    GETSHOPS(state, shops) {
        state.shops = shops
    },
    USERINFO(state, user) {
        state.userInfo = user
    },
    GETUSERINFO(state,userInfo){
        state.userInfo = userInfo
    }
}


export default new Vuex.Store({
    state,
    mutations,
    actions,
})