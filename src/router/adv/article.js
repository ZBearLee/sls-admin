/**
 * Created by sailengsi on 2017/5/11.
 */

import Container from '../../views/container/';

import Adv from '../../views/page/adv/';

export default {
	path     : 'article',
	name     : 'article-manager',
	icon     : 'inbox',
	component: Container.Content,
	redirect : '/adv/article/list',
	children : [{
		path     : 'list',
		name     : 'article-list',
		icon     : 'reorder',
		component: Adv.Article.List
	}, {
		path     : 'edit',
		name     : 'article-edit',
		icon     : 'edit',
		component: Adv.Article.Edit
	}]
};