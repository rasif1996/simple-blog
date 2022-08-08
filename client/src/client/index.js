import {init} from '@rematch/core';
import loadingPlugin from '@rematch/loading';
import immerPlugin from '@rematch/immer';
import selectPlugin from '@rematch/select';

import * as models from './models';

const store = init({models, plugins: [immerPlugin(), loadingPlugin(), selectPlugin()]});

export default store;
