import React, {useState} from 'react';
import Button from '../ui/button/Button';
import List from '../list/List';
import Modal from '../modal/Modal';
import AddData from '../add-data/AddData';


const Pattern  = props => {
    const {type} = props;
    //let isActive = props.isActive;
    let currency = 'рубль';
    let currencySymbol = 'rub';
    const header = type ? 'доход' : 'расходы';
    const [isOpen, setIsOpen] = useState(false);

    const income = [
        {description: 'зарплата', category: 'работа', amount: 20000, isActive: true, date: '21.02.2021'},
        {description: 'аренда', category: 'бизнесс', amount: 700, isActive: true, date: '21.02.2021'},
        {description: 'аренда', category: 'бизнесс', amount: 700, isActive: true, date: '21.02.2021'},
        {description: 'аренда', category: 'бизнесс', amount: 700, isActive: true, date: '21.02.2021'},
        {description: 'аренда', category: 'бизнесс', amount: 700, isActive: true, date: '21.02.2021'},
        {description: 'аренда', category: 'бизнесс', amount: 700, isActive: true, date: '21.02.2021'}
    ];

    const expenses = [
        {description: 'зарплата', category: 'работа', amount: 200, isActive: false, date: '21.02.2021'},
        {description: 'аренда', category: 'бизнесс', amount: 700, isActive: false, date: '21.02.2021'},
        {description: 'аренда', category: 'бизнесс', amount: 700, isActive: false, date: '21.02.2021'},
        {description: 'аренда', category: 'бизнесс', amount: 700, isActive: false, date: '21.02.2021'},
        {description: 'аренда', category: 'бизнесс', amount: 700, isActive: false, date: '21.02.2021'},
        {description: 'аренда', category: 'бизнесс', amount: 700, isActive: false, date: '21.02.2021'}
    ];

    return (
        <>
            <div className={'pattern'}>
                <div className={'pattern__header'}>
                    <div className={'pattern__header--title'}>{header}</div>

                    <div className={'pattern__header--subtitle'}>
                        валюта - {currency} ({currencySymbol})
                    </div>
                </div>

                <div className={'pattern__container'}>
                    <div className={'pattern__container--wrapper'}>
                        <List currency={type ? income : expenses}/>
                    </div>
                </div>

                <div className={'pattern__btn'}>
                    <Button className={'btn btn__add--modal'} onClick={() => setIsOpen(!isOpen)}>
                        Добавить
                    </Button>
                </div>
            </div>

            <Modal active={isOpen} setActive={setIsOpen}>
                <AddData/>
            </Modal>
        </>
    );
};


export default Pattern;