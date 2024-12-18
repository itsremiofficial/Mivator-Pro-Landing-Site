import { FC } from 'react';

interface IconMailAltProps {
    className?: string;
    fill?: boolean;
    duotone?: boolean;
    width?: string | number;
}

const IconMailAlt: FC<IconMailAltProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
    return (
        <>
            {!fill ? (
                <svg fill="none" className={className} width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path
                        opacity={duotone ? '0.5' : '1'}
                        d="M22 10C22.0185 10.7271 22 11.0542 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H13"
                        stroke="currentColor"
                        strokeWidth={width}
                        strokeLinecap="round"
                    />
                    <path
                        d="M6 8L8.1589 9.79908C9.99553 11.3296 10.9139 12.0949 12 12.0949C13.0861 12.0949 14.0045 11.3296 15.8411 9.79908"
                        stroke="currentColor"
                        strokeWidth={width}
                        strokeLinecap="round"
                    />
                    <circle cx="19" cy="5" r="3" stroke="currentColor" strokeWidth={width} />
                </svg>
            ) : (
                <svg className={className} fill="currentColor" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.5 8C20.8807 8 22 6.88071 22 5.5C22 4.11929 20.8807 3 19.5 3C18.1193 3 17 4.11929 17 5.5C17 6.88071 18.1193 8 19.5 8Z" />
                    <path d="M19.5 8C20.8807 8 22 6.88071 22 5.5C22 4.11929 20.8807 3 19.5 3C18.1193 3 17 4.11929 17 5.5C17 6.88071 18.1193 8 19.5 8Z" />
                    <path
                        opacity={duotone ? '0.5' : '1'}
                        d="M20.72 9.31172C21.35 9.11172 22 9.60173 22 10.2717V15.5117C22 19.0117 20 20.5117 17 20.5117H7C4 20.5117 2 19.0117 2 15.5117V8.51172C2 5.01172 4 3.51172 7 3.51172H14.61C15.26 3.51172 15.7 4.11173 15.58 4.74173C15.46 5.33173 15.48 5.96172 15.66 6.61172C16.03 7.95173 17.12 9.02172 18.46 9.37172C19.25 9.57172 20.02 9.53172 20.72 9.31172Z"
                    />
                    <path d="M11.9998 12.8688C11.1598 12.8688 10.3098 12.6088 9.65978 12.0788L6.52978 9.5788C6.20978 9.3188 6.14978 8.8488 6.40978 8.5288C6.66978 8.2088 7.13977 8.14881 7.45977 8.4088L10.5898 10.9088C11.3498 11.5188 12.6398 11.5188 13.3998 10.9088L14.5798 9.9688C14.8998 9.7088 15.3798 9.7588 15.6298 10.0888C15.8898 10.4088 15.8398 10.8888 15.5098 11.1388L14.3298 12.0788C13.6898 12.6088 12.8398 12.8688 11.9998 12.8688Z" />
                </svg>
            )}
        </>
    );
};

export default IconMailAlt;
