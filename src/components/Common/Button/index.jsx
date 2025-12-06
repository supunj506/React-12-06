import {Component} from "react";
import {Button} from "@mui/material";
import PropTypes from "prop-types";

class GDSEButton extends Component{
    static propTypes = {
        onClick: PropTypes.func,
        children: PropTypes.node,
        variant: PropTypes.string,
        className: PropTypes.string,
        label: PropTypes.string,
        size: PropTypes.number,
        disabled: PropTypes.bool,
        color: PropTypes.string,
        type: PropTypes.string,
        endIcon: PropTypes.string,
        startIcon: PropTypes.string,
    }

    static defaultProps = {
        className: '',
        color: 'primary',
        label:" ",
        size:"medium",
        variant:"contained",
        disabled: false,
        type: 'button',

    }

    handleButtonClick = (event) => {
        const {onClick,disabled} = this.props;
        if (disabled) return;
        onClick && onClick({event});
    }

    renderChildren = (label, children) => {
        if (children) return children;
        if(label) return label;
    }

    render() {
        const {
            children,
            variant,
            className,
            size,
            disabled,
            color,
            type,
            label,
            endIcon,
            startIcon,
            style,

        } = this.props;

        return(
            <Button
                className={className}
                size={size}
                disabled={disabled}
                color={color}
                onClick={this.handleButtonClick}
                style={style}
                type={type}
                variant={variant}
                startIcon={startIcon}
                endIcon={endIcon}
            >
                {this.renderChildren(label, children)}
            </Button>
        )
    }
}

export default GDSEButton;