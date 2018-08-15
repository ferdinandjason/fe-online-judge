import {Toast} from "../../../../../../../../modules/redux/toast";

export const problemRepositoryActions = {
    fetchProblem: (problemId) => {
        return async (dispatch, getState, {problemAPI}) => {
            return problemAPI.show(problemId)
                .then((response) => {
                    console.log(response);
                    const problem = response.data.data;
                    return Promise.resolve(problem);
                });
        }
    },
    updateProblem: (problemId, data) => {
        console.log(problemId,data);
        return async (dispatch, getState, {problemAPI}) => {
            return problemAPI.update(problemId, data)
                .then((response) => {
                    if(response.status === 204){
                        dispatch(Toast.success(`Problem ${data.slug} updated !`));
                    }
                });
        }
    }
};