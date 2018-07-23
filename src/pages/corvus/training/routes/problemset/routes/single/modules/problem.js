import { selectToken } from '../../../../../../../../modules/redux/session';

export const problemActions = {
    fetchProblem: (problemId) => {
        return async (problemId)=> {
            const token = selectToken();
            return false;
        }
    },
    fetchProblemRank: (problemId) => {
        return async (problemId) => {
            const token = selectToken();
            return false;
        }
    }
};