import Container from '../container/Container';
import { StyledCards } from './styles';
import Card from '../card/Card';

const CardContainer = () => {
	return (
		<StyledCardContainer>
			<Card color={color} />
		</StyledCardContainer>
	);
};

export default CardContainer;
