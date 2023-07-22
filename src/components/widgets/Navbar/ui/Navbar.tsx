import cls from './Navbar.module.scss';
import { FC, useEffect, useRef, useState } from "react";
import { Button, ButtonTheme } from "../../../shared/Button";

const menu: {name: string}[] = [
    {
        name: 'Выход'
    },
    {
        name: 'сменить пароль'
    },
    {
        name: 'поддержать'
    },
    {
        name: 'о нас'
    }
]

export const Navbar: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const sortRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (!(event.target as HTMLElement).closest(`.${sortRef.current?.className}`)) {
                setIsOpen(false);
            }
        };

        document.body.addEventListener('click', handleClickOutside);

        return () => {
            document.body.removeEventListener('click', handleClickOutside);
        };
    }, [])

    return (
        <div className={cls.navbar}>
            <Button
                theme={ButtonTheme.BACKGROUND_DARK_BLUE}
                type="button"
                className={cls.btn}
            >
                Создать объявления
            </Button>
            <Button
                theme={ButtonTheme.BACKGROUND_LIGHT_BLUE}
                type="button"
            >
                Мои объявления
            </Button>

            <div ref={sortRef} className={cls.menuBox}>
                <Button
                    theme={ButtonTheme.YELLOW}
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ...
                </Button>

                {isOpen && <ul className={cls.menu}>
                    {menu.map((item, idx) => {
                        return (
                            <li
                                key={idx}
                                className={cls.menuItem}
                            >
                                {item.name}
                            </li>
                        )
                    })}
                </ul>}
            </div>
        </div>
    );
};
