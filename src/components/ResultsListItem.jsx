import PropTypes from 'prop-types';
import '../App.css';

const colors = {
    'red': {
        backgroundColor: 'bg-red-50',
        textColor: 'text-red-400'
    },
    'yellow':
    {
        backgroundColor: 'bg-yellow-50',
        textColor: 'text-yellow-400'
    },
    'green': 
    {
        backgroundColor: 'bg-green-50',
        textColor: 'text-green-400'
    },
    'blue': {
        backgroundColor: 'bg-blue-50',
        textColor: 'text-blue-400'
    }
}

export default function ResultsListItem({ category, score = 0, icon, color }) {
    const {backgroundColor, textColor} = colors[color]
    return (
        <div className={`${backgroundColor} results-list-item`}>
            <div className="results-list-item-header">
                <div className="results-list-item-icon">
                    <img src={icon} alt={category} />
                </div>
                <div className={`${textColor} text-preset-5-medium`}>
                    {category}
                </div>
            </div>
            <div className="flex flex-row items-center gap-1 text-preset-5-bold">
                <span className="text-navy-950">{score}</span>
                <span className="text-navy-950/50">/ 100</span>
            </div>
        </div>
    )
}

ResultsListItem.propTypes = {
    category: PropTypes.string.isRequired,
    score: PropTypes.number,
    icon: PropTypes.string.isRequired,
    color: PropTypes.oneOf(['red', 'yellow', 'green', 'blue']),
}