export const problemRepositoryListActions = {
    fetchProblemRepositoryList: (page, limit, owner_id) => {
        return async (dispatch, getState, API) => {
            return API.problemAPI.list(page+1, limit, owner_id)
                .then((response) => {
                    const problems = response.data;
                    return Promise.resolve(problems);
                });
        }
    }
};