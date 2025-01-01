import PropTypes from 'prop-types';

const ButtonUI = ({ className, buttonName }) => {
    return (
        <div>
            <button className={className}>{buttonName}</button>
        </div>
    );
}
ButtonUI.propTypes = {
    className: PropTypes.string.isRequired,
    buttonName: PropTypes.string.isRequired
};

export default ButtonUI;
