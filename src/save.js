import { InnerBlocks } from '@wordpress/block-editor';

export default function save() {

	return (
		<div className='faq-parent-wrapper'>
			<InnerBlocks.Content />
		</div>
	);
}
