<template>
    <div class="post">
        <div>
            <div><strong>Название</strong> {{post.title}}</div>
            <div><strong>Описание</strong> {{post.body}}</div>
        </div>
        <div class="post__btns">
            <!-- 
                Когда мы используем циклы всегда надо надо какждому отдельному эл. уник. id.
                На клик тут удаляем пост и передаем его дальше.
            -->
            <MyButton
            @click="$emit('remove', post)"
            >
            Удалить
            </MyButton>
        </div>
    </div>
</template>

<script>
    // import MyButton from '@/components/UI/MyButton'
    export default {
    props: {
        // объявляем пропсы, где говорим, что придет тип данных объект
        // и говорим, что этот пропс обязателен
        post: {
            type: Object,
            required: true
        }
    }
    /* components: { MyButton } */ 
}
</script>

<style scoped> 
    .post {
        padding: 15px;
        border: 2px solid teal;
        margin-top: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>