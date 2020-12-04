<template>
  <div id="app">
    <v-app>
      <lynx-base-resizable-list-page>
        <template v-slot:header>
          <h1 class="text-center">Header</h1>
        </template>
        <template v-slot:toolbar>
          <h3 class="text-center">Toolbar</h3>
        </template>
        <template v-slot:filter>
          <p>Filter</p>
        </template>
        <template v-slot:table="tableProps">
          <v-data-table
            :height="tableProps.tableHeight">
          </v-data-table>
        </template>
      </lynx-base-resizable-list-page>
    </v-app>
  </div>
</template>

<script>
import Vue from 'vue';
import { LynxBaseResizableListPage  } from '@/entry';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    LynxBaseResizableListPage,
  }
});
</script>

<style>
  @import 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900';
  @import 'https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css';
</style>