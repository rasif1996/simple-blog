import postsService from '@/services/posts.service';
import {Response, Request, NextFunction} from 'express';

class PostsController {
	async getPosts(req: Request, res: Response, next: NextFunction) {
		try {
			const posts = await postsService.getPosts();

			res.json(posts);
		} catch (e) {
			next(e);
		}
	}

	async createPost(req: Request, res: Response, next: NextFunction) {
		try {
			const {title, text} = req.body;
			const id = req.user.id;

			const post = await postsService.createPost(id, title, text);

			res.json(post);
		} catch (e) {
			next(e);
		}
	}
}

export default new PostsController();
