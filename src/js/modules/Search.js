import axios from 'axios';

export default class Search {
    constructor(query){
        this.query = query;
    }

async getResults(){
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const key = 'ad839287dc992e64760dcc33ab9298b5';

    try{
    const res = await axios(`${proxy}http://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
    this.result = res.data.recipes;
    //console.log(this.result);
    } catch(error){
        alert(error);
    }
}}
