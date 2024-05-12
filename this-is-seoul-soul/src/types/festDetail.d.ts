export type FestDetailType = {
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
    continue: boolean,
    heart: boolean,
    tag: { tag: int, cnt: int }[] | null
}

export type ReviewType = {
    reviewSeq: number,
    nickName: string,
    mbti: string,
    content: string,
    point: number,
    imgUrl: string[],
    tag: number[],
    mine: boolean
}

export type ReviewTagsType = {
    total: number,
    tag: { tag: number, cnt: number }[]
}

export type ReviewRegisterType = {
    content: string,
    point: number,
    // imgUrl: string[],
    tag: number[],
    festSeq: number,
    [key: string]: string | number | number[]; 
}

export type FestReivewParamType = {
    festSeq: number,
    sort: number,
    page: number,
    limit: number
}