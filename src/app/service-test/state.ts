export enum Action {
  Low,
  Minor,
  Major,
}

export interface Model {
  message: string;
  action: Action;
}
