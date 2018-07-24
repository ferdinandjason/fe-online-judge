import { selectToken } from '../../../../../../../../modules/redux/session';

export const problemRepositoryListActions = {
    fetchProblemRepositoryList: () => {
        return async ()=> {
            const token = selectToken();
            return false;
        }
    }
};