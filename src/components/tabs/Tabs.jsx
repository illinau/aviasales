import React from 'react';

import classes from './Tabs.module.scss';
import {connect} from "react-redux";
import * as actions from "../../state/actions";

const Tabs = ({ FILTERS_CHEAPEST, FILTERS_FASTEST}) => (
  <div className={classes.group}>
    <button className={classes.left}
            type="button"
            onClick={FILTERS_CHEAPEST}>
        САМЫЙ ДЕШЕВЫЙ
    </button>
    <button type="button"
            onClick={FILTERS_FASTEST}>
        САМЫЙ БЫСТРЫЙ
    </button>
    <button className={classes.right}
            type="button">
        ОПТИМАЛЬНЫЙ
    </button>
  </div>
);

const mapStateToProps = (state) => {
    return {
        transfers: state.transfers,
        filters: state.filters,
    }
}

export default connect(mapStateToProps, actions)(Tabs);
