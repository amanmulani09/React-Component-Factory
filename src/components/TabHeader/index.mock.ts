export type tabHeader = {
    title:string;
    desc:string;
    primaryColor:string;
}
export type tabHeaderMap = {
    tabData:tabHeader[]
}

export const mockTabData:tabHeaderMap =  {
    "tabData":[
        {
            "title":"London",
            "desc":"London is the capital city of England.",
            "primaryColor":"#f44336"
        },
        {
            "title":"Paris",
            "desc":"Paris is the capital of France.",
            "primaryColor":"#04AA6D"
        },
        {
            "title":"Tokyo",
            "desc":"Tokyo is the capital of Japan.",
            "primaryColor":"#f44336"
        },
        {
            "title":"Oslo",
            "desc":"Oslo is the capital of Norway.",
            "primaryColor":"#f44336"
        }
    ]
}