"use-strict";

import React, { useCallback, useEffect, useState } from "react";
import './Player.css';

type Props = Readonly<{
}>;

export default function Player(props: Props): React.ReactElement {
    const [playerPosition, setPlayerPosition] = useState(0);

    const keyPress = useCallback((event: KeyboardEvent) => {
        switch (event.key) {
            case 'ArrowLeft':
                setPlayerPosition((playerPosition) => playerPosition - 1);
                break;
            case 'ArrowRight':
                setPlayerPosition((playerPosition) => playerPosition + 1);
                break;
            default:
        }
    }, [setPlayerPosition]);

    useEffect(() => {
        window.addEventListener('keydown', keyPress);
        return ()=> {
            document.removeEventListener('keydown', keyPress);
          }
    }, [keyPress]);


    return <div className="player" style={{left: playerPosition + '%'}}> </div>;
}