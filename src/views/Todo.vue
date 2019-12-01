<template>
  <div class="todo">
    <container class="u-max-width-sm">
      <row>
        <Navigation />

        <main>
          <h1>You need to...</h1>
          <input v-model="task" type="text" placeholder="what do you need to do?" />
          <button v-on:click="saveTodo" :disabled="addDisabled">+</button>

          <div v-for="(todo, index) in todos" v-bind:key="index">
            <p>{{todo.title}}</p>
            <p>@{{todo.time.toTimeString().split(' ')[0].slice(0, -3)}}</p>
            <button v-on:click="deleteTodo(todo)">-</button>
          </div>
        </main>
      </row>
    </container>
  </div>
</template>

<script>
// @ is an alias to /src
import Container from "@/components/layout/Container";
import Row from "@/components/layout/Row";
import { log } from "util";
import idb from "../utils/idb";
import Navigation from "@/components/Navigation";
export default {
  name: "todo",

  components: {
    Container,
    Row,
    Navigation
  },

  data() {
    return {
      task: "",
      todos: [],
      addDisabled: false
    };
  },

  methods: {
    updateTodos: async function() {
      await this.$store.dispatch("getItems");
      this.getTodosFromStore;
    },

    saveTodo: async function(event) {
      console.log(
        new Date()
          .toTimeString()
          .split(" ")[0]
          .slice(0, -3)
      );

      const task = {
        id: new Date()
          .toTimeString()
          .split(" ")[0]
          .slice(0, -3),
        title: this.task,
        time: new Date()
      };
      console.log("about to add " + JSON.stringify(task));
      await this.$store.dispatch("saveItem", task);
      await this.updateTodos();
    },
    deleteTodo: async function(todo) {
      await this.$store.dispatch("deleteItem", todo);
      this.updateTodos();
    }
  },

  props: {},

  // Components are ready to get data.
  // # Action gets started with dispatch.
  async created() {
    await idb.getDb();
    await this.updateTodos();
    // await this.$store.dispatch("getItemById", "04:06:08");
  },

  // #2 State gets rendered and is callable with computed function thats calls the store.
  computed: {
    getTodosFromStore: function() {
      this.todos = this.$store.state.todos;
    }
  }
};
</script>

<style lang="scss">
.c-nav {
  display: flex;
  justify-content: flex-end;
}
p {
  margin-bottom: 0;
}
</style>



