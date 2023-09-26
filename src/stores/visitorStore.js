import { defineStore } from "pinia"

export const useVisitorStore = defineStore("visitor", {
    state: () =>({
        userData: JSON.parse(localStorage.getItem('data')) || [],
        staffMembers:  [
            { value: 'Prashant', label: 'Prashant', image: 'logo.png'},
            { value: 'Hitesh', label: 'Hitesh', image: 'logo.png' },
            { value: 'Sushil', label: 'Sushil', image: 'logo.png' }
          ]
    }),
    getters: {
        getVisitors(){
            return this.userData
        },
        getStaffMembers(){
            return this.staffMembers
        }
    },
    actions: {
        setVisitors(data){
            localStorage.setItem('data', JSON.stringify(data))
        },
        updateVisitor(id , data){
           let user_data = this.userData.find(val => val.id == id)
           let keys = Object.keys(data)
           let values = Object.values(data)
           keys.forEach((x ,y)  => {
            user_data[x] = values[y]
           })
           this.userData.push(user_data)

           this.userData.forEach(x => {
            if(x.id == id){
                this.userData.splice(x.id, 1)
            }
           })
           this.setVisitors(this.userData)
           
        },
       
    }

})