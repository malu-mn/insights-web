export interface IEmailModel {
    email: string;
    message: string;
    name: string;
}

export enum EmailStatus {
    NotStarted = 0,
    InProgress = 1,
    CompletedSuccessfully = 2,
    Failed = 3
}