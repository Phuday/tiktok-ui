import { useState, forwardRef } from 'react';
import classNames from 'classnames';
import images from '~/assets/img';
import styles from './Image.module.scss';
const Image = forwardRef(
    (
        {
            src,
            className,
            fallBack: customFallback = images.NoImage,
            alt,
            ...props
        },
        ref,
    ) => {
        const [fallBack, setFallBack] = useState('');
        const handleErro = () => {
            setFallBack(customFallback);
        };
        return (
            <img
                className={classNames(className, styles.wrapper)}
                {...props}
                src={fallBack || src}
                alt={alt}
                ref={ref}
                onError={handleErro}
            />
        );
    },
);

export default Image;
