<script src="echarts.min.js"></script>
<template>
  <div style="width: 100%;">
    <span>主页</span>
    <div style="margin-top: 30px">
      <div id="charts" style="width: 600px;height:400px;"></div>
    </div>
  </div>
</template>
<script>

  import echarts from 'echarts';

  export default {
    data(){
      return {
        option :{
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            itemStyle:{
              emphasis:{
                color:"#FFFFFF"
              }
            }
          },{
            data: [50, 60, 90, 60, 60, 110, 130],
            type: 'bar',
            itemStyle:{
              emphasis:{
                color:"#FFFFFF"
              }
            }
          }]
        }
      }
    },
    mounted () {
        this.test();

      var myChart = echarts.init(document.getElementById('charts'));
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(this.option);
      myChart.on('click', function (params) {
        myChart.dispatchAction({
          type: 'downplay'
        });
        myChart.dispatchAction({
          type: 'highlight',
          // 可选，系列 index，可以是一个数组指定多个系列
          seriesIndex: params.seriesIndex,
          // 可选，数据的 index
          dataIndex: params.dataIndex
        });
        console.log("单击了 "+params.value+" x轴标签");
      });
    },
    methods: {
        test:function () {
          let ss = new Array(['A','B','C']);
          for(let i of ss){
            alert(i);
          }
        }
    }
  }
</script>
