import { SVGProps } from 'react';

const VueIcon: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" aria-label="Vue" viewBox="0 0 64 64" {...props}>
            <path
                d="M39.333 5.5L32 18.333 24.667 5.5H0L32 61 64 5.5z"
                fill="#42b883"
                strokeWidth={0.16666667}
            />
            <path
                d="M39.333 5.5L32 18.333 24.667 5.5H12.833L32 38.833 51.167 5.5z"
                fill="#35495e"
                strokeWidth={0.16666667}
            />
        </svg>
    );
};

export default VueIcon;
