import cls from './Filter.module.scss';
import arrow from "../../../../assets/img/svg/arrow.svg";
import { FC, useContext } from "react";
import { SearchContext } from "../../../../providers/SearchProvider";


export const Filter: FC = () => {
    // @ts-ignore
    const { search, setSearch } = useContext(SearchContext)

    const searchServices = (e: any) => {
        setSearch(e.target?.value);
    }

    return (
        <div className={cls.box}>
            <input value={search} onChange={searchServices} className={cls.input} type="text" placeholder="Поиск..."/>

            <button className={cls.search}>
                <span>Фильтры</span>
                <span>
                    <img src={arrow} alt="Стрелочка"/>
                </span>
            </button>
        </div>
    );
};
