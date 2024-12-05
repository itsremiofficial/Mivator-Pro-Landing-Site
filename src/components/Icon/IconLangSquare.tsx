import { FC } from 'react';

interface IconLangSquareProps {
    className?: string;
    fill?: boolean;
    duotone?: boolean;
    width?: string | number;
}

const IconLangSquare: FC<IconLangSquareProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
    return (
        <>
            {!fill ? (
                <svg fill="none" className={className} width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <g opacity={duotone ? '0.5' : '1'}>
                        <path d="M16.9897 8.96094H7.00977" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 7.28125V8.96125" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M14.5 8.94141C14.5 13.2414 11.14 16.7214 7 16.7214" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16.9992 16.72C15.1992 16.72 13.5992 15.76 12.4492 14.25" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ) : (
                <svg className={className} fill="currentColor" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        opacity={duotone ? '0.5' : '1'}
                        d="M16.1898 2H7.81976C4.17976 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17976 21.99 7.81976 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z"
                    />
                    <path d="M17.0002 15.9695C15.6902 15.9695 14.4402 15.3695 13.4402 14.2595C14.4302 12.9895 15.0702 11.4195 15.2102 9.69955H16.9902C17.4002 9.69955 17.7402 9.35955 17.7402 8.94955C17.7402 8.53955 17.4002 8.19955 16.9902 8.19955H14.5602C14.5402 8.19955 14.5202 8.18954 14.5002 8.18954C14.4802 8.18954 14.4602 8.19955 14.4402 8.19955H12.7502V7.26953C12.7502 6.85953 12.4102 6.51953 12.0002 6.51953C11.5902 6.51953 11.2502 6.85953 11.2502 7.26953V8.19955H7.01025C6.60025 8.19955 6.26025 8.53955 6.26025 8.94955C6.26025 9.35955 6.60025 9.69955 7.01025 9.69955H12.0002H13.7003C13.3303 13.2195 10.4702 15.9695 6.99023 15.9695C6.58023 15.9695 6.24023 16.3095 6.24023 16.7195C6.24023 17.1295 6.58023 17.4695 6.99023 17.4695C9.06023 17.4695 10.9502 16.6695 12.4002 15.3595C13.6702 16.7195 15.2802 17.4695 16.9902 17.4695C17.4002 17.4695 17.7402 17.1295 17.7402 16.7195C17.7402 16.3095 17.4102 15.9695 17.0002 15.9695Z" />
                </svg>
            )}
        </>
    );
};

export default IconLangSquare;
