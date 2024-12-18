import { FC } from 'react';

interface IconSendProps {
    className?: string;
    fill?: boolean;
    duotone?: boolean;
    width?: string | number;
}

const IconSend: FC<IconSendProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
    return (
        <>
            {!fill ? (
                <svg fill="none" className={className} width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.50929 4.22867L18.0693 8.50867C21.9093 10.4286 21.9093 13.5686 18.0693 15.4886L9.50929 19.7686C3.74929 22.6486 1.39929 20.2886 4.27929 14.5386L5.14929 12.8086C5.36929 12.3686 5.36929 11.6386 5.14929 11.1986L4.27929 9.45867C1.39929 3.70867 3.75929 1.34867 9.50929 4.22867Z"
                        stroke="currentColor"
                        strokeWidth={width}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path opacity={duotone ? '0.5' : '1'} d="M5.43945 12H10.8395" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ) : (
                <svg className={className} fill="currentColor" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        opacity={duotone ? '0.5' : '1'}
                        d="M9.50929 4.22867L18.0693 8.50867C21.9093 10.4287 21.9093 13.5687 18.0693 15.4887L9.50929 19.7687C3.74929 22.6487 1.39929 20.2887 4.27929 14.5387L5.14929 12.8087C5.39929 12.2987 5.39929 11.7087 5.14929 11.1987L4.27929 9.45867C1.39929 3.70867 3.75929 1.34867 9.50929 4.22867Z"
                    />
                    <path d="M14.8395 12.75H9.43945C9.02945 12.75 8.68945 12.41 8.68945 12C8.68945 11.59 9.02945 11.25 9.43945 11.25H14.8395C15.2495 11.25 15.5895 11.59 15.5895 12C15.5895 12.41 15.2495 12.75 14.8395 12.75Z" />
                </svg>
            )}
        </>
    );
};

export default IconSend;
