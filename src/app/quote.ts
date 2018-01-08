export class Quote {
    constructor(public id: number, public authorName: string, public quoteContent: string,
        public upVote: number, public downVote: number, public creationTime: Date) {}
}
