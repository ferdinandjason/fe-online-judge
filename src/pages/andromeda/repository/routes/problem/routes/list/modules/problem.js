export const problemRepositoryListActions = {
    fetchProblemRepositoryList: (page, limit) => {
        return async (dispatch, getState, API) => {
            return API.problemAPI.list(page+1, limit)
                .then((response) => {
                    const problems = response.data;
                    return Promise.resolve(problems);
                });
        }
    }
};