"use-strict";

import React from 'react';
import './BoardGame.css'

type Props = Readonly<{}>;

// need the following components:
// 1. player
// 2. bricks

export default function BoardGame(props: Props): React.ReactNode {
    return <div className='board'>Game starts here</div>;
}

