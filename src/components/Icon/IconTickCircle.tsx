import { FC } from 'react';

interface IconTickCircleProps {
    className?: string;
    fill?: boolean;
    duotone?: boolean;
    width?: string | number;
}

const IconTickCircle: FC<IconTickCircleProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
    return (
        <>
            {!fill ? (
                <svg fill="none" className={className} width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path
                        opacity={duotone ? '0.5' : '1'}
                        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                        stroke="currentColor"
                        strokeWidth={width}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path d="M7.75 11.9979L10.58 14.8279L16.25 9.16797" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ) : (
                <svg className={className} fill="currentColor" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path opacity={duotone ? '0.5' : '1'} d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                    <path d="M10.5795 15.5816C10.3795 15.5816 10.1895 15.5016 10.0495 15.3616L7.21945 12.5316C6.92945 12.2416 6.92945 11.7616 7.21945 11.4716C7.50945 11.1816 7.98945 11.1816 8.27945 11.4716L10.5795 13.7716L15.7195 8.63156C16.0095 8.34156 16.4895 8.34156 16.7795 8.63156C17.0695 8.92156 17.0695 9.40156 16.7795 9.69156L11.1095 15.3616C10.9695 15.5016 10.7795 15.5816 10.5795 15.5816Z" />
                </svg>
            )}
        </>
    );
};

export default IconTickCircle;
