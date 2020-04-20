//引入
import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';
//注册
Vue.use(Vuex);
Vue.use(VueResource);

const state= {
    cardData:[],
    isLoadingComplete:false,
    busy:false,
    isShow:false,
};

const mutations={
    updateLoadingState(state,data){
        state.isLoadingComplete=data;
    },
    updatedBusyState(state,data){
        state.busy=data;
    },
    addData(state,data){
        state.cardData=state.cardData.concat(data);
    },
    refreshData(start,data){
        start.cardData=data;
    },
    isShowAlert(state,data){
        state.isShow=data;
    },
};

const actions={
    // 进度条
    getData(context,object){
        const {progress,isRefresh}=object;
        progress.$Progress.start();

        context.commit('updateLoadingState',false);
        context.commit('updateBusyState',true);
        // vue-resource
        Vue.http.get('./../mock/api.json').then((response)=>{
            const json=response.data;
            context.commit('updateLoaingState',false);
            context.commit('updateBusyState',false);
            // 是否是第一次加载？
            if(isRefresh===true){
                context.commit('refreshData',json);
            }else{
                context.commit('addCard',json);
            }
            process.$Progress.finish();
        },()=>{
            context.commit('updateBusyState',false);
            process.$Progress.fail();
        }
         );
    }
}

const store=new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
})