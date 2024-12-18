import { FC } from 'react';

interface IconEyeProps {
    className?: string;
    fill?: boolean;
    duotone?: boolean;
    width?: string | number;
}

const IconEye: FC<IconEyeProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
    return (
        <>
            {!fill ? (
                <svg fill="none" className={className} width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path
                        opacity={duotone ? '0.5' : '1'}
                        d="M15.5799 11.9979C15.5799 13.9779 13.9799 15.5779 11.9999 15.5779C10.0199 15.5779 8.41992 13.9779 8.41992 11.9979C8.41992 10.0179 10.0199 8.41797 11.9999 8.41797C13.9799 8.41797 15.5799 10.0179 15.5799 11.9979Z"
                        stroke="currentColor"
                        strokeWidth={width}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M11.9998 20.2687C15.5298 20.2687 18.8198 18.1887 21.1098 14.5887C22.0098 13.1787 22.0098 10.8087 21.1098 9.39875C18.8198 5.79875 15.5298 3.71875 11.9998 3.71875C8.46984 3.71875 5.17984 5.79875 2.88984 9.39875C1.98984 10.8087 1.98984 13.1787 2.88984 14.5887C5.17984 18.1887 8.46984 20.2687 11.9998 20.2687Z"
                        stroke="currentColor"
                        strokeWidth={width}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ) : (
                <svg className={className} fill="currentColor" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        opacity={duotone ? '0.5' : '1'}
                        d="M21.25 9.14969C18.94 5.51969 15.56 3.42969 12 3.42969C10.22 3.42969 8.49 3.94969 6.91 4.91969C5.33 5.89969 3.91 7.32969 2.75 9.14969C1.75 10.7197 1.75 13.2697 2.75 14.8397C5.06 18.4797 8.44 20.5597 12 20.5597C13.78 20.5597 15.51 20.0397 17.09 19.0697C18.67 18.0897 20.09 16.6597 21.25 14.8397C22.25 13.2797 22.25 10.7197 21.25 9.14969ZM12 16.0397C9.76 16.0397 7.96 14.2297 7.96 11.9997C7.96 9.76969 9.76 7.95969 12 7.95969C14.24 7.95969 16.04 9.76969 16.04 11.9997C16.04 14.2297 14.24 16.0397 12 16.0397Z"
                    />
                    <path d="M12.0004 9.14062C10.4304 9.14062 9.15039 10.4206 9.15039 12.0006C9.15039 13.5706 10.4304 14.8506 12.0004 14.8506C13.5704 14.8506 14.8604 13.5706 14.8604 12.0006C14.8604 10.4306 13.5704 9.14062 12.0004 9.14062Z" />
                </svg>
            )}
        </>
    );
};

export default IconEye;
