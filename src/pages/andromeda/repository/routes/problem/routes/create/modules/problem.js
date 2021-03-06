import {Toast} from "../../../../../../../../modules/dispatcher/toast";
import {store} from "../../../../../../../../modules/store";

export const problemRepositoryCreateActions = {
    createProblemRepository: (data) => {
        return async (dispatch, getState, {problemAPI}) => {
            problemAPI.create(data)
                .then((response) => {
                    if (response.status === 201) {
                        store.dispatch(Toast.success(`Problem ${data.title} Created !`));
                    }
                });
        }
    },
    refreshToken : () => {
        return async (dispatch, getState, {sessionAPI}) => {
            return sessionAPI.refreshToken();
        }
    }
};