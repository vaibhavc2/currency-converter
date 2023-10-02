# notes for currency converter app

## api link

```javascript
let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;
```

## input box

```javascript
function InputBox({
  label,

  className = ""
}) {
  return (
    <div className={`flex rounded-lg bg-white p-3 text-sm `}>
      <div className="w-1/2">
        <label className="mb-2 inline-block text-black/40">label</label>
        <input
          className="w-full bg-transparent py-1.5 outline-none"
          type="number"
          placeholder="Amount"
        />
      </div>
      <div className="flex w-1/2 flex-wrap justify-end text-right">
        <p className="mb-2 w-full text-black/40">Currency Type</p>
        <select className="cursor-pointer rounded-lg bg-gray-100 px-1 py-1 outline-none">
          <option value="usd">usd</option>
        </select>
      </div>
    </div>
  );
}

export default InputBox;
```

## app js

```javascript
function App() {


    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('${BackgroundImage}')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();

                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"

                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"

                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"

                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );

```
