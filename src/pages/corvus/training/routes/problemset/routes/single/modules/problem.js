import {selectToken} from '../../../../../../../../modules/redux/session';

export const problemActions = {
    fetchProblem: (problemId) => {
        return async (dispatch , getState, {problemAPI}) => {
            return problemAPI.show(problemId)
                .then((response) => {
                    console.log(response);
                    const problem = response.data.data;
                    return Promise.resolve(problem);
                });
        }
    },
    fetchProblemRank: (problemId) => {
        return async (problemId) => {
            const token = selectToken();
            console.log(token);
            return false;
        }
    },
    refreshToken : () => {
        return async (dispatch, getState, {sessionAPI}) => {
            return sessionAPI.refreshToken();
        }
    }
};