import cls from './Button.module.scss';
import { classNames } from "../../../../utils/classNames";
import { ButtonHTMLAttributes, FC } from "react";


export enum ButtonTheme {
    BACKGROUND_LIGHT_BLUE = 'backgroundLight',
    BACKGROUND_DARK_BLUE = 'backgroundDark',
    YELLOW = 'btnYellow'
}

interface ButtonProps {
    className?: string;
    theme?: ButtonTheme;
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ButtonTheme;
    disabled?: boolean;
}


export const Button: FC<ButtonProps> = (props) => {
    const {
        className = '',
        theme = ButtonTheme.BACKGROUND_LIGHT_BLUE,
        disabled,
        children,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
    };

    return (
        <button
            type="button"
            className={classNames(cls.button, mods)}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
};
