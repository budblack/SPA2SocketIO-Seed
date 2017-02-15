<template>
    <div :class="$style.content">
        <header class="mui-bar mui-bar-nav">
            <h1 class="mui-title">Trade</h1>
        </header>
        <div class="mui-content">
            <div id="chart_container" :class="$style.chart_container">
                <div id="chart" :class="$style.chart"></div>
            </div>
            <div id="info_container" :class="$style.info_container">

            </div>
        </div>
    </div>
</template>
<style lang="less" module>
    .chart_container {
        width: 100%;
        height: 50%;
    }

    .chart {
        width: 100%;
        height: 100%;
    }

    .info_container {
        width: 100%;
        height: 50%;

    }
</style>
<script>
    var echarts = require('echarts');
    var myChart;

    function randomData() {
        now   = new Date(+now + oneDay);
        value = value + Math.random() * 21 - 10;
        return {
            name : now.toString(),
            value: [
                [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
                Math.round(value)
            ]
        }
    }

    var data   = [];
    var now    = +new Date(1997, 9, 3);
    var oneDay = 24 * 3600 * 1000;
    var value  = Math.random() * 1000;
    for (var i = 0; i < 1000; i++) {
        data.push(randomData());
    }

    var chart_option = {
        title  : {
            text: ''
        },
        tooltip: {
            trigger    : 'axis',
            formatter  : function (params) {
                params   = params[0];
                var date = new Date(params.name);
                return date.getDate() + '/' + (
                       date.getMonth() + 1
                        ) + '/' + date.getFullYear() + ' : ' + params.value[1];
            },
            axisPointer: {
                animation: false
            }
        },
        xAxis  : {
            type     : 'time',
            splitLine: {
                show: false
            }
        },
        yAxis  : {
            type       : 'value',
            boundaryGap: [0, '100%'],
            splitLine  : {
                show: true
            }
        },
        series : [
            {
                name          : '模拟数据',
                type          : 'line',
                showSymbol    : false,
                hoverAnimation: false,
                data          : data
            }
        ]
    };
    setInterval(
            function () {

                for (var i = 0; i < 5; i++) {
                    data.shift();
                    data.push(randomData());
                }

                myChart.setOption(
                        {
                            series: [
                                {
                                    data: data
                                }
                            ]
                        }
                );
            }, 1000
    );

    $(document).ready(
            function () {

            }
    );
    export default {
        data(){
            return {}
        },
        mounted(){
            var chart          = document.getElementById('chart');
            //用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
            chart.style.width  = window.innerWidth + 'px';
            chart.style.height = window.innerHeight / 2 + 'px';
            myChart            = echarts.init(chart);
            // 绘制图表
            myChart.setOption(chart_option);
        }
    }

</script>
