import { FC } from 'react';

interface IconArrowLeftProps {
    className?: string;
    fill?: boolean;
    duotone?: boolean;
    width?: string | number;
}

const IconArrowLeft: FC<IconArrowLeftProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
    return (
        <>
            {!fill ? (
                <svg fill="none" className={className} width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.57 5.92969L3.5 11.9997L9.57 18.0697" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path opacity={duotone ? '0.5' : '1'} d="M20.4999 12H3.66992" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ) : (
                <svg fill="none" stroke="currentColor" className={className} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.57 5.92969L3.5 11.9997L9.57 18.0697" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path opacity={duotone ? '0.5' : '1'} d="M20.4999 12H3.66992" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )}
        </>
    );
};

export default IconArrowLeft;
