<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import LinksHeader from "./components/LinksHeader.vue";
import {users, apps, confSets } from "./data/secret-store.js";

import { ref } from "vue";


const currentUser = ref(users[0].name)
const showPermissionsToggle = ref("show-permissions")
const checkedNames1 = ref([])
const checkedNames2 = ref([])
</script>

<template>
  <LinksHeader />
  <div id="user-panel">
    <div>
      <div style="text-align: center;">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
          <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
        </a>
      </div>
    </div>
  </div>

  <div class="action-bar">
    <input type="button" value="act1" />
    <input type="button" value="act2" />
    <input type="button" value="act3" />
    <input type="text" value="text3" />
    <input type="button" value="act4" />
  </div>
  <div id="var-browser">
    <div id="confsets-list">hello</div>
    <div id="confset-details">world</div>
  </div>
  <div>
    <div>Checked names 1: {{ checkedNames1 }}</div>
    <div>Checked names 2: {{ checkedNames2 }}</div>

    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames1" />
    <label for="jack">Jack</label>

    <input type="checkbox" id="john" value="John" v-model="checkedNames1" />
    <label for="john">John</label>

    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames1" />
    <label for="mike">Mike</label>

    <input type="checkbox" id="nick" value="Nick" v-model="checkedNames2" />
    <label for="nick">Nick</label>

    <input type="checkbox" id="hera" value="Hera" v-model="checkedNames2" />
    <label for="hera">Hera</label>
  </div>
  <div>
    <div v-for="(item, index) in checkedNames1" v-bind:key="index">
      {{ item }} - {{ index }}
    </div>
    <div v-for="item in checkedNames2">
      {{ item }}
    </div>
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

@layer variable-browser {
  #var-browser {
    display: flex;
    border: 1px solid red;
  }

  #confsets-list {
    border: 2px solid white;
    width: 20em;
    overflow: auto;
  }

  #confset-details {
    border: 2px solid teal;
    width: 50em;
    overflow: auto;
  }

  #user-panel {
    padding: 0.1em;
    margin-bottom: 0.5em;
    text-align: right;
  }

  #user-panel span {
    padding-left: 2em;
  }
}
</style>
