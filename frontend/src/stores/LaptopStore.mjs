import { defineStore } from 'pinia'
import { http } from '@utils/http.mjs'

export const useLaptop = defineStore('laptop-store', {
  state() {
    return {
      rawLaptops: [],
      filter: null
    }
  },
  actions: {
    async getLaptops() {
      let resp = await http.get('/laptops?_expand=model');
      this.rawLaptops = resp.data.data;
    },
    async getLaptop(id){
      return await http.get(`/laptops/${id}?_expand=model`);
    },
    async createLaptop(laptop){
      let created = await http.post('/laptops?_expand=model', laptop); 
      this.rawLaptops.push(created);
    },
    async updateLaptop(id, laptop){
      await http.put(`/laptops/${id}?_expand=model`, laptop);
      let toUpdate = this.rawLaptops.find((laptop) => laptop.id === id); 
      this.rawLaptops.splice(this.rawLaptops.indexOf(toUpdate), 1, laptop);
    },
    async deleteLaptop(id){
      await http.delete(`/laptops/${id}?_expand=model`);
      let toDelete = this.rawLaptops.find((laptop) => laptop.id === id); 
      this.rawLaptops.splice(this.rawLaptops.indexOf(toDelete), 1);
    }
  },
  getters: {
    laptops() {
      if(this.filter == null){
        return this.rawLaptops;
      }
      return this.rawLaptops.filter((laptop) => laptop.modelId === filter);
    }
  }
})
