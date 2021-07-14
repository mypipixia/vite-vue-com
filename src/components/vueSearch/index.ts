import vueSearch from './src/vueSearch.vue';

vueSearch.install = (app: any) => {
    app.component(vueSearch.name, vueSearch)
}

export default vueSearch