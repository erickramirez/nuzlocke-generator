import * as React from 'react';
import { Game, Pokemon, Boxes } from 'models';
import { Game as GameName, getEncounterMap, listOfGames } from 'utils';
import { State } from 'state';
import { PokemonIcon } from 'components/PokemonIcon';
import {  Callout, Classes, Icon, Intent, TextArea, Tooltip } from '@blueprintjs/core';
import { cx } from 'emotion';


const LocationIcon = ({ area, currentGame, excludeGifts, pokemon }) => {
    const poke = pokemon.find(poke => poke.met?.trim().toLocaleLowerCase() === area.toLocaleLowerCase() && (currentGame === 'None' || poke.gameOfOrigin === currentGame));

    if (poke && !poke.hidden && (!poke.gift || !excludeGifts)) {
        return (
            <>
                <Icon icon="tick" />
                <PokemonIcon style={{ pointerEvents: 'none'}} {...poke} />
            </>
        );
    }
    if (poke && poke.hidden) {
        return (
            <>
                <Icon icon="cross" />
                <PokemonIcon style={{ pointerEvents: 'none' }} {...poke} />
            </>
        );
    }
    return null;
};

export const PokemonLocationChecklist = ({
    pokemon,
    game,
    style,
    boxes,
}: {
    pokemon: Pokemon[];
    game: Game;
    style: State['style'];
    boxes: Boxes;
}) => {

    const calcTotals = (boxes, pokemon, encounterMap, currentGame) => {
        const encounterTotal = encounterMap.length;
        const totals = new Map();

        for (const box of boxes) {
            totals.set(box.name, 0);
            for (const poke of pokemon) {
                if (poke.status === box.name && (currentGame === 'None' || poke.gameOfOrigin === currentGame) && encounterMap.includes(poke.met)) {
                    const value = totals.get(box.name);
                    totals.set(box.name, value + 1);
                }
            }
        }

        const percentages: { key: string, percentage: string }[] = [];
        totals.forEach((total, key) => {
            const percentage = `${((total / encounterTotal) * 100).toFixed(1)}%`;
            percentages.push({ key, percentage });
        });
        return percentages;
    };

    const [excludeGifts, setExcludeGifts] = React.useState(false);
    const [currentGame, setCurrentGame] = React.useState<GameName>('None');
    const [excludedAreas, setExcludedAreas] = React.useState<string[]>([]);
    const encounterMap = React.useMemo(() => getEncounterMap(game.name).filter(area => !excludedAreas.includes(area)), [game.name, excludedAreas]);
    const totals = React.useMemo(() => calcTotals(boxes, pokemon, encounterMap, currentGame), [boxes, JSON.stringify(pokemon), encounterMap, currentGame]);

    const hideArea = (area: string) => () => setExcludedAreas(areas => [...areas, area]);

    const updateExcludedAreas = (event) => {
        const value = event.currentTarget.value;
        const areas = value.split('\n');
        setExcludedAreas(areas);
    };

    const colors = ['#0e1d6b', '#468189', '#77ACA2', '#9DBEBB', '#F4E9CD', '#0DAB76', '#139A43', '#D4AFB9', '#9CADCE'];

    const buildTotals = (percentages: { key: string, percentage: string }[]) => {
        return <Tooltip content={
            <>
                {percentages.map((percentage, idx) => <div>
                    <div style={{ display: 'inline-block', width: '0.5rem', height: '0.5rem', borderRadius: '50%', background: colors[idx], marginRight: '0.25rem' }}></div>
                    {percentage.key}: {percentage.percentage}
                </div>)}
            </>
        }><div style={{
                height: '1rem',
                width: '25rem',
                background: style?.editorDarkMode ? '#333' : '#eee',
                borderRadius: '.25rem',
                border: '1px solid #ccc',
                overflow: 'hidden',
            }}>
                {percentages.map((percentage, idx) => {
                    return <div key={percentage.key} style={{ width: percentage.percentage, height: '1rem', background: colors[idx], display: 'inline-block' }}></div>;
                })}
            </div>
        </Tooltip>;
    };

    return (
        <div>
            <div className={'flex items-center justify-between'}>
                <label className={cx(Classes.CONTROL, Classes.CHECKBOX)} style={{margin: '.25rem 0' }}>
                    <input type='checkbox' checked={excludeGifts} onChange={e => setExcludeGifts(e?.target.checked)} />
                    <span className={Classes.CONTROL_INDICATOR}></span>
                    <span className={Classes.LABEL}>Exclude Gifts</span>
                </label>
                <label className={cx(Classes.CONTROL)} style={{margin: '.25rem 0'}}>
                    <span className={Classes.LABEL}>Filter by Game</span>
                    <div className={Classes.SELECT} style={{marginLeft: '0.25rem'}}>
                        <select onChange={e => setCurrentGame(e?.target.value as GameName)}>
                            {listOfGames.map(game => <option key={game}>{game}</option>)}
                        </select>
                    </div>
                </label>
            </div>
            <div className='flex' style={{ justifyContent: 'center' }}>
                {buildTotals(totals)}
            </div>
            {encounterMap.map((area) => {
                return (
                    <div
                        key={area.toString()}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            margin: '2px',
                            borderBottom: `1px solid ${style?.editorDarkMode ? '#333' : '#efefef'}`,
                        }}>
                        <LocationIcon
                            area={area}
                            pokemon={pokemon}
                            currentGame={currentGame}
                            excludeGifts={excludeGifts}
                        />
                        <div style={{ marginLeft: '4px' }}>{area}</div>
                        <div role='menuitem' tabIndex={0} onKeyDown={hideArea(area)} onClick={hideArea(area)} style={{ marginLeft: 'auto', cursor: 'pointer' }}>
                            <Tooltip content={`Hide ${area}`}>
                                <Icon icon='cross' />
                            </Tooltip>
                        </div>
                    </div>
                );
            })}
            <div style={{ padding: '0.25rem' }}>
                <label htmlFor='excludedAreas' className={Classes.LABEL}>
                    <strong>Excluded Areas</strong>
                </label>
                <TextArea
                    name='excludedAreas'
                    onChange={updateExcludedAreas}
                    value={excludedAreas.join('\n')}
                />
            </div>
            <Callout intent={Intent.WARNING} style={{ fontSize: '80%', marginTop: '0.5rem' }}>
                Tip: Pokémon with the "hidden" attribute are a great option for including Pokemon
                that got away on a certain route!
            </Callout>
        </div>
    );
};

export default PokemonLocationChecklist;