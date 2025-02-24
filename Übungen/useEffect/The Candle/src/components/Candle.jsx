import { useEffect, useState } from 'react';

const Candle = () => {
  const [candleHeight, setCandleHeight] = useState(90);
  // console.log(candleHeight);

  // const burnCandle = () => setCandleHeight((prev) => prev - 1);

  useEffect(() => {
    const timer = setInterval(
      () =>
        setCandleHeight((prev) => {
          // if (prev === 10) return 90;
          return prev - 1;
        }),
      100
    );

    return () => clearInterval(timer);
  });
  return (
    <>
      {/* <button onClick={burnCandle}>MAKE CANDLE SMALLER</button> */}

      {candleHeight < 10 && (
        <button onClick={() => setCandleHeight(90)}>Replace candle</button>
      )}

      <div className='exercise'>
        <div className='candleContainer' style={{ height: `${candleHeight}%` }}>
          {candleHeight > 10 && (
            <div className='candle'>
              <div className='flame'>
                <div className='shadows' />
                <div className='top' />
                <div className='middle' />
                <div className='bottom' />
              </div>
              <div className='wick' />
              <div className='wax' />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Candle;
