import PropTypes from 'prop-types';
import React, {useState} from 'react';


const Dropdown = props => {
    const [open, setOpen] = useState(false);
    const {value, setValue, options, placeholder} = props;
    return (
        <div className={open ? 'dropdown open' : 'dropdown'} onClick={() => setOpen(prev => !prev)}>
            <div className={'dropdown__top'}>
                <div className={'dropdown__box'}>
                        <span className={value ? 'dropdown__selected selected' : 'dropdown__selected'}>
                            {value ? value.hasOwnProperty('description') ?
                                value.description : value.symbol : placeholder
                            }
                        </span>
                    <i className={open ? 'dropdown__icon fas fa-chevron-up' : ' dropdown__icon fas fa-chevron-down'}/>
                </div>
            </div>

            <div className={open ? 'dropdown__bottom open' : 'dropdown__bottom'}>
                {
                    options.map((opts, idx) =>
                        <div key={idx}
                             onClick={() => {
                                 setValue(opts)
                                 setOpen(true);
                             }}
                             className={value === opts ? 'dropdown__options selected' : 'dropdown__options'}>
                            <span>{opts.hasOwnProperty('description') ? opts.description : opts.symbol}</span>
                        </div>
                    )
                }
            </div>
        </div>
    );
};


Dropdown.propTypes = {
    value: PropTypes.object,
    setValue: PropTypes.func,
    placeholder: PropTypes.string,
    options: PropTypes.array.isRequired,
};


export default Dropdown;