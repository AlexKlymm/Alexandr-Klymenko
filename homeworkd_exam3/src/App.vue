<template>
<div class="wrapper bcg__img">
  <div class="error__alert"  :class="{blocked: errorForm === true}">
    <p class="error__text">
      You need write movie title!
    </p>
  </div>
  <div class="container">
    <div class="card mb-4">
      <div class="card-body">
        <form id="search_form" @submit.prevent="searchMovies" >
          <div class="row">
            <div class="col-8">
              <input 
              type="search" 
              class="form-control" 
              placeholder="Enter movie title"
              v-model="search"
              >
              <input 
              type="number" 
              class="form-control"
              placeholder="Enter movie year"
              v-model="year">
            </div>
            <div class="col-4">
              <select v-model="movieType" class="form-select" aria-label="Default select example">
                <option value="movie" selected>Movie</option>
                <option value="series">Series</option>
              </select>
            </div>
            <div class="col-3">
              <my_button 
              type="submit"
              class="btn btn-info"
              >
                Search
              </my_button>
            </div>
          </div>
        </form>

        <div class="favorits">
          <div class="card-header">
            <h3>Favorites list</h3>
          </div>
          <div class="card-body row movie__list">
            <div class="card col-3 movie__item" v-for="movie in favorits" :key="movie.imdbID" v-if="(favorits.length >= 1)">
              <img :src="movie.Poster" class="card-img-top" :alt="movie.Title">
              <div class="card-body">
                <h5 class="card-title">{{ movie.Title }}</h5>
                <p class="card-text"> {{ movie.Year }} </p>
                <my_button 
                type="button" 
                class="btn btn-primary" 
                @click="getMovieInfo( movie.imdbID )"
                >Detail</my_button>

                <my_button 
                type="button"
                class="btn btn-info button__favorite--left"
                @click="removeFavorite( movie )"
                >
                <span class="icon-heart" :class="movie.inFav ? 'liked' : 'not__liked'"></span>
                </my_button>
              </div>
            </div>

            <div class="car col-3" v-else>
              <h5>Your favorites movie list is empty!</h5>
            </div>
          </div>
        </div>

        <div>
          <div class="card-header">
            <h3>Movies list</h3>
          </div>
          <div class="card-body row movie__list" >
            <div class="card col-3 movie__item" v-for="movie in movieListWithFavourite()" :key="movie.imdbID">
              <img :src="movie.Poster" class="card-img-top" :alt="movie.Title">
              <div class="card-body">
                <h5 class="card-title">{{ movie.Title }}</h5>
                <p class="card-text"> {{ movie.Year }} </p>
                <my_button 
                type="button" 
                class="btn btn-primary" 
                @click="getMovieInfo( movie.imdbID )"
                >Detail</my_button>

                <my_button 
                type="button"
                class="btn btn-info button__favorite--left"
                @click="addToFavorite(  movie )"
                >
                  <span class="icon-heart" :class="movie.inFav ? 'liked' : 'not__liked'"></span>
                </my_button>
              </div>
            </div>
          </div>
            <div class="observer" ref="observer"></div> 
        </div>
      </div>
    </div>
  </div>

  <div class="modal_overlay" v-if="showModal">
    <div class="my_modal">
      <img :src="movieInfo.Poster" class="card-img-top modal__img" :alt="movieInfo.Title">
      <div class="card-body">
        <div class="title__box">
          <h4 class="card-title">{{ movieInfo.Title }}</h4>
          <p class="card-text card__text--margin"> 
            <span class="text--bold">
              released: 
            </span> {{ movieInfo.Year }} 
          </p>
          <p class="card-text card__text--margin">
            <span class="text--bold">
              type: 
            </span> {{ movieInfo.Type }} 
          </p>
        </div>
        <p class="card-text card__text--margin">
          <span class="text--bold"> {{ movieInfo.Title }} </span> - Lorem ipsum 
          dolor sit amet, consectetur. Architecto officiis et veniam eius 
          a quos maiores. Illo cum praesentium incidunt aspernatur 
          quo, dolor nihil eum.
        </p>
        <ul class="modal__descr--list">
          <li>
            <span class="text--bold"> Genre: </span> {{ movieInfo.Genre }}
          </li>

          <li>
            <span class="text--bold"> Actors: </span> {{ movieInfo.Actors }} 
          </li>

          <li>
            <span class="text--bold"> Country: </span> {{ movieInfo.Country }}
          </li>

          <li>
            <span class="text--bold"> Director: </span> {{ movieInfo.Director }} 
          </li>

          <li>
            <span class="text--bold"> Runtime: </span> {{ movieInfo.Runtime }} 
          </li>
          
          <li>
            <span class="text--bold"> language: </span> {{ movieInfo.Language }} 
          </li>
        </ul>

        <div class="movie__rating">
          <span class="text--bold"> IMBD Ratins: </span> {{ movieInfo.imdbRating }} 
          <div v-for="rating in movieInfo.Ratings">
            <span class="text--bold"> {{ rating.Source }}: </span> <span class="rating"> {{ rating.Value }} </span> 
          </div>
        </div>
      </div>
      <my_button class="btn btn-info btn__back" @click="showModal = false">
        Close
      </my_button>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    data() {
      return {
        API_KEY: "23582e5b",
        search: "",
        movieList: [],
        movieInfo: {},
        showModal: false,
        movieType: '',
        year: '',
        ratingList: [],
        favorits: [],
        page: 1,
        errorForm: true,
      }
    },
    methods: {
      searchMovies() {
        let url = `http://www.omdbapi.com/?apikey=${this.API_KEY}&s=${this.search}`
        if ( this.search !== '') {
         if (this.year !== '') {
           url += '&y='+this.year
         }
         if (this.movieType  !== '') {
           url += '&type='+this.movieType
         }
         url += '&page='+this.page
          axios.get(`${url}`)
            .then(response => {
            this.movieList = response.data.Search;
            this.totalPages = Math.ceil(response.data.totalResults / 10)
          })
        } else {
          this.showError()
        }
      },
      showError() {
         this.errorForm = false 
         setTimeout(() => {
          this.errorForm = true 
          console.log('hi');
         }, 3000)
      },
      async loadMoreMovies() {
        let url = `http://www.omdbapi.com/?apikey=${this.API_KEY}&s=${this.search}`
        this.page+=1
        if ( this.search !== '') {
         if (this.year !== '') {
           url += '&y='+this.year
         }
         if (this.movieType  !== '') {
           url += '&type='+this.movieType
         }
         url += '&page='+this.page
         }
         axios.get(`${url}`)
          .then(response => {
          this.totalPages = Math.ceil(response.data.totalResults / 10);
          this.movieList = [...this.movieList, ...response.data.Search];
        })
      },
      showMovieInfo() {
        this.showModal = true;
      },
      getMovieInfo( id ) {
        axios.get(`http://www.omdbapi.com/?apikey=${this.API_KEY}&i=${id}`)
            .then(response => {
              this.movieInfo = response.data
              this.showMovieInfo();
        });
      },
      addToFavorite( movie ) {
        this.favorits.push( movie )
        localStorage.setItem('Favorits', JSON.stringify(this.favorits))
      },
      removeFavorite( movie ) {
        let index = this.favorits.indexOf(movie)
        let removed = this.favorits.splice(index, 1)
        localStorage.setItem('Favorits', JSON.stringify(this.favorits))
        console.log(this.favorits);
      },
      movieListWithFavourite() {
        let arr= []
        this.movieList.forEach(el => {
          let findFav = this.favorits.find(item => {
            return el.imdbID === item.imdbID
          })
        el.inFav = findFav !== undefined ? true : false
        arr.push(el)
        })
        return arr
      }
    },
    mounted() {
      if ( localStorage.length >= 1 ) {
        this.favorits = JSON.parse(localStorage.getItem('Favorits'))
      }
      let options = {
        rootMargin: '0px',
        threshold: 1.0
      }
      let callback = (entries, observer) => {
        if(entries[0].isIntersecting) {
          this.loadMoreMovies()
        }
      };
      let observer = new IntersectionObserver(callback, options);
      observer.observe(this.$refs.observer)
    }
}
</script>

<style>
/* Стили для списка фильмов */
.movie__list {  
  display: flex;  
  gap: 20px;
  justify-content: center;
}

.col-3 {
  width: 30%;
}

.card-img-top {
  margin-top: 10px;
}

/* Стили для модалки с показом фильма*/
  .modal_overlay {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0, .7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
  }
  .my_modal {
    background-color: white;
    padding: 20px;
    width: 100%;
    max-width: 500px;
    height:80%;
    overflow: auto;
    text-align: center;
  }

  .modal__img {
    margin: auto;
    max-width: 350px;
    max-height: 500px;
    object-fit: cover;
  }

  .card-body {
    font-size: 18px;
    text-transform: capitalize;
  }

  .text--bold {
    font-weight: bold;
  }

  .btn__back {
    width: 100px;
    height: 50px;
  }

  h4.card-title {
    font-size: 24px;
    margin: 10px 0;
  }

  .card__text--margin {
    margin-bottom: 10px;
  }

  .modal__descr--list {
    text-align: left;
  }

  .movie__rating {
    font-size: 20px;
  }

  .error__alert {
    position: fixed;
    z-index: 1000;
    width: 100%;
    font-size: 24px;
    background-color: tomato;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
  }

  .error__text {
    color: white;
  }

  .blocked {
    display: none
  }

  .liked {
    color: red;
  }

  .not__liked {
    color: white;
  }

  .wrapper {
    width: 100%;
    height: 100%;
  }

  .bcg__img {
    background-image: url("image/bcg.png");

  }

  @media screen and (max-width: 1050px) {
     .movie__list {
        flex-wrap: wrap;
     }
     .movie__item {
      width: 220px;
     }
  }
</style>
