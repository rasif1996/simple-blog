export type CreatePostFormType = {
	title: string;
	text: string;
};

export type LoginFormType = {
	email: string;
	password: string;
	submission?: string;
};

export type RegistrationFormType = {
	email: string;
	password: string;
	passwordConfirmation: string;
	submission?: string;
};

export type AccountFormType = {
	image: File;
	name: string;
	surname: string;
	age: number;
};
