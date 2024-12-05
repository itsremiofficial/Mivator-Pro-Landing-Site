import { FC } from 'react';

interface IconForbiddenProps {
    className?: string;
    fill?: boolean;
    duotone?: boolean;
    width?: string | number;
}

const IconForbidden: FC<IconForbiddenProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
    return (
        <>
            {!fill ? (
                <svg fill="none" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
                    <path
                        d="M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22Z"
                        stroke="currentColor"
                        strokeWidth={width}
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path opacity={duotone ? '0.5' : '1'} d="M18.9004 5L4.90039 19" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ) : (
                <svg fill='none' width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
                    <path d="M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22Z" fill="currentColor" opacity={duotone ? '0.5' : '1'}/>
                    <path
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.5303 5.46967C18.8232 5.76256 18.8232 6.23744 18.5303 6.53033L6.53033 18.5303C6.23744 18.8232 5.76256 18.8232 5.46967 18.5303C5.17678 18.2374 5.17678 17.7626 5.46967 17.4697L17.4697 5.46967C17.7626 5.17678 18.2374 5.17678 18.5303 5.46967Z"
                    />
                </svg>
            )}
        </>
    );
};

export default IconForbidden;
