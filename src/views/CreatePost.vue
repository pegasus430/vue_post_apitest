
<template>
  <div class="col-md-12">
  <div class="card">
  <div class="card-header">
      Create
    </div>
    <div class="card-body">
      <form ref="postForm"
      v-on:submit.prevent="submitForm">

  <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in errors" v-bind:key="error" v-bind:error="error">{{ error }}</li>
    </ul>
  </p>

  <p>
    <label for="title">Title</label>
    <input
      id="title"
      class="form-control"
      v-model="post.title"
      type="text"
      name="title"
    >
  </p>
  <p>
    <label for="body">Description</label>
    <input
      id="body"
      class="form-control"
      v-model="post.body"
      type="text"
      name="body"
    >
  </p>
  <p>
    <label for="userId">User ID</label>
    <input
      id="userId"
      class="form-control"
      v-model="post.userId"
      type="number"
      name="userId"
      min="1"
    >
  </p>

  <p>
    <input
      type="submit"
      value="Submit"
    >
  </p>

</form>
<div class="alert alert-success" v-if="savingSuccessful">
  <strong>Success!</strong> Post Submitted Successfully
</div>
    <div>
    </div>
    </div>
  </div>
  </div>
</template>


<script>
import { mapActions } from 'vuex';
import Post from '../models/post';

export default {
  name: 'CreatePost',
  data: function () {
    return {
      post: new Post('', '', ''),
      savingSuccessful:false,
      errors: [],
    };
  },
  methods: {
    ...mapActions([
      'actionAddContent'
    ]),

    submitForm() {
      this.errors = [];

      if (!this.post.title) {
        this.errors.push('Title required.');
      }
      if (!this.post.body) {
        this.errors.push('Body required.');
      }
      if (!this.post.userId) {
        this.errors.push('User ID required.');
      }
      if(this.post.userId && this.post.userId<1){
        this.errors.push('Invalid User ID.');
      }


      if (this.errors.length===0) {
        this.sendRequest(this.actionAddContent, this.post)
      }
    },
    sendRequest (targetAction, data) {
      targetAction(data)
        .then(() => {
          this.savingSuccessful = true; 
          this.post=Object.assign({});
          setTimeout(() => this.savingSuccessful = false, 2000);
        })
        .catch((error) => {
          this.data =
              (error.response && error.response.data && error.response.data.message) ||
              error.message ||
              error.toString();
        })
    },
  }
};
</script>

