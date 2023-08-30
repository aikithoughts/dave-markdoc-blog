import Question from "../../components/Question";

export const question = {
    render: Question,
    attributes: {
        question: {
            type: String,
            required: true,
        },
        answer: {
            type: String,
            required: true,
        },
        choices: {
            type: Array,
            required: true,
        }
    },
};