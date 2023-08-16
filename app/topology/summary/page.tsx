"use client"

import Xarrow, { Xwrapper } from 'react-xarrows';
import topology from '@models/topology';
import Node from "@components/node"

export default function Graph() {
    const statements = topology.flatMap(item => item.statements)
    const dependencies = statements.flatMap((item) => item.depending.map((depended) => [depended, item.id]));

    return (
        <div className='grid grid-cols-3 text-sm'>
            <Xwrapper>
                {statements.map((item) => (
                    <Node id={item.id} label={item.name} content={item.content} />
                ))}
                {dependencies.map((item) => (
                    <Xarrow startAnchor='auto' endAnchor='auto' headSize={4} start={item[0]} end={item[1]} />
                ))}
            </Xwrapper>
        </div>
    );
}


