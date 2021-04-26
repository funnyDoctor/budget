import React from 'react';
import Auth from '../../presentation/auth/Auth';
import AppService from '../../../services/appService';


const VerifyEmail = () => {
    const app = new AppService();
    return(
        <Auth service={!app._service}>
            <div className={'verify'}>
                <div className={'container'}>
                    <div className={'verify__header'}>
                        <span>Подтвердите ваш электронный адрес.</span>
                    </div>
                    <div className={'verify__paragraph'}>
                        <p>Проверьте ваш почтовый ящик, и <br/> подтвердите свой адрес электронной почты.</p>
                    </div>

                    <div className={'verify__comment'}>
                        <span>Если вы не получили письмо:</span>
                    </div>
                </div>
            </div>
        </Auth>
    );
};


export default VerifyEmail;