<template>
    <button class="btn">
        <!-- слот необходим для отображения содержимого элемента -->
        <slot> 

        </slot>
    </button>
</template>

<script>
    export default {
        name: "MyButton"
    }
</script>

<style scoped>
    .btn {
        margin: 15px;
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