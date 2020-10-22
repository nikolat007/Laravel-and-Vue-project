<template>
  <div v-cloak class="container mb-5">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in todos" :key="item.id">
          <th scope="row">{{ item.id }}</th>
          <td><router-link :to="'/todo/' + item.id" class="">{{ item.title }}</router-link> </td>
          <td>
            <button class="btn btn-success btn-sm" v-on:click="updateTodo(item.id, item.title, item.body)">Update</button>
            <button class="btn btn-danger btn-sm mx-2" v-on:click="deleteTodo(item.id)">Remove</button>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-if="todos.length == 0">Nothing to display here</p>
    <div v-if="vErrors" class="alert alert-danger" role="alert">
      <div v-for="(data, index) in vErrors" :key="index">
        <p v-for="error in data" :key="error"> {{ error }} </p>
      </div>
    </div>  
    <form class="mt-5" @submit.prevent="handleSubmit">
      <div class="form-group">
        <label>Title</label>
        <input type="text" class="form-control" id="exampleInputTitle1" aria-describedby="TitleHelp"
          placeholder="Enter title" name="title" v-model="todo.title">
      </div>
      <div class="form-group">
        <label>Body</label>
        <input type="text" class="form-control" id="exampleInputBody1" placeholder="Enter body" name="body" v-model="todo.body">
      </div>
      <div class="form-group">
        <input type="text" class="form-control" id="exampleInputBody1" placeholder="Todo ID" name="body" v-model="todoId" disabled="true">
      </div>
      <p><b>Mode: <span class="text-success">{{ activeMode }}</span></b></p>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'Skills',
    data() {
      return {
        todos: [],
        todo: {
          title: "",
          body: ""
        },
        todoId: null,
        activeMode: "",
        vErrors: null
      }
    },

    mounted() {
      this.fetchData();
      this.showActiveMode();
    },
    

    methods: {
      fetchData() {
        axios.get("http://localhost:8000/api/todos")
          .then(response => {
            this.todos = response.data.data
          })
      },
      deleteTodo(id) {
        axios.delete("http://localhost:8000/api/todo/" + id)
          .then(response => {
            console.log(response)
          })
          .then(this.fetchData)   
      },
      updateTodo(id, title, body) {
        this.todoId = id;
        this.todo.title = title;
        this.todo.body = body;
        this.activeMode = "Update"
      },
      handleSubmit(){
        if(this.todoId == null){
          axios.post("http://localhost:8000/api/todo", this.todo)
          .then(response => console.log(response))
          .then(this.fetchData)
          .catch(err => {
            this.vErrors = err.response.data.errors;
            console.log(err.response.data.errors)
          })
          this.todo.title = "",
          this.todo.body = "",
          this.vErrors = null
        }
        else{
          axios.put("http://localhost:8000/api/todo/" + this.todoId, this.todo)
          .then(response => console.log(response))
          .then(this.fetchData)
          .catch(err => {
            this.vErrors = err.response.data.errors;
            console.log(err.response.data.errors)
          })
          this.todo.title = "",
          this.todo.body = "",
          this.todoId = null,
          this.activeMode = "Create",
          this.vErrors = null
        }
      },
      showActiveMode(){
        this.activeMode = "Create"
      }
      
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  [v-cloak] {
       display: none;
  }

</style>