export type RetStateType<T> = [
  T | undefined,
  React.Dispatch<React.SetStateAction<T | undefined>>
];
