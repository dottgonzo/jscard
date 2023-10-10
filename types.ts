export type TCARD = {
  version: string;
  firstName?: string;
  secondName?: string;
  fullName?: string;
  org?: string[];
  title?: string;
  photo?: {
    url: string;
    mediaType: string;
  }[];
  email?: {
    type: string;
    value: string;
    label: string;
  }[];
  tel?: {
    type: string;
    value: string;
    label: string;
  }[];
  address?: {
    type: string;
    value: string;
    label: string;
  }[];
};
