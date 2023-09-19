export enum LEVELS {
    "INFO",
    "URGENT",
    "BLOKING"

}

export interface ITask {
    title: string,
    description: string,
    complete: boolean,
    level: LEVELS
}