import { ComponentProps, Dispatch, SetStateAction, useId } from "react";
import { twMerge } from "tailwind-merge";
import { v4 as uuidv4 } from "uuid";

//
type PropTypes = {
  label: string;
  amount: number;
  currencyOptions: Array<string>;
  selectCurrency: string;
  amountDisable: boolean;
  currencyDisable: boolean;
  onAmountChange?: Dispatch<SetStateAction<number>>;
  onCurrencyChange: Dispatch<SetStateAction<string>>;
} & ComponentProps<"div">;

//
const InputBox = ({
  label,
  amount,
  currencyOptions,
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  onAmountChange,
  onCurrencyChange,
  className
}: PropTypes) => {
  //
  const amountInputId = useId();
  const currencyChangeId = useId();

  return (
    <div className={twMerge(`flex rounded-lg bg-white p-3 text-sm`, className)}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="mb-2 inline-block text-black/40"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="w-full bg-transparent py-1.5 outline-none"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => {
            onAmountChange && onAmountChange(Number(e.target.value));
          }}
        />
      </div>
      <div className="flex w-1/2 flex-wrap justify-end text-right">
        <label htmlFor={currencyChangeId} className="mb-2 w-full text-black/40">
          Currency Type
        </label>
        <select
          id={currencyChangeId}
          className="cursor-pointer rounded-lg bg-gray-100 px-1 py-1 outline-none"
          value={selectCurrency}
          onChange={(e) => {
            onCurrencyChange && onCurrencyChange(e.target.value);
          }}
          disabled={currencyDisable}
        >
          {currencyOptions.map((curr) => (
            <option key={uuidv4()} value={curr}>
              {curr}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;
