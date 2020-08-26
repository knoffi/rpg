import { association } from "./Adjectives";
export enum buttonStyle {
  used = "#54cf3c",
  notUsed = "#f24545",
}

export interface buttonStatus {
  name: association;
  background: buttonStyle;
}

export const toggleButtonStatusBG = (buttonStatus: {
  name: string;
  background: buttonStyle;
}) => {
  if (buttonStatus.background === buttonStyle.used) {
    buttonStatus.background = buttonStyle.notUsed;
  } else {
    buttonStatus.background = buttonStyle.used;
  }
};
export const getStatuses = () => {
  return Object.values(association).map((entry) => {
    return { name: entry, background: buttonStyle.notUsed };
  });
};
