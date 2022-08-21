import {Dispatch} from '../client';
import {useDispatch} from 'react-redux';

const useAppDispatch = (): Dispatch => useDispatch<Dispatch>();

export default useAppDispatch;
