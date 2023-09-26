<template>
  <div class="modal" v-if="showModal">
    <div class="modal-body">
      <button @click="emit('close')" type="button" class="close-btn">x</button>
      <h2 class="modal-title">Do you want any Drinks or Snacks?</h2>

      <div class="modal-body-item">
        <div v-for="item in snacks" :key="item">
          <label>
            <input type="checkbox" :value="item" v-model="selectedSnack" />
            <label :for="item">{{ item }}</label>
          </label>
        </div>
      </div>

      <div class="modal-footer">
        <button @click="submit" class="btn btn-success">Submit</button>
      <button @click="closeModal" class="btn btn-danger">Close</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from "vue";
import { useRouter } from "vue-router";
const props = defineProps({
  showModal: Boolean,
});
console.log(props);
const router = useRouter();
const emit = defineEmits(["close", "hadSnack"]);
const snacks = ["Water", "Tea", "Coffee"];
const selectedSnack = ref([]);

function closeModal() {
  router.push({ name: "thanks-page" });
  emit("close");
}
function submit() {
  emit("hadSnack", selectedSnack.value);
  router.push({ name: "thanks-page" });
}
</script>

<!-- <style scoped>
  
  </style> -->
