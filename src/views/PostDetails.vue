<template>
  <div class="col-md-12">
    <div class="card">
      <div class="card-header">
        Details
      </div>
      <div class="card-body">
        <ul>
          <li>ID: {{ getterSingleContent.id }}</li>
          <li>Title: {{ getterSingleContent.title }}</li>
          <li>Body: {{ getterSingleContent.body }}</li>
          <li>UserID: {{ getterSingleContent.userId }}</li>
        </ul>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'PostDetails',
  methods: {
    ...mapActions(['actionGetSingleContent'])
  },
  computed: {
    ...mapGetters(['getterSingleContent'])
  },
  mounted() {
    const id = this.$route.params.id;
    this.actionGetSingleContent(id);
  }
};
</script>
