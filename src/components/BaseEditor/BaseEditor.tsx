import { Icon, IconName } from '@blueprintjs/core';
import * as React from 'react';

export interface BaseEditorState {
    isOpen: boolean;
}

export interface BaseEditorProps {
    name: string;
    icon?: IconName;
    defaultOpen?: boolean;
}

export class BaseEditor extends React.Component<BaseEditorProps, BaseEditorState> {
    public static defaultProps = {
        defaultOpen: true,
    };

    public state = {
        isOpen: this.props.defaultOpen ?? BaseEditor.defaultProps.defaultOpen,
    };

    private toggleEditor = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    public render() {
        return (
            <div className={`${this.props.name.toLowerCase()}-editor base-editor`}>
                <h4
                    title={`${this.state.isOpen ? 'Collapse' : 'Open'} this editor.`}
                    className="font-bold flex content-center justify-between m-1 mb-2 cursor-pointer text-base"
                    onClick={this.toggleEditor}>
                    <span>
                        {/* {this.props.icon && <Icon style={{
                            opacity: 0.7,
                            fontSize: '90%',
                            marginRight: '4px',
                        }} icon={this.props.icon} />} */}
                        {this.props.name}
                    </span>
                    <span
                        className={`bp3-icon bp3-icon-caret-${this.state.isOpen ? 'up' : 'down'}`}
                    />
                </h4>
                {this.state.isOpen ? this.props.children : null}
            </div>
        );
    }
}
