import { FC } from 'react';

interface IconTaskSquareProps {
    className?: string;
    fill?: boolean;
    duotone?: boolean;
    width?: string | number;
}

const IconTaskSquare: FC<IconTaskSquareProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
    return (
        <>
            {!fill ? (
                <svg fill="none" className={className} width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path opacity={duotone ? '0.5' : '1'} d="M12.3691 8.87891H17.6191" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
                    <path opacity={duotone ? '0.5' : '1'} d="M6.38086 8.87891L7.13086 9.62891L9.38086 7.37891" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
                    <path opacity={duotone ? '0.5' : '1'} d="M12.3691 15.8789H17.6191" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
                    <path opacity={duotone ? '0.5' : '1'} d="M6.38086 15.8789L7.13086 16.6289L9.38086 14.3789" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ) : (
                <svg className={className} fill="currentColor" width="20" height="22" viewBox="0 0 20 22" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_71_638)">
                        <path
                            opacity={duotone ? '0.5' : '1'}
                            d="M14.19 1.46875H5.81C2.17 1.46875 0 3.63876 0 7.27876V15.6587C0 19.2987 2.17 21.4687 5.81 21.4687H14.19C17.83 21.4687 20 19.2987 20 15.6587V7.27876C20 3.63876 17.83 1.46875 14.19 1.46875Z"
                        />
                        <path d="M16.3105 8.33984C16.3105 8.74984 15.9805 9.08984 15.5605 9.08984H10.3105C9.90055 9.08984 9.56055 8.74984 9.56055 8.33984C9.56055 7.92984 9.90055 7.58984 10.3105 7.58984H15.5605C15.9805 7.58984 16.3105 7.92984 16.3105 8.33984Z" />
                        <path d="M7.97055 7.37125L5.72055 9.62125C5.57055 9.77125 5.38055 9.84125 5.19055 9.84125C5.00055 9.84125 4.80055 9.77125 4.66055 9.62125L3.91055 8.87125C3.61055 8.58125 3.61055 8.10125 3.91055 7.81125C4.20055 7.52125 4.67055 7.52125 4.97055 7.81125L5.19055 8.03125L6.91055 6.31125C7.20055 6.02125 7.67055 6.02125 7.97055 6.31125C8.26055 6.60125 8.26055 7.08125 7.97055 7.37125Z" />
                        <path d="M16.3105 15.3398C16.3105 15.7498 15.9805 16.0898 15.5605 16.0898H10.3105C9.90055 16.0898 9.56055 15.7498 9.56055 15.3398C9.56055 14.9298 9.90055 14.5898 10.3105 14.5898H15.5605C15.9805 14.5898 16.3105 14.9298 16.3105 15.3398Z" />
                        <path d="M7.97055 14.3713L5.72055 16.6213C5.57055 16.7713 5.38055 16.8412 5.19055 16.8412C5.00055 16.8412 4.80055 16.7713 4.66055 16.6213L3.91055 15.8713C3.61055 15.5813 3.61055 15.1012 3.91055 14.8112C4.20055 14.5213 4.67055 14.5213 4.97055 14.8112L5.19055 15.0313L6.91055 13.3113C7.20055 13.0213 7.67055 13.0213 7.97055 13.3113C8.26055 13.6012 8.26055 14.0813 7.97055 14.3713Z" />
                    </g>
                    <defs>
                        <clipPath id="clip0_71_638">
                            <rect width="20" height="21" transform="translate(0 0.5)" />
                        </clipPath>
                    </defs>
                </svg>
            )}
        </>
    );
};

export default IconTaskSquare;
