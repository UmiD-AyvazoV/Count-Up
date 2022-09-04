import React from 'react';
import './saygac.css';
import CountUp , { useCountUp } from 'react-countup';

export default function Saygac(){
    const countUpRef = React.useRef(null);
    const { start, pauseResume, reset, update } = useCountUp({
        ref: countUpRef,
        start: 0,
        duration: 2,
        end: 50,
    });
    return (
        <div className='saygac'>
            <div className="qutular">
                <div className="qutu qutu1">{ <CountUp end={1000} duration={7} /> }</div>
                <div className="qutu qutu2" ref={countUpRef}>0</div>
                <div className="qutu qutu3">{ <CountUp end={100000} duration={10000} suffix='&#8766;'/> }</div>
            </div>
            <div className="butonlar">
                <button onClick={start}>Start</button>
                <button onClick={pauseResume}>Pause&Resume</button>
                <button onClick={reset}>Reset</button>
                <button onClick={ () => update(100) }>Update</button>
            </div>
        </div>
    )
}