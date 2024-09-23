<template>
  <div>
    <h1>Page {{ pageId }}</h1>
    <div v-if="selectedObject">
      <p>{{ selectedObject.name }}</p>
      <p>{{ selectedObject.description }}</p>
    </div>
    <div v-else>
      <p>Object not found</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    pageId() {
      return this.$route.params.id; // Берем параметр из маршрута
    },
    selectedObject() {
      const objects = [
        { id: '1', name: 'Object 1', description: 'This is object 1' },
        { id: '2', name: 'Object 2', description: 'This is object 2' },
        { id: '3', name: 'Object 3', description: 'This is object 3' },
        { id: '4', name: 'Object 4', description: 'This is object 4' },
        { id: '5', name: 'Object 5', description: 'This is object 5' }
      ];
      return objects.find(obj => obj.id === this.pageId);
    }
  }
};
</script>
