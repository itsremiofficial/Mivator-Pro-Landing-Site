import { FC } from 'react';

interface IconRankingProps {
    className?: string;
    fill?: boolean;
    duotone?: boolean;
    width?: string | number;
}

const IconRanking: FC<IconRankingProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
    return (
        <>
            {!fill ? (
                <svg fill="none" className={className} width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.67 14H4C2.9 14 2 14.9 2 16V22H8.67V14Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path
                        d="M13.3302 10H10.6602C9.56016 10 8.66016 10.9 8.66016 12V22H15.3302V12C15.3302 10.9 14.4402 10 13.3302 10Z"
                        stroke="currentColor"
                        strokeWidth={width}
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M20.0001 17H15.3301V22H22.0001V19C22.0001 17.9 21.1001 17 20.0001 17Z"
                        stroke="currentColor"
                        strokeWidth={width}
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        opacity={duotone ? '0.5' : '1'}
                        d="M12.5202 2.0708L13.0502 3.1308C13.1202 3.2808 13.3102 3.4208 13.4702 3.4408L14.4302 3.6008C15.0402 3.7008 15.1902 4.15078 14.7502 4.58078L14.0002 5.33078C13.8702 5.46078 13.8002 5.70079 13.8402 5.87079L14.0502 6.7908C14.2202 7.5208 13.8302 7.80081 13.1902 7.42081L12.2902 6.89081C12.1302 6.79081 11.8602 6.79081 11.7002 6.89081L10.8002 7.42081C10.1602 7.80081 9.77023 7.5208 9.94023 6.7908L10.1502 5.87079C10.1902 5.70079 10.1202 5.45078 9.99023 5.33078L9.25023 4.59079C8.81023 4.15079 8.95023 3.71078 9.57023 3.61078L10.5302 3.45081C10.6902 3.42081 10.8802 3.28081 10.9502 3.14081L11.4802 2.08078C11.7702 1.50078 12.2302 1.5008 12.5202 2.0708Z"
                        stroke="currentColor"
                        strokeWidth={width}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ) : (
                <svg className={className} fill="currentColor" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path opacity={duotone ? '0.5' : '1'} d="M8.67 14H4C2.9 14 2 14.9 2 16V22H8.67V14Z" />
                    <path d="M13.3302 10H10.6602C9.56016 10 8.66016 10.9 8.66016 12V22H15.3302V12C15.3302 10.9 14.4402 10 13.3302 10Z" />
                    <path opacity={duotone ? '0.5' : '1'} d="M20.0001 17H15.3301V22H22.0001V19C22.0001 17.9 21.1001 17 20.0001 17Z" />
                    <path d="M15.0102 4.85048C15.3202 4.54048 15.4402 4.17048 15.3402 3.85048C15.2402 3.53048 14.9302 3.30049 14.4902 3.23049L13.5302 3.07048C13.4902 3.06048 13.4002 3.00047 13.3802 2.96047L12.8502 1.90047C12.4502 1.09047 11.5402 1.09047 11.1402 1.90047L10.6102 2.96047C10.5902 3.00047 10.5002 3.06048 10.4602 3.07048L9.50017 3.23049C9.06017 3.30049 8.76017 3.53048 8.65017 3.85048C8.55017 4.17048 8.67017 4.54048 8.98017 4.85048L9.72017 5.60048C9.75017 5.63048 9.79017 5.75048 9.78017 5.79048L9.57017 6.71047C9.41017 7.39047 9.67017 7.70046 9.84017 7.83046C10.0102 7.95046 10.3802 8.11048 10.9902 7.75047L11.8902 7.22048C11.9302 7.19048 12.0602 7.19048 12.1002 7.22048L13.0002 7.75047C13.2802 7.92048 13.5102 7.97048 13.6902 7.97048C13.9002 7.97048 14.0502 7.89046 14.1402 7.83046C14.3102 7.71046 14.5702 7.40047 14.4102 6.71047L14.2002 5.79048C14.1902 5.74048 14.2202 5.63048 14.2602 5.60048L15.0102 4.85048Z" />
                </svg>
            )}
        </>
    );
};

export default IconRanking;
