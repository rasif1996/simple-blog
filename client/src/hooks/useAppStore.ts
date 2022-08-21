import {useStore} from 'react-redux';
import {Store} from '../client';

function useAppStore(): Store {
	return useStore() as Store;
}

export default useAppStore;
