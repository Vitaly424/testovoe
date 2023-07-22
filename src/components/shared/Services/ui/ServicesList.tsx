import cls from './ServicesList.module.scss';
import { ServicesListItem } from "./ServicesListItem";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../../../providers/SearchProvider";

interface ServicesItem {
    id: number;
    title: string;
    subtitle: string;
    name: string;
    date: string;
    view: string;
    description: string;
}

const servicesListStatic:ServicesItem[] = [
    {
        id: 1,
        title: 'Веб-дизайнер, UX/UI дизайнер',
        subtitle: 'Услуги, IT, интернет, телеком, создание сайтов',
        name: 'Александр Иванов',
        date: '23.05, 23:15',
        view: '30',
        description: 'Добрый день! Меня зовут Александр Иванов, три года с переезда в США я предлагаю услуги для вашего бизнеса, связанные с графическим дизайном, создание сайтов, айдентики, - Графический дизайн, туда входят инфографика, иллюстрация, дизайн упаковки, маркетинговые материалы, логотипы... '
    },
    {
        id: 2,
        title: 'Фронтенд разработчик',
        subtitle: 'Услуги, IT, интернет, телеком, создание сайтов',
        name: 'Александр Иванов',
        date: '23.05, 23:15',
        view: '30',
        description: 'Добрый день! Меня зовут Александр Иванов, три года с переезда в США я предлагаю услуги для вашего бизнеса, связанные с графическим дизайном, создание сайтов, айдентики, - Графический дизайн, туда входят инфографика, иллюстрация, дизайн упаковки, маркетинговые материалы, логотипы... '
    },
    {
        id: 3,
        title: 'Верстальщик',
        subtitle: 'Услуги, IT, интернет, телеком, создание сайтов',
        name: 'Александр Иванов',
        date: '23.05, 23:15',
        view: '30',
        description: 'Добрый день! Меня зовут Александр Иванов, три года с переезда в США я предлагаю услуги для вашего бизнеса, связанные с графическим дизайном, создание сайтов, айдентики, - Графический дизайн, туда входят инфографика, иллюстрация, дизайн упаковки, маркетинговые материалы, логотипы... '
    }
]

export const ServicesList = () => {
    // @ts-ignore
    const { search } = useContext(SearchContext);
    const [servicesList, setServicesList] = useState(servicesListStatic);

    useEffect(() => {
        if (search.length) {
            const searchServicesList = servicesList.filter((item) => {
                return item.title.toLowerCase().includes(search.toLowerCase())
            })

            setServicesList(searchServicesList)
            return;
        }

        setServicesList(servicesListStatic);
    }, [search, servicesList])


    if (!servicesList.length) {
        return (
            <h1>Ничего не найдено....</h1>
        )
    }

    return (
        <div className={cls.list}>
            {servicesList.map(item => <ServicesListItem key={item.id} {...item}/>)}
        </div>
    );
};
