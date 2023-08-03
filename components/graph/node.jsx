import Latex from 'react-latex-next';
import 'katex/dist/katex.min.css';
import { forwardRef } from 'react';


const Node = forwardRef(({ content }, ref) => {

    return (
        <div
            ref={ref}
            className="w-[1/4] flex items-center justify-center text-justify text-sm"
        >
            <Latex>{content}</Latex>
        </div>
    );
});

export default Node;

