<!-- У нас есть несколько секций. Например: -->
<!-- 
    <template>
        Тут мы пишем нашу html разметку по кирпичику.
        Условно - это шаблон/структура нашего компонента.
    </template>

    <script>
        Тут мы описыванием: функции, объявляем данные и т.д.
        Важный момент: мы по дефолту должны экспортировать объекта.
        По сути этот объект и будет являться компонентом.
        export default {
            все остальное - синтаксический сахар
        }
    </script>
 -->
<template>

    <div class="app">
        <h1>Страница с постами.</h1>
        <MyButton
        @click="showDialog"
        >
            Создать пост.
        </MyButton>
        <MyDialog :show="dialogVisible">
            <Postform 
            @create="createPost"/>
        </MyDialog>
        <!-- подписываемся на событие, которое лежит в Postform -->
        <!-- <Postform 
        @create="createPost"/> -->
        <!-- <Postlist v-bind:posts="posts"/> -->
        <!-- указываем вместо v-bind знак :
        это сокращенный вариант -->
        <Postlist 
        :posts="posts"
        @remove="removePost"/>
    </div>

    <!-- Компонент успешко создан, т.к все работает
    
    <div class="app">
        <div>
            <form class="form" @submit.prevent>
                <h4>Создание поста</h4>
                v-bind позволяет связывать элементы друг с другом
                 @input="title = $event.target.value" еще один оптимальный вариант 
                синхронизировать получение данных с инпута 
                <input 
                v-bind:value="title" 
                @input="title = $event.target.value" 
                type="text" 
                class="input" 
                placeholder="Название">
                    @input="" - обработчик ивента
                <input 
                v-bind:value="body" 
                @input="body = $event.target.value" 
                type="text" 
                class="input" 
                placeholder="Описание">
                <button class="btn" @click="createPost">Добавить пост</button>
            </form>
        </div>

        <div>
            В цикле v-for указываем один отдельно взятый 
            элемент итерации (post), после чего через оператор in
            мы указываем откуда именно мы этот post получаем. 
            В этом случае из массива (posts)
            <div class="post" v-for="post in posts">
                <div><strong>Название</strong> {{post.title}}</div>
                <div><strong>Описание</strong> {{post.body}}</div>
            </div>
        </div>
    </div>


 -->

    <!-- <div>
        <div>
            Тут мы учимся изменять наши модели динамически
            <button @click="addLike">Likes</button>
            <button v-on:click="addLike" - это старый 
            метод объявления события >Likes</button>

            <button @click="addDisLike">Dislikes</button>
            Поведение этих кнопок называется "реактивностью",
            т.к. вызывает в них какое либо действие
        </div>
        <div>Кол-во лайков: <strong>{{ likes }}</strong></div>
        <div>Кол-во дизлайков: <strong>{{ dislikes }}</strong></div>
        для того чтобы связать этот див с моделью likes 
            существует специальный синтаксис, который 
            называется - интерполяция. 
            Создаются две фигурные скобки:
            {{ и уже внутри мы обращаемся к модели }}
        Модель - объект, который возвращает date()
    </div> -->

</template>

<script>
    import Postform from "@/components/Postform"
    import Postlist from "@/components/Postlist"
import MyButton from "./components/UI/MyButton.vue"
    /* Вот тут мы объявляем экспорт объекта по умолчанию */
    export default {
        components: {
    Postform,
    Postlist,
    MyButton
},
        data() {
            return {
                posts: [
                    {
                        id: 1,
                        title: 'JavaSript',
                        body: 'Описание'
                    },
                    {
                        id: 2,
                        title: 'JavaSript 2',
                        body: 'Описание 2'
                    },
                    {
                        id: 3,
                        title: 'JavaSript 3',
                        body: 'Описание 3'
                    },
                    {
                        id: 4,
                        title: 'About me',
                        body: 'Some desctiption about my life'
                    }
                ],
                dialogVisible: false
                /*
                title: '',
                body: ''
                */
                // likes: 0,
                // dislikes: 0 
            }
        },
        /* функции объявляются в поле methods у компонента: */
        methods: {
            // выводим аргументы, которые получаем с @create
            createPost(post) {
                this.posts.push(post)
            },
            removePost(post) {
                /* 
                    Тут я создал метод, который получает post, который приходит:
                    с Postitem > Postlist > App и возвращаю новый массив постов благодаря 
                    методу filter(), который собственно и возвращает массив.
                    Затем я перезаписываю массив указываю ,что сюда попадаю только те посты,
                    id которых != полученному (переданному) посту.
                    Остается тоько это события прослушать в Postlist.
                */

                /* this.posts = this.filter(p => p.id !== post.id) - ЭТО НЕПРАВИЛЬНО!! 
                    Тут я забыл указать сам массив к которому я должен обратиться.
                    И на выходе я получаю, то что обращаюсь к шлобальному объекту export default 
                    и хочу его перебрать, но не выходит, так как это не массив и тем более
                    это не правильно и я не нуждаюсь в этом.
                */
               this.posts = this.posts.filter(p => p.id !== post.id)
               /*
                Тут все верно! Я обращаюсь к this.posts (ПОСТЫ в ЭТОМ глобальном ОБЪЕКТЕ)
                и прирасваиваю (перезаписываю) массиву новое значение путем возвращения 
                отфильтровааного массива: this.posts.filter(p => p.id !== post.id), а сам принцип
                по-которому я фильтрую массив выглядит так: я обращаюс к глобальному объекту (this),
                нахожу в нем массив постов (posts) вызываю метод filter() и говорю, что как атрибут
                туда будет приходить p (простой и обычный post в массиве posts), затем вызываю срелочную
                функцию, где указываю КАКИЕ ИМЕННО ПОСТЫ СЮДА ПРИДУТ. 
                В данном случае те p.id, которых !== post.id. Т.е внутри фильтра это выглядит так:
                filter(p => p.id !== post.id), где p - обычный пост в массиве, а post это элемент,
                который я передаю еще с Postitem > Postlist > App и который принимает сам метод, как аргумент.
               */
            },
            showDialog() {
                this.dialogVisible = true;
            }
            /*
            createPost() {
                const newPost = {
                    id: Date.now(), // у объекта должен быть уникальный id
                    title: this.title,
                    body: this.body
                }
                this.posts.push(newPost);
                this.title = "";
                this.body = "";
            },
            */  
            /*
            inputTitle(event) {
                // берем значение с value инпута, который в таргете, а 
                // event тут это событие, которое отслеживается при операции
                // с выбранным таргетом
                this.title = event.target.value
            }
            */
            // addLike() {
            //     /* add likes */
            //     this.likes += 1
            // },
            // addDisLike() {
            //     /* add dislikes */
            //     this.dislikes += 1
            // }
        }
    }
</script>

<style>
/* scoped - дает возможность применять 
    стили только к этому компоненту  */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .app {
        padding: 20px;
    }
</style>