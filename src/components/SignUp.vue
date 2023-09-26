<template>
  <div>
    <h1>Sign In</h1>
    <form @submit.prevent="validation">
        <input v-model="data.name" placeholder="Name" /> <br><br>
        <input v-model="data.mobile" maxlength="10" minlength="10" placeholder="Mobile" /><br><br>
        <textarea v-model="data.address" placeholder="Address" /><br><br>
        <button type="submit">Save</button>
    </form>
    <ul class="errors" >
        <div v-for="item in error" :key="item" class="error_items">{{item}}</div>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import {  useRouter } from 'vue-router';
import {useVisitorStore} from '../stores/visitorStore'

const router = useRouter()
const vStore = useVisitorStore()

const data = ref({
  id: 0,
  name: '',
  mobile: '',
  address: ''
})
const error = ref([])

const loadFromStore = () => {
  const oldData = vStore.getVisitors
  const ids = oldData.map(item => item.id)
  data.value.id = Math.max(...ids, 0) + 1
}

const validation = () => {
  error.value = [];

  for (let item in data.value) {
    if (data.value[item] === "") {
      error.value.push(`${capitalize(item)} is required`);
    }
  }

  if (error.value.length === 0) {
    saveInfo();
  } else {
    console.log(error.value);
  }
};


const saveInfo = () => {
  const totalData = vStore.userData
  totalData.push({ ...data.value })
  vStore.setVisitors(totalData)
  router.push({name : 'dashboard' , query : {id : data.value.id}})

  data.value = {
    id: data.value.id + 1,
    name: '',
    mobile: '',
    address: ''
  }
}
function capitalize(input) {
  return input.charAt(0).toUpperCase() + input.slice(1);
}

onMounted(loadFromStore)
</script>

<style>
.errors{
    
    color: red;
}
.errors .error_items{
    justify-content: center;
}
</style>
