import { INC, RESET } from './counterActions';

export const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch({ type: INC }),
        reset: () => dispatch({ type: RESET }),
    };
};

export const mapStateToProps = (state) => {
    return {
        counter: state,
    };
};
