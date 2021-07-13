import VueCard from './vueCard/index';

const components = [
    VueCard
];

function install(app: any) {
    components.forEach((component) => {
        app.component(component.name, component)
    })
}

export default {
    install
}
