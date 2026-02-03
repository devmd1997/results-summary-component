import ResultsListItem from "../components/ResultsListItem";
import iconReaction from "../assets/images/icon-reaction.svg";
import iconMemory from "../assets/images/icon-memory.svg";
import iconVerbal from "../assets/images/icon-verbal.svg";
import iconVisual from "../assets/images/icon-visual.svg";

import '../App.css';

export default {
    title: 'ResultsListItem',
    component: ResultsListItem,
    tags: ['autodocs'],
    argTypes: {
        score: {type: 'number', defaultValue: 0}
    }
}

const Template = args => <ResultsListItem {...args} />

export const Reaction = Template.bind({});
export const Memory = Template.bind({});
export const Verbal = Template.bind({});
export const Visual = Template.bind({});

Reaction.args = {
    category: 'Reaction',
    icon: iconReaction,
    color: 'red',
}

Memory.args = {
    category: 'Memory',
    icon: iconMemory,
    color: 'yellow'
}

Verbal.args = {
    category: 'Verbal',
    icon: iconVerbal,
    color: 'green'
}

Visual.args = {
    category: 'Visual',
    icon: iconVisual,
    color: 'blue'
}

