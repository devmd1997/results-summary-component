import ResultsList from "./ResulstsList";
import { ResultDescription } from "./ResultDescription";
import * as ItemStories from '../stories/ResultsListItem.stories'
import { composeStories } from '@storybook/react';

const {Reaction, Memory, Verbal, Visual} = composeStories(ItemStories);

export default function ResultsCard({scores}) {
    const avgScore = scores.reduce((acc, score) => acc + score, 0) / scores.length;
    return (<div className="bg-white md:rounded-[32px] flex flex-col md:flex-row max-md:gap-3 w-full md:w-fit">
        <ResultDescription avgScore={Math.floor(avgScore)} />
        <div className="flex flex-col w-full md:w-43.5 gap-3 px-4 md:py-5">
            <h1 className="text-preset-5-bold md:text-preset-4 text-navy-950">Summary</h1>
            <ResultsList>
                <Reaction score={scores[0]} />
                <Verbal score={scores[1]}/>
                <Memory score={scores[2]}/>
                <Visual score={scores[3]}/>
            </ResultsList>
            <button className="w-full text-center h-7 bg-navy-950 text-navy-50 text-preset-5-bold rounded-[128px]">Continue</button>
        </div>
    </div>)
}