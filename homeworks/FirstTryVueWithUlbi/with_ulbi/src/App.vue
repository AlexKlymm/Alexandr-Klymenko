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
    <!-- Компонент успешко создан, т.к все работает -->
    
    <div class="app">
        <div>
            <form class="form">
                <h4>Создание поста</h4>
                <input type="text" class="input" placeholeder="Название">
                <input type="text" class="input" placeholeder="Описание">
                <button class="btn" @click="createPost">Добавить пост</button>
            </form>
        </div>

        <div>
            <!-- В цикле v-for указываем один отдельно взятый 
            элемент итерации (post), после чего через оператор in
            мы указываем откуда именно мы этот post получаем. 
            В этом случае из массива (posts) -->
            <div class="post" v-for="post in posts">
                <div><strong>Название</strong> {{post.title}}</div>
                <div><strong>Описание</strong> {{post.body}}</div>
            </div>
        </div>
    </div>




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
    /* Вот тут мы объявляем экспорт объекта по умолчанию */
    export default {
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


                ]

                // likes: 0,
                // dislikes: 0 
            }
        },
        /* функции объявляются в поле methods у компонента: */
        methods: {

            createpost() {
                
            }
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

    .form {
        display: flex;
        flex-direction: column;
    }

    .input {
        width: 100%;
        border: 1px solid teal;
        padding: 10px 15px;
        margin-top: 15px;
    }

    .post {
        padding: 15px;
        border: 2px solid teal;
        margin-top: 15px;
    }

    .btn {
        margin: 15px;
        align-self: center;
        padding: 10px 15px;
        background: none;
        border: 1px solid teal;
        color: teal;
        cursor: pointer;
    }

    .btn:hover, .input:hover {
        border-color: rgb(4, 61, 61);
        color: rgb(4, 61, 61);
    }

    .btn:focus, .input:focus {
        border-color: rgb(1, 12, 12);
        color: rgb(1, 12, 12);
    }
</style>