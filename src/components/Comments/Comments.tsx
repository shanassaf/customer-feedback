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
	border-top: 1px solid black;
	border-bottom: 1px solid black;
	padding: 10px 20px;
	max-width: 1024px;
	margin: 0 auto;
	margin-top: 50px;
`;
const StyledComment = styled.li`
	list-style: none;
	font-size: 13px;
	border: 1px solid black;
	border-radius: 5px;
	padding: 10px 10px;
	margin: 20px 0;
	background: #c5dadd;
`;
const StyledItem = styled.div``;

export const Comments = (): JSX.Element => {
	const {
		state: { feedback },
	} = useContext(Context);

	return (
		<StyledComments>
			<StyledTitle>Comments section</StyledTitle>
			<StyledSubTitle>See the feedback that users have left here!</StyledSubTitle>
			{feedback.map((feedback) => {
				const { name, comment, rating, uuid } = feedback;
				return (
					<StyledComment key={uuid}>
						<StyledItem key={`${name}${uuid}`}>{`Name: ${name}`}</StyledItem>
						<StyledItem key={`${rating}${uuid}`}>{`Rating: ${rating}`}</StyledItem>
						<StyledItem key={`${comment}${uuid}`}>{`Comment: ${comment}`}</StyledItem>
					</StyledComment>
				);
			})}
		</StyledComments>
	);
};
