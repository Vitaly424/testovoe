import { FC } from "react";
import cls from './Applications.module.scss';
import { Filter } from "../../../components/shared/Filter";
import { ServicesList } from "../../../components/shared/Services";

const HomePage: FC = () => {
    return (
        <div className="container">
            <div className={cls.home}>
                <Filter />
                <ServicesList />
            </div>
        </div>
    )
}

export default HomePage;
