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
    refreshToken : () => {
        return async (dispatch, getState, {sessionAPI}) => {
            return sessionAPI.refreshToken();
        }
    }
};