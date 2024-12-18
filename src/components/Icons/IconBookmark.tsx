import { FC } from 'react';

interface IconBookmarkProps {
    className?: string;
    fill?: boolean;
    duotone?: boolean;
    width?: string | number;
}

const IconBookmark: FC<IconBookmarkProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
    return (
        <>
            {!fill ? (
                <svg fill="none" className={className} width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14 2C16 2 17 3.01 17 5.03V12.08C17 14.07 15.59 14.84 13.86 13.8L12.54 13C12.24 12.82 11.76 12.82 11.46 13L10.14 13.8C8.41 14.84 7 14.07 7 12.08V5.03C7 3.01 8 2 10 2H14Z"
                        stroke="currentColor"
                        strokeWidth={width}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        opacity={duotone ? '0.5' : '1'}
                        d="M6.82 4.99094C3.41 5.56094 2 7.66094 2 11.901V14.931C2 19.981 4 22.001 9 22.001H15C20 22.001 22 19.981 22 14.931V11.901C22 7.59094 20.54 5.48094 17 4.96094"
                        stroke="currentColor"
                        strokeWidth={width}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ) : (
                <svg className={className} fill="currentColor" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 4.96V12.08C17 14.07 15.59 14.84 13.86 13.8L12.54 13C12.24 12.82 11.76 12.82 11.46 13L10.14 13.8C8.41 14.84 7 14.07 7 12.08V4.99C7.01 3 8.01 2 10 2H14C15.98 2 16.98 2.99 17 4.96Z" />
                    <path
                        opacity={duotone ? '0.5' : '1'}
                        d="M22 11.901V14.931C22 19.981 20 22.001 15 22.001H9C4 22.001 2 19.981 2 14.931V11.901C2 7.66094 3.41 5.56094 6.82 4.99094H7V12.081C7 14.071 8.41 14.841 10.14 13.801L11.46 13.001C11.76 12.821 12.24 12.821 12.54 13.001L13.86 13.801C15.59 14.841 17 14.071 17 12.081V4.96094C20.54 5.48094 22 7.59094 22 11.901Z"
                    />
                </svg>
            )}
        </>
    );
};

export default IconBookmark;
