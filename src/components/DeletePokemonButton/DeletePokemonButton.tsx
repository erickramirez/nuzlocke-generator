import * as React from 'react';
import { Alert, Intent, Icon, Popover, Position, PopoverInteractionKind } from '@blueprintjs/core';
import styled from 'react-emotion';

import { deletePokemon, modifyDeletionConfirmation } from 'actions';
import { connect } from 'react-redux';
import { accentedE } from 'utils';
import { State } from 'state';

export interface DeletePokemonButtonProps {
    id?: string;
    confirmation: boolean;
    modifyDeletionConfirmation: modifyDeletionConfirmation;
    deletePokemon: deletePokemon;
}

export const DeletePokemonButtonContainer = styled('div')`
    color: red;
    cursor: pointer;
`;

export class DeletePokemonButtonBase extends React.Component<
DeletePokemonButtonProps,
{ dialogOn: boolean }
> {
    public constructor(props: DeletePokemonButtonProps) {
        super(props);
        this.state = {
            dialogOn: false,
        };
        this.toggleDialog = this.toggleDialog.bind(this);
    }

    private toggleDialog() {
        this.setState({
            dialogOn: !this.state.dialogOn,
        });
    }

    public render() {
        console.log(this.props.id);
        return (
            <DeletePokemonButtonContainer>
                <Alert
                    icon="trash"
                    isOpen={this.state.dialogOn && this.props.confirmation}
                    onCancel={this.toggleDialog}
                    onConfirm={(e) => {
                        this.props.id && this.props.deletePokemon(this.props.id);
                        this.toggleDialog();
                    }}
                    confirmButtonText="Delete Pokemon"
                    cancelButtonText="Cancel"
                    intent={Intent.DANGER}>
                    <p>
                        This will delete the currently selected Pokemon. Are you sure you want to do
                        that?
                    </p>

                    <label className="bp3-control bp3-checkbox .modifier">
                        <input
                            onChange={(event) =>
                                this.props.modifyDeletionConfirmation &&
                                this.props.modifyDeletionConfirmation(!event.target.checked)
                            }
                            type="checkbox"
                        />
                        <span className="bp3-control-indicator" />
                        Don't Ask Me For Confirmation Again
                    </label>
                </Alert>
                <Popover
                    interactionKind={PopoverInteractionKind.HOVER}
                    position={Position.TOP}
                    content={<div style={{ padding: '1rem' }}>{`Delete Pok${accentedE}mon`}</div>}>
                    <Icon
                        onClick={(e) => {
                            if (this.props.confirmation) {
                                this.toggleDialog();
                            } else {
                                this.props.deletePokemon &&
                                    this.props.id &&
                                    this.props.deletePokemon(this.props.id);
                            }
                        }}
                        icon="trash"
                        title="Delete Pokemon"
                    />
                </Popover>
            </DeletePokemonButtonContainer>
        );
    }
}

export const DeletePokemonButton = connect(
    (state: Pick<State, keyof State>) => ({
        confirmation: state.confirmation,
    }),
    {
        deletePokemon,
        modifyDeletionConfirmation,
    },
)(DeletePokemonButtonBase);
