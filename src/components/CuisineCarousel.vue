<template>
  <div v-if="DataStore.loading_cuisine" class="row q-gutter-sm items-center">
    <div v-for="i in 3" :key="i" class="col">
      <q-skeleton type="QBtn" class="full-width" height="50px" />
    </div>
  </div>
  <template v-else>
    <div class="row q-col-gutter-md">
      <div
        v-for="items in DataStore.cuisine"
        :key="items.cuisine_id"
        class="col-6 col-md-4 col-lg-3"
      >
        <q-btn
          color="black"
          text-color="white"
          unelevated
          no-caps
          class="radius8 fit q-pa-sm"
          size="sm"
          :to="{
            name: 'feed',
            query: {
              query: 'all',
              cuisine_id: items.cuisine_id,
              cuisine_name: items.cuisine_name,
            },
          }"
        >
          <div class="column items-center text-center full-width">
            <q-avatar size="50px">
              <img :src="items.url_icon" />
            </q-avatar>
            <div class="ellipsis font13 q-mt-sm" style="max-width: 100px">
              {{ items.cuisine_name }}
            </div>
          </div>
        </q-btn>
      </div>
    </div>
  </template>
</template>

<script>
import { useDataStore } from "stores/DataStore";
export default {
  name: "CuisineGrid",
  setup() {
    const DataStore = useDataStore();
    return { DataStore };
  },
  mounted() {
    if (!this.DataStore.hasDataCuisine()) {
      this.DataStore.CuisineList();
    }
  },
};
</script>

<style scoped>
.q-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>
