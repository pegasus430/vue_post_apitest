<template>
  <div class="col-md-12">
    <div class="card">
      <div class="card-header">
        All List
        <button
          type="button"
          class="btn btn-primary pull-right"
          @click="$router.push({ name: 'create-post' })"
        >
          Create New
        </button>
      </div>
      <div class="card-body">
        <div>
          <v-table
            class="table"
            :data="getterAllContents"
            :currentPage.sync="currentPage"
            :pageSize="10"
            @totalPagesChanged="totalPages = $event"
          >
            <thead slot="head">
              <th>ID</th>
              <th>Title</th>
              <th>Details</th>
            </thead>
            <tbody slot="body" slot-scope="{ displayData }">
              <tr v-for="row in displayData" :key="row.guid">
                <td>{{ row.id }}</td>
                <td>{{ row.title }}</td>
                <td>
                  <button
                    class="btn btn-info"
                    @click="
                      $router.push({ name: 'details', params: { id: row.id } })
                    "
                  >
                    Details
                  </button>
                  <button
                    class="btn btn-edit"
                    @click="
                      $router.push({
                        name: 'update-post',
                        params: { id: row.id }
                      })
                    "
                  >
                    Edit
                  </button>
                </td>
              </tr>
            </tbody>
          </v-table>

          <smart-pagination
            :currentPage.sync="currentPage"
            :totalPages="totalPages"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Home',
  data() {
    return {
      count: 0,
      currentPage: 1,
      totalPages: 0
    };
  },
  methods: {
    ...mapActions(['actionGetAllContents'])
  },
  computed: {
    ...mapGetters(['getterAllContents'])
  },
  mounted() {
    this.actionGetAllContents();
  }
};
</script>
