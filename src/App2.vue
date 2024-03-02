<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import LinksHeader from "./components/LinksHeader.vue";
import { users, apps, confSets } from "./data/secret-store.js";
import { ref } from "vue";

const currentUser = ref(users[0].name)
const showPermissionsToggle = ref(true)
const currentConfSet = ref({})
const checkedNames1 = ref([])
const checkedNames2 = ref([])

function confSetSelect(name) {
  currentConfSet.value = confSets[name];
}

function accessibleSets(sets) {
  let result = []
  const permissions = users.find((x) => x.name == currentUser.value).apps
  // const permissions = users
  console.log(permissions.map((x) => "^secrets/" + x.name.replaceAll("*", "[^/]*")))
  const filters = permissions.map((x) => new RegExp("^secrets/" + x.name.replaceAll("*", "[^/]*")))
  // const filters = [
  //   /^secrets\/[^/]*\/(dev|stg)\/[^/]*\/1\/[^/]*$/,
  //   // /^secrets\/[^/]*\/[^/]*\/[^/]*\/3\/[^/]*$/,
  // ]
  // const filters = [/^secrets\/[^/]*\/dev\/[^/]*\/[^/]*\/[^/]*$/]
  // const filters = [/^secrets.*/]
  for (const k of Object.keys(sets)) {
    // if (filters[0].test(k)) {
    if (filters.reduce((acc, curr) => acc || curr.test(k), false)) {
      result.push(k)
    }
  }
  return result
}
</script>

<template>
  <LinksHeader />
  <div id="user-panel">
    <div>
      <div style="text-align: center; margin-bottom: -2em;">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
          <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
        </a>
      </div>
      <label for="currentUser">Current User: </label>
      <select id="currentUser" v-model="currentUser">
        <option v-for="u in users" :value="u.name" v-bind:key="u.name">{{ u.name }}</option>
      </select>
      &nbsp;<label for="showPermision">Show Permissions</label>
      <input type="checkbox" id="showPermision" value="show-permissions" v-model="showPermissionsToggle" />
    </div>
    <span v-if="showPermissionsToggle">Access: {{ users.find((x) => x.name == currentUser).apps }}</span>
  </div>

  <div class="action-bar">
    <input type="button" value="act1" />
    <input type="button" value="act2" />
    <input type="button" value="act3" />
    <input type="text" value="text3" />
    <input type="text" value="text3" placeholder="something" />
    <input type="button" value="act4" />
  </div>
  <div id="var-browser">
    <div id="confsets-list">
      <ul>
        <li v-for="index in accessibleSets(confSets)" :key="index" @click="confSetSelect(index)">{{ index }}</li>
      </ul>
    </div>
    <div id="confset-details">
      <div class="action-bar" style="justify-content: center;">
        <input type="text" value="" placeholder="key" />
        <input type="text" value="" placeholder="value" />
        <label for="secret-toggle">Secret:&nbsp;</label>
        <input id="secret-toggle" type="checkbox" checked alt="is secret" />
        <input type="button" value="Add Parameter" />
      </div>
      <div v-for="(x, i) of currentConfSet" :key="i">{{ x }}</div>
    </div>
  </div>
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

@layer action-bar {
  .action-bar {
    display: flex;
    padding: 5px;
    color: white;
  }

  .action-bar input {
    margin: 0 0.5em 0 0;
  }
}

@layer confSets {
  #confsets-list li {
    list-style: none;
  }

  #confsets-list li:hover {
    text-decoration: underline;
  }
}

@layer variable-browser {
  #var-browser {
    display: flex;
    border: 1px solid gray;
  }

  #confsets-list {
    border: 2px solid white;
    width: 20em;
    overflow: auto;
    /* max-height: 300px; */
  }

  #confset-details {
    /* border: 2px solid teal; */
    width: 50em;
    overflow: auto;
  }

  #user-panel {
    border: 1px solid grey;
    padding: 0.1em;
    margin-bottom: 0.5em;
    text-align: right;
  }

  #user-panel span {
    padding-left: 2em;
  }
}
</style>
