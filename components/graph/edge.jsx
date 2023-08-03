// Import any necessary libraries or modules here (if required).

export default function Edge({ x1, y1, x2, y2 }) {

    return (
        <svg width="100%" height="100%" >
            <line
                className="absolute"
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="black"
            />
        </svg>
    );
}
