import React, { useState, useCallback, useMemo } from 'react'

export const useMemorizationApp = () => {
    const [counter, setCounter] = useState(5);
    const [view, setView] = useState(true);
    const pesado = (iter) => {
      for (let i=0; i<iter;i++){
        console.log("procesando");
      }
      return "fin del proceso"
    };
    const pesadoMemo = useMemo(() => pesado(counter), [counter]);
    const add = useCallback(() => {
      setCounter( (actual) => actual + 1)
    }, [setCounter]);
    const hide = useCallback(
      () => {
        setView(!view)
      },
      [setView],
    );

    return [ counter, pesadoMemo, add, hide ];
};
