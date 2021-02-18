<template>
  <div>
    <span @click="fetchChildrens">{{getData}}</span>
    <recursive-tree 
      v-for="child in childArray"
      :key="child._id"
      :treeData="[child]">
    </recursive-tree>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  name: 'recursive-tree',
  props: ['treeData', 'isParent'],
  data() {
    return {
      childArray: [],
      dataArray: this.treeData,
    }
  },
  computed: {
    getData() {
      console.log(this.dataArray);
      return this.dataArray[0] ? this.dataArray[0].name : '';
    },
  },
  created() {
    if (_.isEmpty(this.dataArray)) {
      this.dataArray = [{
        name: 'Parent',
        parentId: null,
        avail: 250,
        need: 120,
        hasChildrens: true,
        taken: 50,
        _id: 1,
        level: 1,
      }];
    }
  },
  methods: {
    fetchChildrens() {
      this.childArray = [
        {
          name: 'Parent > child-L1-a',
          parentId: 1,
          avail: 50,
          need: 20,
          taken: 10,
          _id: 3,
          level: 2,
        }, {
          name: 'Parent > child-L1-b',
          parentId: 1,
          avail: 100,
          need: 50,
          taken: 20,
          _id: 5,
          level: 2,
        },
      ]
    }
  }
}
</script>

<style>

</style>