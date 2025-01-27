import { defineStore } from 'pinia'
import { http } from '@utils/http.mjs'

export const useModel = defineStore('model-store', {
  state() {
    return {
      models: []
    }
  },
  actions: {
    async getModels() {
      let resp = await http.get('/models');
      this.models = resp.data.data;
    },
    async getModel(id){
      return await http.get(`/models/${id}`);
    },
    async createModel(model){
      let created = await http.post('/models', model); 
      this.models.push(created);
    },
    async updateModel(id, model){
      await http.put(`/models/${id}`, model);
      let toUpdate = this.models.find((model) => model.id === id); 
      this.models.splice(this.models.indexOf(toUpdate), 1, model);
    },
    async deleteModel(id){
      await http.delete(`/models/${id}`);
      let toDelete = this.models.find((model) => model.id === id); 
      this.models.splice(this.models.indexOf(toDelete), 1);
    }
  },
  getters: {
    modelOptions() {
      var options = {};
      for(let model of this.models){
        options[model.id] = model.name;
      }
      return options;
    }
  }
})
