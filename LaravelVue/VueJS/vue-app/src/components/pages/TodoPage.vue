<template>
    <div class="container">
        <div v-if="this.loaded == true">
            <h1>{{ this.title }}</h1>
            <p>{{ this.body }}</p>
            <router-link to="/" class="btn btn-primary">Back</router-link> 
        </div>
        <div class="d-flex justify-content-center" v-if="this.loaded == false">
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default{
        data(){
            return {
                id: this.$route.params.id,
                title: null,
                body: null,
                loaded: false
            }
        },

        created(){
            this.fetchTodoData(this.id);
        },

        methods: {
            fetchTodoData(id){
                axios.get("http://localhost:8000/api/todo/" + id)
                .then(response => { 
                    this.title = response.data.data.title,
                    this.body = response.data.data.body,
                    this.loaded = true
                })
            }
        }
    }


</script>