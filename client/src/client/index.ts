import {init, RematchDispatch, RematchRootState} from '@rematch/core';
import loadingPlugin, {ExtraModelsFromLoading} from '@rematch/loading';
import immerPlugin from '@rematch/immer';
import selectPlugin from '@rematch/select';
import {RootModel, models} from './models';

const actionsDenylist = ['loading/show', 'loading/hide'];

type FullModel = ExtraModelsFromLoading<RootModel>;

const store = init<RootModel, FullModel>({
	models,
	redux: {
		devtoolOptions: {
			actionsDenylist,
			disabled: false
		},
		rootReducers: {'user/logout': () => undefined}
	},
	plugins: [immerPlugin(), loadingPlugin(), selectPlugin()]
});

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel, FullModel>;

export default store;
