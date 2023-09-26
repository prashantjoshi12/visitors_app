<template>
    <div>
        <h1>
            <pre>
    Thanks to visit Us,
    Our representative will contact you soon
    Meanwhile you can enjoy your drinks and Snacks
            </pre>
        </h1>
        <DynamicTable :headers="tableHeaders" :data="tableData" />
    </div>
</template>
<script setup>
import { computed, ref } from "vue"
import {useVisitorStore} from '../stores/visitorStore'
import DynamicTable from './DynamicTable.vue';

const tableHeaders = ref(['ID', 'Name', 'Mobile', 'Address' , "Host", "Reason" , "Snacks"]);
const tableData = computed(()=>{
   return vStore.getVisitors 
}) 

const vStore = useVisitorStore()



</script>