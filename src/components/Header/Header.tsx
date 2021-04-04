import React from 'react';
import styled from 'styled-components';
import Checkout from '../../images/checkout.svg';

const StyledHeader = styled.header`
	padding: 15px;
`;

export const Header = (): JSX.Element => (
	<StyledHeader>
		<img height="30px" src={Checkout} alt="Checkout logo" />
	</StyledHeader>
);
