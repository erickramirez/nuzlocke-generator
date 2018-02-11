import * as React from 'react';

import { LinkedTrainerInfoEditField } from './LinkedTrainerInfoEditField';
import { Popover, Position, Menu, PopoverInteractionKind } from '@blueprintjs/core';

const SpanBlock = ({ text }) => (
    <span
        style={{
            background: '#e6eef1',
            display: 'inline-block',
            padding: '0 3px',
            margin: '2px',
            borderRadius: '.25rem',
        }}>
        {text}
    </span>
);

const trainerNames = ['Red', 'Blue', 'May', 'Moon', 'Sun', 'Dawn', 'Ethan', 'Hilda'];

export class TrainerInfoEditor extends React.Component<{}, {}> {
    constructor(props) {
        super(props);
    }

    private onInput = e => {};

    public render() {
        return (
            <div className='trainer-info-editor'>
                <LinkedTrainerInfoEditField
                    onInput={this.onInput}
                    label='Name'
                    name='name'
                    placeholder='Trainer Name'
                />
                <LinkedTrainerInfoEditField
                    onInput={this.onInput}
                    label='ID'
                    name='id'
                    placeholder='Trainer ID'
                />
                <LinkedTrainerInfoEditField
                    onInput={this.onInput}
                    label='Time'
                    name='time'
                    placeholder='0:00'
                />
                <LinkedTrainerInfoEditField
                    onInput={this.onInput}
                    label='Money'
                    name='money'
                    placeholder='$0'
                />
                <LinkedTrainerInfoEditField
                    onInput={this.onInput}
                    label='Title'
                    name='title'
                    placeholder=''
                />
                <LinkedTrainerInfoEditField
                    onInput={this.onInput}
                    label='# of Badges'
                    name='badges'
                    placeholder='0'
                />
                {/* <LinkedTrainerInfoEditField
                    onInput={this.onInput}
                    label='Checkpoints (Badges)'
                    name='badges'
                    placeholder='0'
                /> */}
                <LinkedTrainerInfoEditField
                    onInput={this.onInput}
                    label='Exp Share'
                    name='expShareStatus'
                    placeholder='off'
                />
                <LinkedTrainerInfoEditField
                    onInput={this.onInput}
                    // label={
                    //     <Popover
                    //         minimal={true}
                    //         interactionKind={PopoverInteractionKind.HOVER}
                    //         position={Position.BOTTOM}
                    //         content={
                    //             <Menu>
                    //                 Type: image url. You can also specify a plain string of{' '}
                    //                 {trainerNames.map(t => <SpanBlock key={t} text={t} />)}
                    //             </Menu>
                    //         }>
                    //         <span>
                    //             Trainer Image <span className='pt-icon pt-icon-info-sign' />
                    //         </span>
                    //     </Popover>
                    // }
                    label='Trainer Image'
                    name='image'
                    placeholder='http://...'
                />
            </div>
        );
    }
}
