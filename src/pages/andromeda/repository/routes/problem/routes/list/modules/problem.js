import {Toast} from "../../../../../../../../modules/redux/toast";

export const problemRepositoryListActions = {
    fetchProblemRepositoryList: (page, limit, owner_id) => {
        return async (dispatch, getState, {problemAPI}) => {
            return problemAPI.list(page + 1, limit, owner_id)
                .then((response) => {
                    const problems = response.data;
                    return Promise.resolve(problems);
                });
        }
    },
    deleteProblem: (id,slug) => {
        return async (dispatch, getState, {problemAPI}) => {
            return problemAPI.delete_(id)
                .then((response) => {
                    if(response.status === 204){
                        dispatch(Toast.success(`Problem ${slug} deleted !`));
                    }
                })
        }
    }
};