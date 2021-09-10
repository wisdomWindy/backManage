import * as echarts from 'echarts'
export default function (app){
    app.config.globalProperties.$echarts = echarts;
}