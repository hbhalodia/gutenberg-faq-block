import { __ } from '@wordpress/i18n';
import { InnerBlocks } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {

	const ALLOWED_BLOCKS = [
		'create-block/gutenberg-faq-block-child',
	];

	return (
		<div className='faq-parent-wrapper'>
			<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />
		</div>
	);
}
