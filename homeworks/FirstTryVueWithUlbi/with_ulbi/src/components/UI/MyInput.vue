<template>
    <!-- 
        Через (bind):value="modelValue" я связываю инпут с пропсом modelValue.Т.е значение, 
        которое я получу будет указываться в props>modelValue. Я вешаю прослушку события
        на input (@input="modelValue (указываю тут метод, который будет работать с этим input'ом) "), 
        чтобы отслеживать за изменениями в этом инпуте.
    -->
    <input  :value="modelValue" @input="updateInput" class="input" type="text">
    <!-- <input  :value="value" @input="value" class="input" type="text"> -->
</template>

<script>
    export default {
        name: 'MyInput',
        props: {
            modelValue: [String, Number]
            // value: [String, Number]
        },
        methods: {
            updateInput(event) {
                /*
                    Обращаюсь через метод вызванный прослушиванием события к updateInput
                    и обновляю его значение указывая как аргумент функции $emit("uprops", newValue).
                    В этом случае я беру новое значение (newValue) из события (event), которое взять в цель (target).
                    Таким образом изменяется значение не только modelValue, но и v-model к которому мы это все привязали
                    (см. Postform)
                */
                // this.$emit('modelValue', event.target.value)
                // this.$emit('value', event.target.value)

                /* 
                    В данном случае я допустил ошибку, когда пытался перезаписать инпут в таргете.
                    Я забыл дописать update к первому аргументу, где мы указываем сам  пропс.
                */
               this.$emit('update:modelValue', event.target.value)
            }
        }
    }
</script>

<style>
     .input {
        width: 100%;
        border: 1px solid teal;
        padding: 10px 15px;
        margin-top: 15px;
    }

</style>
