import {store} from "../../../../../../../../modules/store";
import {Toast} from "../../../../../../../../modules/dispatcher/toast";

export const submissionActions = {
    createSubmission: (data) => {
        return async (dispatch, getState, {submissionAPI}) => {
            return submissionAPI.create(data)
                .then((response) => {
                    if (response.status === 201) {
                        store.dispatch(Toast.success(`Code received! Your submission was placed in the judging queue`));
                    }
                });
        }
    }
};