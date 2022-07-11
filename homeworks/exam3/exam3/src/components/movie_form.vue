<template>
    <div class="card mb-4">
      <div class="card-body">
        <form id="search_form" @submit.prevent="searchMovies()" >
          <div class="row">
            <div class="col-8">
              <input 
              type="search" 
              class="form-control" 
              placeholder="Enter movie title"
              v-model="search"
              >
            </div>
            <div class="col-4">
              <my_button 
              type="submit"
              class="btn btn-info"
              >
                Search
              </my_button>
            </div>
          </div>
        </form>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'movie_form',
    props: {
        movieList: [
            {
              type: Array
            },
            {
              required: true
            }
        ],
        search: [String, Number],
    },
    methods: {
      searchMovies() {
        if(this.search !== '') {
          axios.get(`http://www.omdbapi.com/?apikey=23582e5b&s=${this.search}`)
          .then(response => {
            // присваиваем массив , который приходит с omdb
            this.movieList = response.data.Search
            console.log(response);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .then(function () {
            // always executed
          });
        }
      }
    }
  }
</script>

<style>

</style>