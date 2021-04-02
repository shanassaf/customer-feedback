import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../../state/StoreProvider';

const StyledTitle = styled.h2`
	font-size: 20px;
`;
const StyledSubTitle = styled.h2`
	font-size: 12px;
`;
const StyledComments = styled.ul`
	padding: 0;
`;
const StyledComment = styled.li`
	list-style: none;
	font-size: 13px;
	border: 1px solid black;
	border-radius: 5px;
	padding: 10px 10px;
	margin: 20px 0;
`;
const StyledItem = styled.div``;

export const Comments = (): JSX.Element => {
	const {
		state: { comments },
	} = useContext(Context);

	return (
		<StyledComments>
			<StyledTitle>Comments section</StyledTitle>
			<StyledSubTitle>See the feedback other users have left here!</StyledSubTitle>
			<>
				{comments
					.reverse()
					.filter((ratings) => ratings.text !== '')
					.map((comment) => {
						const { name, email, text, rating, uuid } = comment;
						return (
							<StyledComment key={uuid}>
								<StyledItem key={`${name}${uuid}`}>{`Name: ${name}`}</StyledItem>
								<StyledItem key={`${email}${uuid}`}>{`Email: ${email}`}</StyledItem>
								<StyledItem key={`${rating}${uuid}`}>{`Rating: ${rating}`}</StyledItem>
								<StyledItem key={`${text}${uuid}`}>{`Comment: ${text}`}</StyledItem>
							</StyledComment>
						);
					})}
			</>
		</StyledComments>
	);
};
