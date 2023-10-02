import { Dispatch, SetStateAction } from "react";

type paramTypes = {
  from: string;
  to: string;
  setFrom: Dispatch<SetStateAction<string>>;
  setTo: Dispatch<SetStateAction<string>>;
  amount: number;
  convertedAmount: number;
  setAmount: Dispatch<SetStateAction<number>>;
  setConvertedAmount: Dispatch<SetStateAction<number>>;
};

export const swapCurrency = ({
  from,
  to,
  setFrom,
  setTo,
  amount,
  convertedAmount,
  setAmount,
  setConvertedAmount
}: paramTypes): void => {
  //
  setFrom(to);
  setTo(from);
  setConvertedAmount(amount);
  setAmount(convertedAmount);
};
