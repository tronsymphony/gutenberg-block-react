/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText, MediaUpload } from '@wordpress/block-editor';
import img from './images/newsletter.png';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes }) {

	const { content, contentTitle } = attributes;


	return (
		<>

			<div className="container-xxl bg-primary newsletter my-5 wow fadeInUp" data-wow-delay="0.1s">
				<div className="container px-lg-5">
					<div className="row align-items-center" style={{ height: "250px" }}>
						<div className="col-12 col-md-6">
							<RichText.Content
								tagName="h3"
								className='text-white'
								value={attributes.contentTitle}
							/>
							<RichText.Content
								tagName="small"
								className='text-white'
								value={attributes.content}
							/>
							<div className="position-relative w-100 mt-3">
								<input className="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text" placeholder="Enter Your Email" style={{ height: "48px" }} />
								<button type="button" className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i className="fa fa-paper-plane text-primary fs-4"></i></button>
							</div>
						</div>
						<div className="col-md-6 text-center mb-n5 d-none d-md-block">
							<img className="img-fluid mt-5" style={{ height: "250px" }} src={img}></img>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
