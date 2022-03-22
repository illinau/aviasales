import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../state/actions'

import classes from './Filter.module.scss';

const Filter = ({ TRANSFERS_NOTHING, TRANSFERS_ONE,
                    TRANSFERS_TWO, TRANSFERS_THREE, TRANSFERS_ALL, transfers}) => {

    const all = transfers.nothing && transfers.one && transfers.two && transfers.three;

    return (
        <div className={classes.style}>
            <div className={classes.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
            <label>
                <input type="checkbox"
                       onClick={TRANSFERS_ALL}
                       checked={all}
                />
                <span>Все</span>
            </label>
            <label>
                <input type="checkbox"
                       onClick={TRANSFERS_NOTHING} checked={transfers.nothing}/>
                <span>Без пересадок</span>
            </label>
            <label>
                <input type="checkbox"
                       onClick={TRANSFERS_ONE} checked={transfers.one}/>
                <span>1 пересадка</span>
            </label>
            <label>
                <input type="checkbox"
                       onClick={TRANSFERS_TWO} checked={transfers.two}/>
                <span>2 пересадки</span>
            </label>
            <label>
                <input type="checkbox"
                       onClick={TRANSFERS_THREE}
                       checked={transfers.three}/>
                <span>3 пересадки</span>
            </label>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        transfers: state.transfers,
        filters: state.filters,
    }
}

export default connect(mapStateToProps, actions)(Filter);
