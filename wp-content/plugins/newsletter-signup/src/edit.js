/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import img from './images/newsletter.png';
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps ,RichText} from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit(props) {
	const {  attributes, setAttributes } = props
	
	const blockProps = useBlockProps();
	const { content, contentTitle } = attributes;
	
	const onChangeContentTitle = (newContent) => {
		setAttributes({ contentTitle: newContent })
	}
	const onChangeContent = (newContent) => {
		setAttributes({ content: newContent })
	}

	return (
		<>
		
		<div className="container-xxl bg-primary newsletter my-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container px-lg-5">
                <div className="row align-items-center" style={{height: "250px"}}>
                    <div className="col-12 col-md-6">
						<RichText
										{...blockProps}
										tagName="h3"
										className='text-white'
										onChange={onChangeContentTitle}
										value={attributes.contentTitle}
										placeholder={__('Write your text...')}
									/>
									<RichText
										{...blockProps}
										tagName="small"
										className='text-white'
										onChange={onChangeContent}
										value={attributes.content}
										placeholder={__('Write your text...')}
									/>
                        <div className="position-relative w-100 mt-3">
                            <input className="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text" placeholder="Enter Your Email" style={{height: "48px"}} />
                            <button type="button" className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i className="fa fa-paper-plane text-primary fs-4"></i></button>
                        </div>
                    </div>
                    <div className="col-md-6 text-center mb-n5 d-none d-md-block">
                        <img className="img-fluid mt-5" style={{height: "250px"}} src={img}></img>
                    </div>
                </div>
            </div>
        </div>
		</>
	);
}
