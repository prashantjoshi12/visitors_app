<template>
  <div>
    <h1>Whom to visit ?</h1>
    <br /><br />
    <label for="reason">Select Name:</label>
      <div class="select_user">
        <Select2  v-model="selectPerson" :options="newOptions" :settings="{ settingOption: value, settingOption: value }" />
      </div>
      <h4>Selected Staff Member: {{ selectPerson }}</h4>
    <br /><br />

    <textarea
      v-model="textareaReason"
      rows="4"
      placeholder="Enter your reason"
    ></textarea>

    <br /><br />
    <button @click="submitReason" class="btn btn-success">Confirm</button>
    <Modal
      @hadSnack="hadSnack"
      :showModal="showModal"
      @close="showModal = false"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Modal from "./SnacksModal.vue";
import { useVisitorStore } from "../stores/visitorStore";
import Select2 from 'vue3-select2-component';
import { useRoute } from "vue-router";
const vStore = useVisitorStore();
const route = useRoute();
const selectPerson = ref("");
const textareaReason = ref("");
const showModal = ref(false);
let user_id = route.query.id;
let snacks = ref([])
const submitReason = () => {
  const reason = {
    host: selectPerson.value,
    reason: textareaReason.value,
    snacks : snacks.value
  };
  showModal.value = true;
  vStore.updateVisitor(user_id, reason);
};
function hadSnack(e) {
  snacks.value = e
  submitReason()
}


const newOptions  = [
            { id: 'Prashant', text: 'Prashant', image: 'logo.png'},
            { id: 'Hitesh', text: 'Hitesh', image: 'logo.png' },
            { id: 'Sushil', text: 'Sushil', image: 'logo.png' }
          ]
</script>

<style>
.modal {
    position: fixed;
    top:0;
    left: 0;
    background-color: rgba(0,0,0,0.6);
    overflow: hidden;
    width: 100%;
    height: 100%;
}
.modal-body {
    background: #fff;
    border: 1px solid #ccc;
    position: fixed;
    top: 50%;
    left: 50%;
    border-radius: 10px;
    padding: 20px;
    transform: translate(-50%,-50%);
}
.close-btn {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #000;
    color: #fff;
    /* font-weight: bold; */
    border: 2px solid #fff;
    box-shadow: 0 0 10px #505050;
    font-size: 20px;
    position: absolute;
    top: -15px;
    right: -15px;
    cursor: pointer;
}
.close-btn:hover {
    background-color: #c44444;
}
.btn {
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 3px;
    font-size: 14px;
    padding: 8px 20px;
    cursor: pointer;
}
.btn-success {
    background-color: green;
    border-color:green;
    color: #fff;
}
.btn-danger {
    background-color: red;
    border-color: red;
    color:#fff;
}
.modal-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top:20px;
}
.modal-title {
    margin: 0;
}
.modal-body-item {
    display: flex;
    padding-top: 40px;
    padding-bottom: 20px;
}
.modal-body-item>div {
    margin-right:10px;
}
.modal-body-item>div:last-child {
    margin-right: 0;
}
.select_user .select2-container {
    width: auto !important;
    min-width: 200px;
}
</style>