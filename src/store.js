import { createStore } from "redux";
import { rootReducer } from "./redux/rootReducer";

export let initialState = [
    {
        source: {
            id: null,
            name: "CBS Sports",
        },
        author: "Jordan Dajani",
        title: "Bills vs. Titans score: Josh Allen, Buffalo make statement in blowout win over Tennessee in prime time - CBS Sports",
        description: "Buffalo's season is off to a blazing start",
        url: "https://www.cbssports.com/nfl/news/bills-vs-titans-score-josh-allen-buffalo-make-statement-in-blowout-win-over-tennessee-in-prime-time/live/",
        urlToImage:
            "https://sportshub.cbsistatic.com/i/r/2022/09/20/dd24274c-c018-4d43-b7c6-8652b866d2e4/thumbnail/1200x675/6f43408ad4c0083afa7746a99b4df35b/josh-allen.jpg",
        publishedAt: "2022-09-20T02:39:00Z",
        content:
            "In a battle of AFC heavyweights, the Bills delivered a knockout Monday night while sending an emphatic message to the rest of the NFL. In posting an 41-7 victory over the visiting Titans, the Bills m… [+4289 chars]",
    },
    {
        source: {
            id: null,
            name: "CBS Sports",
        },
        author: "Jordan Dajani",
        title: "Bills vs. Titans score: Josh Allen, Buffalo make statement in blowout win over Tennessee in prime time - CBS Sports",
        description: "Buffalo's season is off to a blazing start",
        url: "https://www.cbssports.com/nfl/news/bills-vs-titans-score-josh-allen-buffalo-make-statement-in-blowout-win-over-tennessee-in-prime-time/live/",
        urlToImage:
            "https://sportshub.cbsistatic.com/i/r/2022/09/20/dd24274c-c018-4d43-b7c6-8652b866d2e4/thumbnail/1200x675/6f43408ad4c0083afa7746a99b4df35b/josh-allen.jpg",
        publishedAt: "2022-09-20T02:39:00Z",
        content:
            "In a battle of AFC heavyweights, the Bills delivered a knockout Monday night while sending an emphatic message to the rest of the NFL. In posting an 41-7 victory over the visiting Titans, the Bills m… [+4289 chars]",
    },
];

export const store = createStore(rootReducer, initialState);

window.store = store
