
export function ResultDescription ({avgScore}) {
    return (
        <div className="bg-linear-to-b from-[#7755FF] to-[#2F2CE9] flex flex-col w-full md:w-[338px] justify-center items-center rounded-b-[32px] md:rounded-[32px] gap-3 md:gap-4 px-7 py-4 md:px-8 md:py-5">
            <h2 className="text-preset-5-bold md:text-preset-4 text-navy-200">Your Result</h2>
            <div className="rounded-full size-17.5 md:size-25 flex flex-col justify-center items-center bg-linear-to-t from-[#2521C9] to-[#4D21C9]">
                <h1 className="text-preset-2 md:text-preset-1 text-white">{avgScore}</h1>
                <span className="text-preset-6-bold md:text-preset-5-bold text-navy-200/50">of 100</span>
            </div>
            <div className="flex flex-col items-center w-full gap-1">
                <h1 className="text-preset-4 md:text-preset-3 text-white">Great</h1>
                <p className="text-preset-6-bold md:text-preset-5-medium text-navy-200 text-center">{`You scored higher than 65% of the people who have taken these tests.`}</p>
            </div>
        </div>
    )
}