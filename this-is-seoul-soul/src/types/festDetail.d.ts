export type festDetail = {
    festSeq: int,
    title: string,
    codename: string,
    guname: string,
    place: string,
    useTrgt: string,
    isFree: string,
    useFee: string,
    startDate: string,
    endDate: string,
    lot: double,
    lat: double,
    orgLink: string,
    mainImg: string,
    avgPoint: double,
    cntReview: int,
    isContinue: boolean,
    isHeart: boolean,
    tag: [ { tag: int, cnt: int } ]
}

export type reviewTagList = {
    total: number,
    tag: { tag: number, cnt: number }[]
}