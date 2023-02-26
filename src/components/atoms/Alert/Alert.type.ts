export enum AlertType {
  SUCCESS,
  WARNING,
  ERROR
}

export interface AlertProps {
  message: string;
  readonly type: AlertType;
}
