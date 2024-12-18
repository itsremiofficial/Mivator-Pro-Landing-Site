import { FC } from 'react';

interface IconCloseSquareProps {
    className?: string;
    fill?: boolean;
    duotone?: boolean;
    width?: string | number;
}

const IconCloseSquare: FC<IconCloseSquareProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
    return (
        <>
            {!fill ? (
                <svg fill="none" className={className} width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.16992 14.8279L14.8299 9.16797" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14.8299 14.8279L9.16992 9.16797" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
                    <path
                        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                        stroke="currentColor"
                        strokeWidth={width}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        opacity={duotone ? '0.5' : '1'}
                    />
                </svg>
            ) : (
                <svg className={className} fill="currentColor" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path opacity={duotone ? '0.5' : '1'} d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" />
                    <path d="M13.0594 11.9994L15.3594 9.69938C15.6494 9.40938 15.6494 8.92937 15.3594 8.63938C15.0694 8.34938 14.5894 8.34938 14.2994 8.63938L11.9994 10.9394L9.69936 8.63938C9.40936 8.34938 8.92937 8.34938 8.63938 8.63938C8.34938 8.92937 8.34938 9.40938 8.63938 9.69938L10.9394 11.9994L8.63938 14.2994C8.34938 14.5894 8.34938 15.0694 8.63938 15.3594C8.78938 15.5094 8.97936 15.5794 9.16936 15.5794C9.35936 15.5794 9.54936 15.5094 9.69936 15.3594L11.9994 13.0594L14.2994 15.3594C14.4494 15.5094 14.6394 15.5794 14.8294 15.5794C15.0194 15.5794 15.2094 15.5094 15.3594 15.3594C15.6494 15.0694 15.6494 14.5894 15.3594 14.2994L13.0594 11.9994Z" />
                </svg>
            )}
        </>
    );
};

export default IconCloseSquare;
