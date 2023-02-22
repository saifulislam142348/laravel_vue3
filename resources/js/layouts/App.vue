<template>
    <div>
        <Router-link to="/home">Home</Router-link> <br>
        <Router-link to="/contact">Contact</Router-link> <br>
        <Router-link to="/data">Data insert</Router-link> <br>
        <Router-link to="/registration">Registration</Router-link> <br>
    </div>
    <Router-View></Router-View>
    <div class="input">
        <input type="text" v-model="name">
        {{ food }}
        <button @click="addfood">add</button>
        <li v-for="(food, index) in foods" :key="index">{{ food }}</li>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: ""
        }
    },
    computed: {
        add_food() {
           this.$store.dispatch("add_fruit",this.name)
        }


    },
    methods:{
        addfood(){
            console.log(this.food)

        }
    }

}
</script>
<style>
.input {
    border-color: red;
    padding: 10px;
    margin: 8px;
    text-align: center;
    font-size: 20px;
}
</style>