export const problemRepositoryCreateActions = {
    createProblemRepository: (data) => {
        return async (dispatch, getState, {problemAPI}) => {
            problemAPI.create(data)
                .then((response) => {
                    console.log(response);
                    return response.data;
                });
        }
    }
};