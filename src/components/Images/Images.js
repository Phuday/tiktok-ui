import { useState, forwardRef } from 'react';
import classNames from 'classnames';
import images from '~/assets/img';
import styles from './Image.module.scss';
import PropTypes from 'prop-types';
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
        const handleError = () => {
            setFallBack(customFallback);
        };
        return (
            <img
                className={classNames(className, styles.wrapper)}
                {...props}
                src={fallBack || src}
                alt={alt}
                ref={ref}
                onError={handleError}
            />
        );
    },
);

Image.propTypes = {
    src: PropTypes.string,
    className: PropTypes.string,
    fallBack: PropTypes.string,
    alt: PropTypes.string,
}

export default Image;
