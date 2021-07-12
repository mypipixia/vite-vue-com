import vueCard from './src/vueCard.vue'

vueCard.install = (app: any) => {
    app.component(vueCard.name, vueCard)
}
export default vueCard;