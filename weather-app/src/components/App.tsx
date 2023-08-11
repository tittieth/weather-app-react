import Search from './Search';
import Forecast from './Forecast';
import useForecast from '../hooks/useForecast';

const App = (): JSX.Element => {
  const { term, options, forecast, onInputChange, onOptionSelect, onSubmit } =
    useForecast();

  return (
    <main className="flex justify-center items-center bg-gradient-to-br  from-pink-400 via-cyan-400 to-violet-400 h-[100vh] w-full">
      {forecast ? (
        <Forecast data={forecast} />
      ) : (
        <Search
          term={term}
          options={options}
          onInputChange={onInputChange}
          onOptionSelect={onOptionSelect}
          onSubmit={onSubmit}
        ></Search>
      )}
    </main>
  );
};

export default App;
