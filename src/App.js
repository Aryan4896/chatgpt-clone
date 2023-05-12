import "./App.css";
import { Configuration, OpenAIApi } from "openai";
import Translation from "./Translation";
import OptionSelection from "./OptionSelection";
import { arrayitems } from "./AIoptions";
import { useState } from "react";
function App() {
  const configuration = new Configuration({
    apiKey: "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"
  });

  const openai = new OpenAIApi(configuration);

  const [option, setoptiontextarea] = useState({});
  const [result, setresult] = useState("");
  const [input, setinput] = useState("");
  const selectOption = (option) => {
    setoptiontextarea(option);
  };
  const getresult = async () => {
    let object = { ...option, prompt: input };
    const response = await openai.createCompletion(object);
    setresult(response.data.choices[0].text);
  };
  return (
    <>
      <div>
        {Object.values(option).length === 0 ? (
          <OptionSelection
            arrayitems={arrayitems}
            selectOption={selectOption}
          />
        ) : (
          <Translation
            getresult={getresult}
            setinput={setinput}
            result={result}
          />
        )}
      </div>
    </>
  );
}

export default App;
