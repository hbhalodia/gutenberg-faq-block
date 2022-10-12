import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {

	const { faqContent } = attributes;
	const blockProps = useBlockProps();

	if ( ! faqContent[0] ) { faqContent[0] = {} };

	return (
		<Fragment { ...blockProps } >
			<div className="faq-wrapper">
				<RichText
					tagName="div"
					className="faq-question"
					value={ ( faqContent[0] ) ? faqContent[0].question : "" }
					onChange={ ( question ) => { faqContent[0].question = question; setAttributes( { faqContent: faqContent } ) } }
					placeholder={ __( 'Question..', 'gutenberg-faq-block' ) }
				/>
				<RichText
					tagName="div"
					className="faq-answer"
					value={ ( faqContent[0] ) ? faqContent[0].answer : "" }
					onChange={ ( answer ) => { faqContent[0].answer = answer; setAttributes( { faqContent: faqContent } ) } }
					placeholder={ __( 'Answer..', 'gutenberg-faq-block' ) }
				/>
			</div>
		</Fragment>
	);
}