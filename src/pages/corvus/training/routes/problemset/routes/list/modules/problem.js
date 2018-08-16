export const problemListActions = {
    fetchProblemList: (page, limit, is_public) => {
        return async (dispatch, getState, {problemAPI}) => {
            return problemAPI.list(page + 1, limit, null, is_public)
                .then((response) => {
                    const problems = response.data;
                    return Promise.resolve(problems);
                })
        }
    },
    refreshToken : () => {
        return async (dispatch, getState, {sessionAPI}) => {
            return sessionAPI.refreshToken();
        }
    }
};