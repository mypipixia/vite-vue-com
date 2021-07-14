
import VueCard from './vueCard/index';
import VueSearch from './vueSearch/index';
const components = [
   VueCard,
   VueSearch
];
function install(app: any) {
    components.forEach((component) => {
        app.component(component.name, component)
    })
}
export default {
    install
}
