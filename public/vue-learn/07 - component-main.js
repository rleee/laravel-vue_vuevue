Vue.component('task-list', {
    template: `
        <div>
            <task v-for="task in tasks">{{ task.description }}</task>
        </div>
    `,
    data(){
        return {
            tasks: [
                { description: 'Jalan-jalan sama mama', completed: false },
                { description: 'Finish screen cast', completed: false },
                { description: 'Make decision', completed: true },
                { description: 'Master web developemnt', completed: false },
                { description: 'Clean room', completed: true },
            ]
        }
    }
});

Vue.component('task', {
    template: '<li><slot></slot></li>'
});

new Vue({
    el: '#root'
});