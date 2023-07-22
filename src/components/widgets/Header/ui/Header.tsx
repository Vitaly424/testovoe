import cls from './Header.module.scss';
import { FC } from "react";
import logo from '../../../../assets/img/svg/logo.svg';
import { Navbar } from "../../Navbar";

export const Header: FC = () => {
    return (
        <div className="container">
            <div className={cls.header}>
                <div className={cls.logo}>
                    <img src={logo} alt="Логотип FreeDo"/>
                </div>

                <Navbar />
            </div>
        </div>
    );
};
