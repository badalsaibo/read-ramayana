export interface notifyInterface {
  text: string;
  timeout: number;
}

export interface NotifyContextInterface {
  notify: (param: notifyInterface) => void;
}
