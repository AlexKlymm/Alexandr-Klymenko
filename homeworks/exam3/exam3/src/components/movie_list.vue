<template>
    <div class="card-header">
      <h3>Movies list</h3>
    </div>
    <div class="card-body">
        <my_card/>
    </div>
</template>

<script>
    export default {
        name: 'movie_list',
        props: {
            movieList: [
                {
                  type: Array
                },
                {
                  required: true
                }
            ],
        }
    }
</script>

<style>

</style>