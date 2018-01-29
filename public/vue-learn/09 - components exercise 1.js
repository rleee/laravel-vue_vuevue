Vue.component('message', {
    props: ['title', 'body'],
    data() {
        return{
            isVisible: true
        }
    },
    template:`
       <article class="message" v-show="isVisible">
            <div class="message-header">
                {{ title }}
                <span><button @click="isVisible = false">x</button></span>
            </div>
            <div class="message-body">
                {{ body }}
            </div>
        </article>

    `,
    // methods: {
    //     hideComponent(){
    //         this.isVisible = false;
    //     }
    // }
    // can use this methods hideComponent, or can also set it inline seperti di atas
    // @click="isVisible = false"
});

new Vue({
    el: '#root'
});