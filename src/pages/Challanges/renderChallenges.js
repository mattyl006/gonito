import { ELEMENTS_PER_PAGE } from '../../utils/globals';
import MiniChallenge from '../../components/challenges_list/MiniChallenge';
import { Grid } from '../../utils/containers';
import styled from 'styled-components';

const ChallengesGrid = styled(Grid)`
  margin: 32px 0;
  grid-gap: 32px 0;

  @media (min-width: 1200px) {
    margin: 96px 0;
    grid-gap: 64px;
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1600px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const renderChallenges = (pageNr, challenges, statusFilter) => {
  const n = (pageNr - 1) * ELEMENTS_PER_PAGE;
  if (challenges && challenges !== []) {
    return (
      <ChallengesGrid margin="32px 0" gridGap="32px 0">
        {challenges
          .slice(n, n + ELEMENTS_PER_PAGE)
          .map(
            (
              {
                title,
                type,
                description,
                mainMetric,
                bestScore,
                baseline,
                prize,
                deadline,
                name,
              },
              index
            ) => {
              return (
                <MiniChallenge
                  key={`challenge-${index}`}
                  title={title}
                  type={type}
                  description={description}
                  metric={mainMetric}
                  bestScore={bestScore}
                  baseline={baseline}
                  prize={prize}
                  deadline={deadline}
                  name={name}
                />
              );
            }
          )}
      </ChallengesGrid>
    );
  }
  return '';
};

export default renderChallenges;
