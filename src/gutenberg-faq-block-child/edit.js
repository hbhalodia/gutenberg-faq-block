import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {

	const { question, answer } = attributes;

	return (
		<>
			<div className="faq-wrapper">
				<RichText
					tagName="div"
					className="faq-question"
					value={ question }
					onChange={ ( question ) => { setAttributes( { question: question } ) } }
					placeholder={ __( 'Question..', 'gutenberg-faq-block' ) }
				/>
				<RichText
					tagName="div"
					className="faq-answer"
					value={ answer }
					onChange={ ( answer ) => { setAttributes( { answer: answer } ) } }
					placeholder={ __( 'Answer..', 'gutenberg-faq-block' ) }
				/>
			</div>
		</>
	);
}