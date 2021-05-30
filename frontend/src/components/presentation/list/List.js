import React from 'react';
import PropTypes from 'prop-types';
import Button from '../ui/button/Button';
import {AppService} from '../../../services/appService';
import {BudgetService} from '../../../services/budgetService';


const List = props => {
    const appService = AppService;
    const budgetService = BudgetService;
    const {type, expenses, income} = props;
    const value = appService.switchValue(type, income, expenses);

    const valueRender = value.map((val, idx) =>{
        const {date, amount, category, description} = val;
        return (
            <div className={'list'} key={idx}>
                <img
                    className={'list__image'}
                    alt={appService.switchAltImg(type)}
                    src={appService.switchSrcImg(type)}
                />

                <div className={'list__container'}>
                    <div className={'list__top'}>
                        <p className={'list__top--category'}>{category}</p>
                        <p className={'list__top--amount'}>{budgetService.format(amount)}</p>
                        {appService.switchPercentage(type, <p className={'list__top--percentage'}>{budgetService.percentage(income, amount)}</p>)}
                        <p className={'list__top--date'}>{new Date(date).toLocaleDateString()}</p>
                    </div>

                    <p className={'list__bottom'}>
                        <span>{description}</span>
                    </p>
                </div>

                <div className={'list__delete'}>
                    <Button className={'btn btn__delete'} icon={'ion-ios-trash-outline'}/>
                </div>
            </div>
        );
    });

    return (
        <>
            {
                value.length === 0 ?
                    <div className={'list__notes'}>
                        <p className={'list__notes--par'}>
                            Ваш лист пуст
                            <br/>
                            Пожалуйста добавте значение
                        </p>
                    </div> : valueRender
            }
        </>
    );
};


List.propTypes = {
    type: PropTypes.string,
    value: PropTypes.array,
    income: PropTypes.array
};


export default List;