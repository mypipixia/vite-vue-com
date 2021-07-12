import vueCard from './vueCard/index'
const components = [vueCard]

function install(app: any) {
    components.forEach((component) => {
        app.component(component.name, component)
    })
}

export default {
    install
}