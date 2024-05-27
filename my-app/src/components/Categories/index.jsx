'use client';

import React from 'react';

import style from './Categories.module.scss';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

const sortArray = [
    { name: 'От А до Я', key: 'name' },
    { name: 'От Я до А', key: '-name' },
    { name: 'По убывании цены', key: '-price' },
    { name: 'По возрастанию цены', key: 'price' },
];

const capitalizeLetter = (string) => {
    return string.slice(0, 1).toUpperCase() + string.slice(1);
};

export default function Categories({ items }) {
    const [isOpenSort, setIsOpenSort] = React.useState(false);
    const [isOpenFilter, setIsOpenFilter] = React.useState(false);
    const [selectedSort, setSelectedSort] = React.useState(0);
    const [selectedFilter, setSelectedFilter] = React.useState(-1);

    const searchParams = useSearchParams(),
        sort = searchParams.get('sort'),
        filter = searchParams.get('filter[shape]');

    let page = `?page=${searchParams.get('page')}`;

    return (
        <div className={style.wrapper}>
            <div className={style.dropdown}>
                <div
                    className={
                        isOpenFilter ? `${style.select} ${style.select_clicked}` : style.select
                    }
                    onClick={() => setIsOpenFilter(!isOpenFilter)}>
                    <span className={style.selected}>
                        {items.data.map((shape, i) =>
                            i === selectedFilter ? capitalizeLetter(shape.attributes.name) : '',
                        )}
                        {selectedFilter === -1 ? 'Все виды' : ''}
                    </span>
                    <div
                        className={
                            isOpenFilter ? `${style.caret} ${style.caret_rotate}` : style.caret
                        }></div>
                </div>
                <div className={isOpenFilter ? `${style.menu} ${style.menu_open}` : style.menu}>
                    <Link
                        className={
                            selectedFilter === -1 ? style.link + ' ' + style.active : style.link
                        }
                        href={sort === null ? `${page}` : `${page}&sort=${sort}`}
                        onClick={() => {
                            setSelectedFilter(-1);
                            setIsOpenFilter(!isOpenFilter);
                        }}>
                        Все виды
                    </Link>
                    {items.data.map((shape, i) => (
                        <Link
                            key={shape.id}
                            className={
                                selectedFilter === i ? style.link + ' ' + style.active : style.link
                            }
                            onClick={() => {
                                setSelectedFilter(i);
                                setIsOpenFilter(!isOpenFilter);
                            }}
                            href={
                                sort === null
                                    ? `${page}&filter[shape]=${shape.attributes.name}`
                                    : `${page}&sort=${sort}&filter[shape]=${shape.attributes.name}`
                            }>
                            {capitalizeLetter(shape.attributes.name)}
                        </Link>
                    ))}
                </div>
            </div>

            <div className={style.dropdown}>
                <div
                    className={
                        isOpenSort ? `${style.select} ${style.select_clicked}` : style.select
                    }
                    onClick={() => setIsOpenSort(!isOpenSort)}>
                    <span className={style.selected}>{sortArray[selectedSort].name}</span>
                    <div
                        className={
                            isOpenSort ? `${style.caret} ${style.caret_rotate}` : style.caret
                        }></div>
                </div>
                <div className={isOpenSort ? `${style.menu} ${style.menu_open}` : style.menu}>
                    {sortArray.map((item, i) => (
                        <Link
                            key={i}
                            onClick={() => {
                                setSelectedSort(i);
                                setIsOpenSort(!isOpenSort);
                            }}
                            className={
                                selectedFilter === i ? style.link + ' ' + style.active : style.link
                            }
                            href={
                                filter === null
                                    ? `${page}&sort=${item.key}`
                                    : `${page}&filter[shape]=${filter}&sort=${item.key}`
                            }
                            value={item.name}>
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
