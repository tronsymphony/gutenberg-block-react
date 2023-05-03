import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, MediaUpload } from '@wordpress/block-editor';

import {
	TextControl,
	PanelBody,
	PanelRow,
	ToggleControl,
	ExternalLink, Button
} from '@wordpress/components';

export default function save({ attributes }) {
	

	const { content, contentTitle,align, backgroundColor, textColor, kaLink, linkLabel, hasLinkNofollow, downloadFileUrl } = attributes;

	const blockProps = useBlockProps.save( {
		className: `has-text-align-${ align }`
	} );

	return (
		<>
			<div className="container-xxl py-5" >
				<div className="container px-lg-5">
					<div className="row g-5">
						<div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
							<div className="section-title position-relative mb-4 pb-2">
								<h6 className="position-relative text-primary ps-4">About Us</h6>
								<RichText.Content
									tagName="h2"
									className="mt-2"
									value={contentTitle}
								/>
							</div>
							<RichText.Content
								tagName="p"
								className="mb-4"
								value={content}
							/>
							<div className="row g-3">
								<div className="col-sm-6">
									<h6 className="mb-3"><i className="fa fa-check text-primary me-2"></i>Award Winning</h6>
									<h6 className="mb-0"><i className="fa fa-check text-primary me-2"></i>Professional Staff</h6>
								</div>
								<div className="col-sm-6">
									<h6 className="mb-3"><i className="fa fa-check text-primary me-2"></i>24/7 Support</h6>
									<h6 className="mb-0"><i className="fa fa-check text-primary me-2"></i>Fair Prices</h6>
								</div>
							</div>
							<div className="d-flex align-items-center mt-4">
								<a 
									href={ kaLink }
									className="btn btn-primary rounded-pill px-4 me-3"
									rel={ hasLinkNofollow ? "nofollow" : "noopener noreferrer" }
								>
									{ linkLabel }
								</a>
								<a className="btn btn-outline-primary btn-square me-3" href=""><i className="fab fa-facebook-f"></i></a>
								<a className="btn btn-outline-primary btn-square me-3" href=""><i className="fab fa-twitter"></i></a>
								<a className="btn btn-outline-primary btn-square me-3" href=""><i className="fab fa-instagram"></i></a>
								<a className="btn btn-outline-primary btn-square" href=""><i className="fab fa-linkedin-in"></i></a>
							</div>
						</div>
						<div className="col-lg-6">
						
							<img className="img-fluid wow zoomIn" data-wow-delay="0.5s" src={downloadFileUrl}></img>
						</div>
					</div>
				</div>
			</div>

		</>

	);
}