import { selectToken } from '../../../../../../../../modules/redux/session';

export const problemRepositoryActions = {
    fetchProblem: (problemId) => {
        return async (problemId)=> {
            const token = selectToken();
            return false;
        }
    }
};