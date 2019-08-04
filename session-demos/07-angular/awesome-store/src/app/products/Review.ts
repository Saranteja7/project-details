export default interface IReview {
    id?: number,
    createdDate?: string,
    reviewer: string,
    productId?: number,
    starRating: 1 | 2 | 3 | 4 | 5,
    title: string,
    text: string
};