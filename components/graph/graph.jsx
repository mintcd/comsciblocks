import React from 'react';
import Xarrow, { useXarrow, Xwrapper } from 'react-xarrows';
import Draggable from 'react-draggable';
import 'katex/dist/katex.min.css';
import Node from './node'
import linalg from '@models/linalg';

const DraggableBox = ({ id, content, type }) => {
    const typeClassNames = {
        theorem: 'bg-[#C3E3E7]',
        definition: 'bg-[#F2A154]',
    };

    function handleClick() {
        console.log(`Proof of`, id)
    }

    const typeClassName = typeClassNames[type] || '';
    const updateXarrow = useXarrow();
    return (
        <Draggable onDrag={updateXarrow} onStop={updateXarrow}>
            <div id={id}
                className={`border-grey border-solid border-2 rounded-lg p-5 my-5 mx-[20px] hover:opacity-50 ${typeClassName}`}
                onClick={handleClick}>
                <Node content={content} />
            </div>
        </Draggable>
    );
};

export default function Graph({ chapter }) {
    const theorems = linalg.find(item => item.chapter == 6).theorems
    const dependencies = theorems.flatMap(item => item.depending.map(depended => [depended, item.id]))
    return (
        <div className='grid grid-cols-3'>
            <Xwrapper>
                {theorems.map(item =>
                    <DraggableBox type="theorem" id={item.id} content={item.content} />
                )}
                {dependencies.map(item => <Xarrow startAnchor="bottom" endAnchor="auto" headSize={4} start={item[0]} end={item[1]} />)}

            </Xwrapper>
        </div>

    );
}