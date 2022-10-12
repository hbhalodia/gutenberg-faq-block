import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import './editor.scss';

export default function Edit( { attributes, setAttributes, clientId } ) {

	const blockProps = useBlockProps();
	const ALLOWED_BLOCKS = [
		'create-block/gutenberg-faq-block-child',
	];

	return (
		<div { ...blockProps }>
			<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />
		</div>
	);
}
