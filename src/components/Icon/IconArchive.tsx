import { FC } from 'react';

interface IconArchiveProps {
    className?: string;
    fill?: boolean;
    duotone?: boolean;
    width?: string | number;
}

const IconArchive: FC<IconArchiveProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
    return (
        <>
            {!fill ? (
                <svg fill="none" className={className} width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M19.5 10.2188V18.9988C19.5 20.9988 19 21.9988 16.5 21.9988H7.5C5 21.9988 4.5 20.9988 4.5 18.9988V10.2188"
                        stroke="currentColor"
                        strokeWidth={width}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path d="M5 2H19C21 2 22 3 22 5V7C22 9 21 10 19 10H5C3 10 2 9 2 7V5C2 3 3 2 5 2Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
                    <path opacity={duotone ? '0.5' : '1'} d="M10.1797 14H13.8197" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ) : (
                <svg className={className} fill="currentColor" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        opacity={duotone ? '0.5' : '1'}
                        d="M19.5 9.96875V18.9988C19.5 20.9988 19 21.9988 16.5 21.9988H7.5C5 21.9988 4.5 20.9988 4.5 18.9988V9.96875C4.66 9.98875 4.83 9.99875 5 9.99875H19C19.17 9.99875 19.34 9.98875 19.5 9.96875Z"
                    />
                    <path d="M22 5V7C22 8.83 21.17 9.82 19.5 9.97C19.34 9.99 19.17 10 19 10H5C4.83 10 4.66 9.99 4.5 9.97C2.83 9.82 2 8.83 2 7V5C2 3 3 2 5 2H19C21 2 22 3 22 5Z" />
                    <path d="M13.8197 14.75H10.1797C9.76969 14.75 9.42969 14.41 9.42969 14C9.42969 13.59 9.76969 13.25 10.1797 13.25H13.8197C14.2297 13.25 14.5697 13.59 14.5697 14C14.5697 14.41 14.2297 14.75 13.8197 14.75Z" />
                </svg>
            )}
        </>
    );
};

export default IconArchive;
