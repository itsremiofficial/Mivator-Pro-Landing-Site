import { FC } from 'react';

interface IconEyeSlashProps {
    className?: string;
    fill?: boolean;
    duotone?: boolean;
    width?: string | number;
}

const IconEyeSlash: FC<IconEyeSlashProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
    return (
        <>
            {!fill ? (
                <svg fill="none" className={className} width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14.5299 9.46797L9.46992 14.5279C8.81992 13.8779 8.41992 12.9879 8.41992 11.9979C8.41992 10.0179 10.0199 8.41797 11.9999 8.41797C12.9899 8.41797 13.8799 8.81797 14.5299 9.46797Z"
                        stroke="currentColor"
                        strokeWidth={width}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M17.8198 5.77047C16.0698 4.45047 14.0698 3.73047 11.9998 3.73047C8.46984 3.73047 5.17984 5.81047 2.88984 9.41047C1.98984 10.8205 1.98984 13.1905 2.88984 14.6005C3.67984 15.8405 4.59984 16.9105 5.59984 17.7705"
                        stroke="currentColor"
                        strokeWidth={width}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        opacity={duotone ? '0.5' : '1'}
                        d="M8.41992 19.5297C9.55992 20.0097 10.7699 20.2697 11.9999 20.2697C15.5299 20.2697 18.8199 18.1897 21.1099 14.5897C22.0099 13.1797 22.0099 10.8097 21.1099 9.39969C20.7799 8.87969 20.4199 8.38969 20.0499 7.92969"
                        stroke="currentColor"
                        strokeWidth={width}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        opacity={duotone ? '0.5' : '1'}
                        d="M15.5095 12.6992C15.2495 14.1092 14.0995 15.2592 12.6895 15.5192"
                        stroke="currentColor"
                        strokeWidth={width}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path d="M9.47 14.5312L2 22.0012" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21.9993 2L14.5293 9.47" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ) : (
                <svg className={className} fill="currentColor" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        opacity={duotone ? '0.5' : '1'}
                        d="M21.2496 9.14906C20.7596 8.36906 20.1996 7.66906 19.6196 7.03906L15.8496 10.809C15.9696 11.179 16.0396 11.579 16.0396 11.999C16.0396 14.239 14.2296 16.039 11.9996 16.039C11.5796 16.039 11.1796 15.969 10.8096 15.849L7.34961 19.309C8.80961 20.129 10.3896 20.559 11.9996 20.559C13.7796 20.559 15.5096 20.039 17.0896 19.069C18.6696 18.089 20.0896 16.659 21.2496 14.839C22.2496 13.279 22.2496 10.719 21.2496 9.14906Z"
                    />
                    <path d="M14.0206 9.98063L9.98063 14.0206C9.47063 13.5006 9.14062 12.7806 9.14062 12.0006C9.14062 10.4306 10.4206 9.14062 12.0006 9.14062C12.7806 9.14062 13.5006 9.47063 14.0206 9.98063Z" />
                    <path
                        opacity={duotone ? '0.5' : '1'}
                        d="M18.25 5.74969L14.86 9.13969C14.13 8.39969 13.12 7.95969 12 7.95969C9.76 7.95969 7.96 9.76969 7.96 11.9997C7.96 13.1197 8.41 14.1297 9.14 14.8597L5.76 18.2497H5.75C4.64 17.3497 3.62 16.1997 2.75 14.8397C1.75 13.2697 1.75 10.7197 2.75 9.14969C3.91 7.32969 5.33 5.89969 6.91 4.91969C8.49 3.95969 10.22 3.42969 12 3.42969C14.23 3.42969 16.39 4.24969 18.25 5.74969Z"
                    />
                    <path d="M14.8601 12.002C14.8601 13.572 13.5801 14.862 12.0001 14.862C11.9401 14.862 11.8901 14.862 11.8301 14.842L14.8401 11.832C14.8601 11.892 14.8601 11.942 14.8601 12.002Z" />
                    <path d="M21.7709 2.22891C21.4709 1.92891 20.9809 1.92891 20.6809 2.22891L2.23086 20.6889C1.93086 20.9889 1.93086 21.4789 2.23086 21.7789C2.38086 21.9189 2.57086 21.9989 2.77086 21.9989C2.97086 21.9989 3.16086 21.9189 3.31086 21.7689L21.7709 3.30891C22.0809 3.00891 22.0809 2.52891 21.7709 2.22891Z" />
                </svg>
            )}
        </>
    );
};

export default IconEyeSlash;
