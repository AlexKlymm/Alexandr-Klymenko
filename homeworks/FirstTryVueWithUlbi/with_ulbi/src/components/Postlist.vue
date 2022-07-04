<template>
    <!-- Лучше всего создават какой-то корневой компонент -->
    <div v-if="posts.length > 0">
    <!-- 
        Есть две опции для условной отрисовки DOM-дерева:
            1) v-if, v-else-if, v-else - обычные условия, которые использует Vue для создания
            опций, при которых должен будет появляться или исчезать элеиент, либо же любая иная операция. 
            Естественно данные условия использует НЕ ТОЛЬКО для отображения либо же скрытия некоторы
            элементов DOM-дерева.
            Пример: <div v-if="posts.length > 0">
                        *content*
                    </div>
                    <h2 v-else> some content </h2>
            
            2) v-show - позволяет скрывать и показывать элементы DOM-дерева при выполнениии контекста. 
            Пример:  <div v-show="posts.length > 0">
                        *content* 
                    </div>
                    <h2 v-show="posts.length === 0"> some content </h2>
     -->
        <h3>Список постов</h3>
        <!-- 
            :key="id" нужен для того, чтобы находить элементы и использовать их за их уникальным id.
            В данном случае для удаления элемента мы используме его ключ, который равен его id
            и ВНИМАНИЕ != его индексу в массиве.
            @remove="$emit('remove', post)" - событие, которое удаляет пост и передает его дальше.
        -->
        <Postitem 
        :post="post"
        v-for="post in posts"
        :key="post.id"
        @remove="$emit('remove', post)"/>
    </div>
    <h2 v-else>
        Список постов пуст.
    </h2>
</template>

<script>
    import Postitem from "@/components/Postitem"
    // в данном случае компонент ожидает прибытия постов в цикл
    // как аргументов, т.е props'ов
    export default {
    props: {
        // пропсы в дочернем компоненте изменять нельзя
        // описываем, что сюда придет
        posts: {
            // тип
            type: Array,
            // тут указываем, что это обязательный пропс
            required: true
        }
    },
    components: { Postitem }
}
</script>

<style scoped>
    .form {
        display: flex;
        flex-direction: column;
    }

    h2{
        color: darkred;
    }
</style>