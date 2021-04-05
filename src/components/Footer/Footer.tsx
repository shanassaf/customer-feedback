import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
	padding: 50px 20px;
	font-size: 14px;
	text-align: center;
`;
const StyledLink = styled.a`
	text-decoration: none;
	color: #800080;

	:hover {
		text-decoration: underline;
	}
`;

export const Footer = (): JSX.Element => (
	<StyledFooter>
		Check out the repository for this webpage on
		<StyledLink href="https://github.com/shanassaf/customer-feedback"> github</StyledLink>
	</StyledFooter>
);
