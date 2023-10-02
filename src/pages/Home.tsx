import { Fragment, useState } from "react";
import { InputBox } from "../components";
import useCurrencyInfo from "../hooks/useCurrencyInfo";
import { swapCurrency } from "../functions/swapCurrency";

interface currencyObj {
  [label: string]: number;
}

const Home = () => {
  //
  const [amount, setAmount] = useState<number>(0);
  const [from, setFrom] = useState<string>("usd");
  const [to, setTo] = useState<string>("inr");
  const [convertedAmount, setConvertedAmount] = useState<number>(0);

  const currencyInfo: currencyObj = useCurrencyInfo(from) as currencyObj;

  const currencyOptions = Object.keys(Object(currencyInfo));

  return (
    <Fragment>
      <div className="fixed z-0 h-screen w-full bg-gradient-to-b from-black via-white to-black opacity-40"></div>
      <div className="z-10">
        <h1 className="bg-white/30 p-4 text-center text-4xl font-extrabold text-orange-500 backdrop-blur-sm">
          Currency Converter
        </h1>
        <div className="ml-3 mr-3 mt-40">
          <div className="border-gray-60 mx-auto w-full max-w-md rounded-lg border bg-white/30 p-5 backdrop-blur-sm">
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="mb-1 w-full">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={currencyOptions}
                  onAmountChange={setAmount}
                  onCurrencyChange={setFrom}
                  selectCurrency="from"
                  amountDisable={false}
                  currencyDisable={false}
                />
              </div>
              <div className="relative h-0.5 w-full">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md border-2 border-white bg-blue-600 px-2 py-0.5 text-white"
                  onClick={() =>
                    swapCurrency({
                      from,
                      to,
                      setFrom,
                      setTo,
                      amount,
                      convertedAmount,
                      setAmount,
                      setConvertedAmount
                    })
                  }
                >
                  swap
                </button>
              </div>
              <div className="mb-4 mt-1 w-full">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={currencyOptions}
                  selectCurrency={to}
                  onCurrencyChange={setTo}
                  amountDisable={true}
                  currencyDisable={false}
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 px-4 py-3 text-white"
                onClick={() => {
                  setConvertedAmount(amount * Number(currencyInfo[to]));
                }}
              >
                Convert {`${from.toUpperCase()} to ${to.toUpperCase()}`}
              </button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
