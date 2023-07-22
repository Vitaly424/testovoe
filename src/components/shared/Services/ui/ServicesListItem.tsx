import cls from './ServicesListItem.module.scss';
import link from "../../../../assets/img/svg/link.svg";
import services1 from "../../../../assets/img/services/img1.png";
import { FC } from "react";

interface ServicesListItemProps {
    id: number;
    title: string;
    subtitle: string;
    name: string;
    date: string;
    view: string;
    description: string;
}

export const ServicesListItem: FC<ServicesListItemProps> = (props) => {
    const {
        title,
        subtitle,
        name,
        date,
        view,
        description
    } = props;

    return (
        <div className={cls.item}>
            <div className={cls.content}>
                <div className={cls.header}>
                    <h2 className={cls.title}>{title}</h2>
                    <p className={cls.subtitle}>{subtitle}</p>
                    <div className={cls.info}>
                        <span className={cls.name}>{name}</span>
                        <span className={cls.date}>{date}</span>
                        <div className={cls.view}>
                            <span>
                                {view}
                            </span>
                            <img src={view} alt=""/>
                            <img className={cls.link} src={link} alt=""/>
                        </div>
                    </div>
                </div>

                <div className={cls.description}>
                    <p>
                        {description}
                    </p>
                </div>

                <div className={cls.footer}>
                    <span>🏆 Cтаж 4 года</span>
                    <span>🧑🏼‍💻 более 40 работ в портфолио</span>
                    <span>🤯 дизайнер года по версии WDS</span>
                </div>
            </div>
            <div className={cls.image}>
                <img src={services1} alt=""/>
            </div>
        </div>
    )
}
