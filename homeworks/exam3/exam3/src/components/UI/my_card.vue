<template>
      <div class="card" v-for="movie in movieList" :key="movie.imdbID">
        <img :src="movie.Poster" class="card-img-top" :alt="movie.Title">
        <div class="card-body">
          <h5 class="card-title">{{ movie.Title }}</h5>
          <p class="card-text"> {{ movie.Year }} </p>
          <my_button type="button" class="btn btn-primary" @click="showMovieInfo(movie.imdbID)">Detail</my_button>
        </div>
      </div>
</template>

<script>
    export default {
        name: 'my_card', 
        props: {
            movieList: {
                type: Array,
                require: true
            }
        },
        methods: {

        }
    }
</script>

<style>

</style>