import {Player} from "../models/Player.ts";
import {useEffect, useRef, useState} from "react";
import {Colors} from "../models/Colors.ts";

interface TimerProps {
  currentPlayer: Player | null
  restart: () => void
}


const Timer = ({currentPlayer, restart}: TimerProps) => {
  const [blackTime, setBlackTime] = useState(300);
  const [whiteTime, setWhiteTime] = useState(300);
  const timer = useRef<null | ReturnType<typeof setInterval>>(null)

  useEffect(() => {
    startTimer()
  }, [currentPlayer])

  const handleRestart = () => {
    setWhiteTime(300)
    setBlackTime(300)
    restart()
  }

  function startTimer() {
    if (timer.current) {
      clearInterval(timer.current);
    }
    const callback = currentPlayer?.color === Colors.WHITE ? decrementWhiteTimer : decrementBlackTimer
    timer.current = setInterval(callback, 1000);
  }

  function decrementBlackTimer() {
    setBlackTime(prev => prev - 1);
  }

  function decrementWhiteTimer() {
    setWhiteTime(prev => prev - 1);
  }

  return (
    <div>
      <div>
        <button onClick={handleRestart}>Restart</button>
      </div>
      <h2>Black - {blackTime}</h2>
      <h2>Black - {whiteTime}</h2>
    </div>
  )
}

export default Timer