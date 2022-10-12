import { useBlockProps, RichText } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';

export default function save( { attributes } ) {
	const blockProps = useBlockProps.save();
	const { faqContent } = attributes;

	console.log( faqContent );

	return (
		<Fragment>
			<div { ...blockProps }>
				<div className="faq-wrapper">
						<RichText.Content
							tagName="div"
							className="faq-question"
							value={ faqContent.length > 0 ? faqContent[0].question : "" }
						/>
						<RichText.Content
							tagName="div"
							className="faq-answer"
							value={ faqContent.length > 0 ? faqContent[0].answer : "" }
						/>
					</div>
				</div>
		</Fragment>
	);
}
