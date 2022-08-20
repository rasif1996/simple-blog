import {Types} from 'mongoose';

interface IToken {
	user: Types.ObjectId;
	refreshToken: string;
}

export default IToken;
