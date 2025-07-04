<template>
    <div ref="chartContainer" class="chart-container"></div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';

const chartContainer = ref<HTMLDivElement | null>(null);

const initChart = () => {
    if (chartContainer.value) {
        const chartInstance = echarts.init(chartContainer.value);
        const options = {
            title: {
                text: '',
            },
            tooltip: {
                trigger: 'axis',
            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            },
            yAxis: {
                type: 'value',
            },
            series: [
                {
                    name: 'Sales',
                    type: 'line',
                    data: [120, 200, 150, 80, 70, 110, 130],
                },
            ],
        };
        chartInstance.setOption(options);
    }
};

onMounted(() => {
    initChart();
});
</script>

<style scoped>
.chart-container {
    width: 100%;
    height: 400px;
}
</style>
