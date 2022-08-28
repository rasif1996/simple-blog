import Input from '../../../../common/ui/Input';
import useAppDispatch from '../../../../hooks/useAppDispatch';
import useHookForm from '../../../../hooks/useHookForm';
import {CreatePostFormType} from '../../../../types/forms';

import s from './postsCreate.module.scss';

function PostsCreate(): JSX.Element {
	const {
		posts: {createPost}
	} = useAppDispatch();

	const {
		handleSubmit,
		register,
		formState: {errors}
	} = useHookForm<CreatePostFormType>({validate: 'createPost'});

	return (
		<>
			<p className={s.title}>Posts Create Page</p>
			<form onSubmit={handleSubmit(createPost)}>
				<Input label='Заголовок' name='title' register={register} errors={errors} />
				<Input label='Текст' name='text' register={register} errors={errors} />
				<button>Create</button>
			</form>
		</>
	);
}

export default PostsCreate;
