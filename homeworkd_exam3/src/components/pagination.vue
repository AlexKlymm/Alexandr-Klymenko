<template>
  <nav aria-label="Page navigation example" v-if="total !== 0">
    <ul class="pagination">
      <li class="page-item"  :class="{disabled: page === 1}">
        <a class="page-link" href="#" @click="goToPage(page-1)">Previous</a>
      </li>

      <template v-if="page > 5">
        <li class="page-item">
          <a href="#" class="page-link" 
          @click="goToPage(1)">1</a>
        </li>
        <li class="page-item">
          ...
        </li>
      </template>

      <li class="page-item" :class="{active: p===page}" 
      v-for="p in total" :key="pGE">
        <a class="page-link" href="#" 
        @click="goToPage(p)">{{p}}</a>
      </li>

      <li class="page-item" :class="{disabled: page === total}" >
        <a class="page-link" href="#" @click="goToPage(page+1)">Next</a>
      </li>
    </ul>
  </nav>
</template>

<script>

export default {
  name: 'pagination',
  props: {
    page: {
      type: Number,
      default: 1,
      required: true
    },
    total: {
      type: Number,
      default: 0,
      required: true
    }
  },
  methods: {
    goToPage(new_page) {
      this.$emit('goToPage', new_page)
      
    }
  },
}
 </script>