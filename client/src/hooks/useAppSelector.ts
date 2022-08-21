import {TypedUseSelectorHook} from 'react-redux';
import {useSelector} from 'react-redux';
import {RootState} from '../client';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useAppSelector;
