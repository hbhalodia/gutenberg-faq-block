import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const blockProps = useBlockProps.save();
	const { question, answer } = attributes;

	return (
		<>
			<div className="faq-wrapper">
				<RichText.Content
					tagName="div"
					className="faq-question"
					value={ question }
				/>
				<RichText.Content
					tagName="div"
					className="faq-answer"
					value={ answer }
				/>
			</div>
		</>
	);
}
