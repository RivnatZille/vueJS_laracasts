import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: {
        AssignmentList,
        AssignmentCreate
    },

    template: `
        <section class="space-y-6">
            <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
            <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>
            
            <assignment-create @add="add"></assignment-create>
        </section>
        
    `,

    data() {
        return {
            assignments: [
                { id: 1, name: 'Finish Project', complete: false, tag: 'math' },
                { id: 2, name: 'Read Chapter 4', complete: false, tag: 'programming' },
                { id: 3, name: 'Turn In Homework', complete: false, tag: 'math' },
                { id: 4, name: 'Study VueJS', complete: false, tag: 'programming' },
                { id: 5, name: 'Play World of Warcraft', complete: false, tag: 'gaming' },
            ]
        }
    },

    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(assignment => ! assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete)
            };
        }
    },

    methods: {
        add(name) {
            this.assignments.push({
                id: this.assignments.length + 1,
                name: name,
                complete: false,
            });
        }
    }
}