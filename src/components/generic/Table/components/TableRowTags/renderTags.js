import { FlexRow } from '../../../../../utils/containers';

const renderTags = (tags, i) => {
    if (tags && tags.length > 0) {
        return tags.map((tag, j) => {
            return (
                <FlexRow className="TableStyle__tag" key={`submissionTag-${i}-${j}`}>
                    {tag.name}
                </FlexRow>
            );
        });
    }
};

export default renderTags;