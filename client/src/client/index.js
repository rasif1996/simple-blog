import {init} from '@rematch/core';
import loadingPlugin from '@rematch/loading';
import immerPlugin from '@rematch/immer';
import selectPlugin from '@rematch/select';

import * as models from './models';

const actionsDenylist = ['loading/show', 'loading/hide'];

const store = init({
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

export default store;
