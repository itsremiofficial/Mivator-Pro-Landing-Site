import { FC } from 'react';

interface IconExcelProps {
    className?: string;
    fill?: boolean;
    duotone?: boolean;
    width?: string | number;
}

const IconExcel: FC<IconExcelProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
    return (
        <>
            {!fill ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
                    <path
                        d="M16 3.5C19.33 3.68 21 4.95 21 9.65V15.83C21 19.95 20 22.01 15 22.01H9C4 22.01 3 19.95 3 15.83V9.65C3 4.95 4.67 3.69 8 3.5H16Z"
                        stroke="currentColor"
                        strokeWidth={width}
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        opacity={duotone ? '0.5' : '1'}
                    />
                    <path d="M14 17.9302L7.06836 10.9985" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.9316 11.0688L7 18.0005" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
                    <path
                        opacity="0.4"
                        d="M16.2391 3.6499H7.75906C5.28906 3.6499 3.28906 5.6599 3.28906 8.1199V17.5299C3.28906 19.9899 5.29906 21.9999 7.75906 21.9999H16.2291C18.6991 21.9999 20.6991 19.9899 20.6991 17.5299V8.1199C20.7091 5.6499 18.6991 3.6499 16.2391 3.6499Z"
                        fill="currentColor"
                    />
                    <path d="M14 17.9302L7.06836 10.9985" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.9316 11.0688L7 18.0005" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )}
        </>
    );
};

export default IconExcel;
