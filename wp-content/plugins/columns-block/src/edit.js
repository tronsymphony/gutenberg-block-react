import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	AlignmentControl,
	BlockControls,
	MediaUpload, MediaUploadCheck, InspectorControls
} from '@wordpress/block-editor';

import { Fragment } from '@wordpress/element'
import { useState } from '@wordpress/element';

import {
	TextControl,
	PanelBody,
	PanelRow,
	ToggleControl,
	ExternalLink, Button
} from '@wordpress/components';

import './editor.scss';

export default function Edit(props) {
	const { className, attributes, setAttributes } = props
	const { show } = attributes
	const blockProps = useBlockProps();
	const { content, contentTitle, align, backgroundColor, textColor, kaLink, linkLabel, hasLinkNofollow, fileName, downloadFileUrl,downloadFileTitle,downloadFileName } = attributes;
	
	const onChangeContent = (newContent) => {
		setAttributes({ content: newContent })
	}

	const onChangeContentTitle = (newContentTitle) => {
		setAttributes({ contentTitle: newContentTitle === undefined ? '' : newContentTitle })
	}

	const onChangeSetMedia = (mediaContent) => {
		setAttributes({
			downloadFileTitle: mediaContent.title,
			downloadFileUrl: mediaContent.url,
			downloadFileName: mediaContent.filename
		  })
		//   console.log(attributes.downloadFile)
	}

	const onChangeKaLink = (newKaLink) => {
		setAttributes({ kaLink: newKaLink === undefined ? '' : newKaLink })
	}

	const onChangeLinkLabel = (newLinkLabel) => {
		setAttributes({ linkLabel: newLinkLabel === undefined ? '' : newLinkLabel })
	}

	const toggleNofollow = () => {
		setAttributes({ hasLinkNofollow: !hasLinkNofollow })
	}
	let mediaId;


	return (
		<>
			<InspectorControls>
				<PanelBody
					title={__('Link Settings', 'ka-example-block')}
					initialOpen={true}
				>
					<PanelRow>

						<MediaUpload
							onSelect={(media) =>
								onChangeSetMedia(media)
								// console.log(media)
							}
							value={mediaId}
							render={({ open }) => (
								<Button onClick={open}>Open Media Library</Button>
							)}
						/>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<TextControl
								label={__('KA link', 'ka-example-block')}
								value={kaLink}
								onChange={onChangeKaLink}
								help={__('Add your Academy link', 'ka-example-block')}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Link label', 'ka-example-block')}
								value={linkLabel}
								onChange={onChangeLinkLabel}
								help={__('Add link label', 'ka-example-block')}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<ToggleControl
								label="Add rel = nofollow"
								help={
									hasLinkNofollow
										? 'Has rel nofollow.'
										: 'No rel nofollow.'
								}
								checked={hasLinkNofollow}
								onChange={toggleNofollow}
							/>
						</fieldset>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<div >
				<div className="container-xxl py-5">
					<div className="container px-lg-5">
						<div className="row g-5">
							<div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
								<div className="section-title position-relative mb-4 pb-2">
									<h6 className="position-relative text-primary ps-4">About Us</h6>
									{/* The best SEO solution with 10 years of experience */}
									<RichText
										{...blockProps}
										tagName="h2"
										className='mb-4'
										onChange={onChangeContentTitle}
										value={attributes.contentTitle}
										placeholder={__('Write your text...')}
									/>
								</div>
								<RichText
									{...blockProps}
									tagName="p"
									className='mb-4'
									onChange={onChangeContent}
									allowedFormats={['core/bold', 'core/italic']}
									value={attributes.content}
									placeholder={__('Write your text...')}
									style={{ textAlign: attributes.align }}

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
									<ExternalLink
										href={kaLink}
										className="btn btn-primary rounded-pill px-4 me-3"
										rel={hasLinkNofollow ? "nofollow" : ""}
									>
										{linkLabel}
									</ExternalLink>
									<a className="btn btn-outline-primary btn-square me-3" href=""><i className="fab fa-facebook-f"></i></a>
									<a className="btn btn-outline-primary btn-square me-3" href=""><i className="fab fa-twitter"></i></a>
									<a className="btn btn-outline-primary btn-square me-3" href=""><i className="fab fa-instagram"></i></a>
									<a className="btn btn-outline-primary btn-square" href=""><i className="fab fa-linkedin-in"></i></a>
								</div>
							</div>
							<div className="col-lg-6">
								
								<img className="img-fluid wow zoomIn" data-wow-delay="0.5s" src={attributes.downloadFileUrl}></img>
							</div>
						</div>
					</div>
				</div>



			</div>

		</>
	);
}

