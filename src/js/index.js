import Search from './modules/Search';
import * as searchView from './views/searchViews';
import { elements } from './views/base';

//Global state of the app
//Search object
const state = {};

const controlSearch = async () => {
    //1) Get query from the view
    const query = searchView.getInput(); 
    //console.log(query);

    if (query) {
        //2) New serach object + add it to state
        state.search = new Search(query);

        //3) Prepare UI for results
        searchView.clearInput();
        searchView.clearResult();

        //4) Search for recipes
        await state.search.getResults();

        //5) Render results on UI
        //console.log(state.search.result);
        searchView.renderResults(state.search.result);
  
    }
};

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

//const search = new Search('pizza');
//console.log(search);
//search.getResults();