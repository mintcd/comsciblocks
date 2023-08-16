"use client"

import Xarrow, { Xwrapper } from 'react-xarrows';
import linalg from '@models/linalg';
import 'katex/dist/katex.min.css';
import Node from "@components/node";


export default function Graph() {
    const statements = linalg.flatMap(item => item.statements).filter(statement => statement.type === "theorem")
    const dependencies = statements.flatMap((item) => item.depending.map((depended) => [depended, item.id]));

    return (
        <div className='flex flex-wrap'>
            <Xwrapper>
                {statements.map((item) => (
                    <Node id={item.id} item={item} includeId={false} includeName={true} includeContent={false} />
                ))}
                {dependencies.map((item) => (
                    <Xarrow startAnchor='auto' endAnchor='auto' strokeWidth={2} headSize={4} start={item[0]} end={item[1]} />
                ))}
            </Xwrapper>
        </div>
    );
}