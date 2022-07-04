<template>
        <div>
            <form class="form" @submit.prevent>
                <h4>Создание поста</h4>
                <!-- v-bind позволяет связывать элементы друг с другом
                 @input="title = $event.target.value" еще один оптимальный вариант 
                синхронизировать получение данных с инпута  -->
                <MyInput 
                v-model="post.title"
                type="text" 
                placeholder="Название"
                />
                    <!-- @input="" - обработчик ивента, либо же прослушивание события -->
                    <!-- 
                        тут мы связыванием через v-model="myAttr" либо же v-model:value="myAttr" input с определенным атрибутом, 
                        объектом и т.д, который же обрабатывается и перезаписывается с помощью
                        modelValue/value и updateInput. (см. MyInput)
                        -->
                <MyInput 
                v-model="post.body"
                type="text" 
                placeholder="Описание"
                />
                <!-- Все, что мы повесим на этот компонент 
                применяется к нему внутри -->
                <MyButton 
                class="addPost" 
                @click="createPost">Добавить пост</MyButton>
            </form>
        </div>
</template>

<script>
    // import MyButtons from "@/components/UI/MyButton"
    export default {
    data() {
        return {
            post: {
                title: "",
                body: ""
            }
        };
    },
    methods: {
        createPost() {
            this.post.id = Date.now();
            // использую генератор события emit, определяю событие create
            // и отдаю аргументом post, который находится в date().
            // связываю в родительском компоненте событие.
            this.$emit("create", this.post, "second param", "3 param");
            this.post = {
                title: "",
                body: ""
            };
        },
    },
}
</script>

<style scoped>
    .form {
        display: flex;
        flex-direction: column;
    }
    .post {
        padding: 15px;
        border: 2px solid teal;
        margin-top: 15px;
    }
    .addPost {
        align-self: flex-end;
    }
</style>