"use client"

import Xarrow, { Xwrapper } from 'react-xarrows';
import Node from '@components/graph/node';
import absalg from '@models/absalg';

const Block = ({ id, content, type, includeId }: { id: string; content: string; type: string; includeId: boolean }) => {
    const typeClassNames = {
        theorem: 'bg-[#C3E3E7]',
        definition: 'bg-[#c4e0b0]',
    };

    function handleClick() {
        console.log(`Proof of`, id);
    }

    const typeClassName = (typeClassNames as { [key: string]: string })[type] || '';
    if (includeId) content = `$$\\textbf{Theorem ${id}}$$ ${content}`

    return (
        <div
            id={id}
            className={`border-grey border-solid border-2 rounded-[20px] p-5 my-5 mx-[20px] hover:opacity-50 ${typeClassName}`}
            onClick={handleClick}
        >
            <Node content={content} />
        </div>
    );
};

export default function Graph() {
    const theorems = absalg.flatMap(item => item.theorems).filter(theorem => theorem.id.includes("."));
    const dependencies = theorems.flatMap((item) => item.depending.map((depended) => [depended, item.id]));

    return (
        <div className='grid grid-cols-3'>
            <Xwrapper>
                {theorems.map((item) => (
                    <Block type={item.id.includes(".") ? "theorem" : "definition"} includeId={false} id={item.id} content={item.full} />
                ))}
                {dependencies.map((item) => (
                    <Xarrow startAnchor='auto' endAnchor='auto' headSize={4} start={item[0]} end={item[1]} />
                ))}
            </Xwrapper>
        </div>
    );
}
