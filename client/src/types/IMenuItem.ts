interface IMenuItem {
	label: string;
	to: string;
	authRequired?: boolean;
	children?: IMenuItem[];
}

export default IMenuItem;
