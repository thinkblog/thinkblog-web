<template>
  <div class="section">
    <el-input
      v-model="keywords"
      class="input-with-select"
      placeholder="站内搜索"
    >
      <template #append>
        <el-button :icon="Search" />
      </template>
    </el-input>
  </div>
</template>
<script setup lang="ts">
import {Search} from '@element-plus/icons-vue';</script>
<script lang="ts">
export default defineComponent({
  name: 'Search',
  data() {
    return {
      keywords: '',
    };
  },
});
</script>
