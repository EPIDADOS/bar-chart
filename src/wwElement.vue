<template>
  <div class="horizontal-bar-chart">
    <div class="chart-container">
      <div class="chart-body">
        <div 
          class="chart-row" 
          v-for="(item, index) in chartData" 
          :key="index"
        >
          <div 
            class="chart-label"
            :style="{
              width: content.labelWidth + 'px',
              color: content.labelColor,
              fontSize: content.labelFontSize + 'px'
            }"
          >
            {{ item.label }}
          </div>
          <div 
            class="bar-container"
            :style="{
              height: content.barHeight + 'px',
            }"
          >
            <div 
              class="bar-background"
              :style="{
                backgroundColor: content.trackColor,
                height: content.barHeight + 'px',
                borderRadius: content.barBorderRadius + 'px'
              }"
            >
              <div 
                class="bar"
                :style="{
                  width: item.value + '%',
                  backgroundColor: item.color || content.barColor,
                  height: content.barHeight + 'px',
                  borderRadius: content.barBorderRadius + 'px'
                }"
                @mouseenter="handleMouseEnter($event, item)"
                @mouseleave="handleMouseLeave"
              >
                <!-- Value inside the bar -->
                <span 
                  class="bar-value"
                  :style="{
                    color: content.barValueColor || '#ffffff',
                    fontSize: (content.valueFontSize || 12) + 'px'
                  }"
                >
                  {{ item.value }}{{ content.valueSuffix }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- X-Axis -->
      <div 
        class="x-axis"
        :style="{
          color: content.axisColor || '#666666',
          fontSize: (content.axisFontSize || 10) + 'px',
          display: content.showAxis === false ? 'none' : 'block'
        }"
      >
        <div class="axis-line"></div>
        <div class="axis-ticks">
          <div class="tick" v-for="value in axisValues" :key="value" :style="{ left: value + '%' }">
            <div class="tick-mark"></div>
            <div class="tick-label">{{ value }}{{ content.valueSuffix }}</div>
          </div>
        </div>
      </div>
    </div>

    <div 
      class="tooltip" 
      v-if="tooltipVisible"
      :style="{
        left: tooltipX + 'px',
        top: tooltipY + 'px',
        backgroundColor: content.tooltipBgColor,
        color: content.tooltipTextColor
      }"
    >
      <div class="tooltip-label">{{ activeItem.label }}</div>
      <div class="tooltip-value">{{ content.tooltipPrefix }} {{ activeItem.value }}{{ content.valueSuffix }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: { type: Object, required: true },
  },
  data() {
    return {
      tooltipVisible: false,
      tooltipX: 0,
      tooltipY: 0,
      activeItem: { label: '', value: 0 }
    };
  },
  computed: {
    chartData() {
      // Use the data from content
      if (!this.content.data || !Array.isArray(this.content.data)) {
        return [
          { label: "Anatomia", value: 87, color: "#4CAF50" },
          { label: "Fisiologia", value: 70, color: "#66BB6A" },
          { label: "Bioquímica", value: 65, color: "#81C784" },
          { label: "Imunologia", value: 60, color: "#A5D6A7" },
          { label: "Farmacologia", value: 55, color: "#C8E6C9" }
        ];
      }
      
      if (this.content.sortData) {
        const sortedData = [...this.content.data];
        sortedData.sort((a, b) => {
          return this.content.sortAscending ? 
            a.value - b.value : 
            b.value - a.value;
        });
        return sortedData;
      }
      
      return this.content.data;
    },
    axisValues() {
      // Generate evenly spaced axis values
      const step = this.content.axisStep || 20;
      const max = this.content.axisMax || 100;
      const values = [];
      
      for (let i = 0; i <= max; i += step) {
        values.push(i);
      }
      
      return values;
    }
  },
  methods: {
    handleMouseEnter(event, item) {
      if (this.content.showTooltip === false) return;
      
      // Set the tooltip content
      this.activeItem = item;
      
      // Calculate tooltip position
      const barElement = event.target;
      const barRect = barElement.getBoundingClientRect();
      const chartRect = this.$el.getBoundingClientRect();
      
      this.tooltipX = barRect.right - chartRect.left;
      this.tooltipY = barRect.top - chartRect.top - 40;
      
      // Show the tooltip
      this.tooltipVisible = true;
    },
    handleMouseLeave() {
      this.tooltipVisible = false;
    }
  }
};
</script>

<style scoped>
.horizontal-bar-chart {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100px;
  padding: 16px;
  box-sizing: border-box;
  background-color: v-bind('content.backgroundColor || "transparent"');
  border-radius: v-bind('content.borderRadius + "px" || "0px"');
  font-family: Arial, sans-serif;
}

.chart-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.chart-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
}

.chart-row {
  display: flex;
  align-items: center;
  width: 100%;
}

.chart-label {
  flex-shrink: 0;
  padding-right: 12px;
  text-align: right;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.bar-container {
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
}

.bar-background {
  flex: 1;
  width: 100%;
  overflow: hidden;
}

.bar {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 8px;
  box-sizing: border-box;
  transition: width 0.5s ease;
  cursor: pointer;
}

.bar-value {
  font-weight: bold;
  white-space: nowrap;
}

/* X-Axis styles */
.x-axis {
  position: relative;
  width: calc(100% - v-bind('content.labelWidth + "px" || "120px"'));
  margin-left: v-bind('content.labelWidth + "px" || "120px"');
  height: 20px;
}

.axis-line {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: v-bind('content.axisColor || "#666666"');
}

.axis-ticks {
  position: relative;
  width: 100%;
  height: 100%;
}

.tick {
  position: absolute;
  transform: translateX(-50%);
}

.tick-mark {
  width: 1px;
  height: 5px;
  background-color: v-bind('content.axisColor || "#666666"');
  margin: 0 auto;
}

.tick-label {
  text-align: center;
  margin-top: 4px;
}

/* Tooltip styles */
.tooltip {
  position: absolute;
  padding: 8px 12px;
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  font-size: 12px;
  pointer-events: none;
  z-index: 100;
  transform: translateY(-5px);
}

.tooltip:after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid;
  border-top-color: inherit;
}

.tooltip-label {
  font-weight: bold;
  margin-bottom: 4px;
}
</style>