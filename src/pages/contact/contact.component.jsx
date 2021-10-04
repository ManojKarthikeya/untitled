import React from "react";
import Email from "../../components/email/email.component";
import "./contact.styles.scss";
import { EmailShareButton } from "react-share";

const ContactPage = () => (
	<div className="contactPage">
		<div className="email-container">
			<EmailShareButton>
				<Email />
			</EmailShareButton>
		</div>
		<div className="container">
			<div className="filter" />
		</div>
	</div>
);

export default ContactPage;
