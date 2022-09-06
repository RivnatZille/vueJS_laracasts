export default {
    template: `
        <button
            :class="{
                'border rounded px-5 py-2 m-2 disabled:cursor-not-allowed': true,
                'bg-blue-500 hover:bg-blue-700': type == 'primary'
                'bg-purple-300 hover:bg-purple-500': type == 'secondary'
                'bg-gray-200 hover:bg-gray-400': type == 'muted',
            }"
            :disabled="processing"
        >
            <slot/>
        </button>
    `,

    props: {
        type: {
            type: String,
            default: 'primary'
        },

        processing: {
            type: Boolean,
            default: false
        }
    },
}
