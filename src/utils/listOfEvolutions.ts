import { Species } from './listOfPokemon';
import { flatten } from 'ramda';
const uniq = require('lodash/uniq');

export type EvolutionTree = { [S in Species]?: Species[] };

export const EvolutionTree: EvolutionTree = {
    Bulbasaur: ['Ivysaur'],
    Ivysaur: ['Venusaur'],
    Charmander: ['Charmeleon'],
    Charmeleon: ['Charizard'],
    Squirtle: ['Wartortle'],
    Wartortle: ['Blastoise'],

    Caterpie: ['Metapod'],
    Metapod: ['Butterfree'],
    Weedle: ['Kakuna'],
    Kakuna: ['Beedrill'],
    Pidgey: ['Pidgeotto'],
    Pidgeotto: ['Pidgeot'],
    Rattata: ['Raticate'],
    Pichu: ['Pikachu'],
    Pikachu: ['Raichu'],

    Spearow: ['Fearow'],
    Ekans: ['Arbok'],
    Sandshrew: ['Sandslash'],
    'Nidoran♀': ['Nidorina'],
    Nidorina: ['Nidoqueen'],
    'Nidoran♂': ['Nidorino'],
    Nidorino: ['Nidoking'],

    Cleffa: ['Clefairy'],
    Clefairy: ['Clefable'],
    Igglybuff: ['Jigglypuff'],
    Jigglypuff: ['Wigglytuff'],

    Zubat: ['Golbat'],
    Golbat: ['Crobat'],

    Oddish: ['Gloom'],
    Gloom: ['Vileplume', 'Bellossom'],

    Diglett: ['Dugtrio'],
    Meowth: ['Persian', 'Perrserker'],
    Psyduck: ['Golduck'],
    Mankey: ['Primeape'],
    Growlithe: ['Arcanine'],
    Poliwag: ['Poliwhirl'],
    Poliwhirl: ['Politoed', 'Poliwrath'],
    Abra: ['Kadabra'],
    Kadabra: ['Alakazam'],

    Machop: ['Machoke'],
    Machoke: ['Machamp'],

    Bellsprout: ['Weepinbell'],
    Weepinbell: ['Victreebel'],

    Tentacool: ['Tentacruel'],
    Geodude: ['Graveler'],
    Graveler: ['Golem'],

    Ponyta: ['Rapidash'],
    Slowpoke: ['Slowking', 'Slowbro'],

    Magnemite: ['Magneton'],
    Magneton: ['Magnezone'],

    'Farfetch\'d': ['Sirfetch\'d'],
    Doduo: ['Dodrio'],

    Seel: ['Dewgong'],
    Grimer: ['Muk'],
    Shellder: ['Cloyster'],
    Onix: ['Steelix'],
    Gastly: ['Haunter'],
    Haunter: ['Gengar'],

    Drowzee: ['Hypno'],
    Krabby: ['Kingler'],
    Voltorb: ['Electrode'],

    Exeggcute: ['Exeggutor'],
    Cubone: ['Marowak'],
    Tyrogue: ['Hitmonchan', 'Hitmonlee', 'Hitmontop'],

    Lickitung: ['Lickilicky'],
    Koffing: ['Weezing'],

    Rhyhorn: ['Rhydon'],
    Rhydon: ['Rhyperior'],
    Happiny: ['Chansey'],
    Chansey: ['Blissey'],

    Tangela: ['Tangrowth'],
    Horsea: ['Seadra'],
    Seadra: ['Kingdra'],
    Goldeen: ['Seaking'],
    Staryu: ['Starmie'],
    'Mime Jr.': ['Mr. Mime'],
    'Mr. Mime': ['Mr. Rime'],

    Scyther: ['Scizor'],
    Smoochum: ['Jynx'],

    Elekid: ['Electabuzz'],
    Electabuzz: ['Electivire'],
    Magby: ['Magmar'],
    Magmar: ['Magmortar'],
    Magikarp: ['Gyarados'],
    Porygon: ['Porygon2'],
    Porygon2: ['Porygon-Z'],
    Eevee: ['Jolteon', 'Flareon', 'Vaporeon', 'Sylveon', 'Umbreon', 'Espeon', 'Leafeon', 'Glaceon'],
    Omanyte: ['Omastar'],
    Kabuto: ['Kabutops'],
    Munchlax: ['Snorlax'],
    Dratini: ['Dragonair'],
    Dragonair: ['Dragonite'],

    Chikorita: ['Bayleef'],
    Bayleef: ['Meganium'],
    Cyndaquil: ['Quilava'],
    Quilava: ['Typhlosion'],

    Totodile: ['Croconaw'],
    Croconaw: ['Feraligatr'],

    Hoothoot: ['Noctowl'],
    Sentret: ['Furret'],

    Ledyba: ['Ledian'],
    Spinarak: ['Ariados'],

    Togepi: ['Togetic'],
    Togetic: ['Togekiss'],

    Mareep: ['Flaaffy'],
    Flaaffy: ['Ampharos'],
    Wooper: ['Quagsire'],

    Hoppip: ['Skiploom'],
    Skiploom: ['Jumpluff'],

    Pineco: ['Forretress'],
    Yanma: ['Yanmega'],

    Sunkern: ['Sunflora'],

    Wynaut: ['Wobbuffet'],
    Aipom: ['Ambipom'],
    Snubbull: ['Granbull'],

    Azurill: ['Marill'],
    Marill: ['Azumarill'],
    Remoraid: ['Octillery'],
    Chinchou: ['Lanturn'],
    Swinub: ['Piloswine'],
    Piloswine: ['Mamoswine'],
    Teddiursa: ['Ursaring'],
    Phanpy: ['Donphan'],
    Mantyke: ['Mantine'],

    Murkrow: ['Honchkrow'],
    Misdreavus: ['Mismagius'],
    Houndour: ['Houndoom'],
    Slugma: ['Magcargo'],

    Sneasel: ['Weavile'],
    Larvitar: ['Pupitar'],
    Pupitar: ['Tyranitar'],
    Gligar: ['Gliscor'],
    Corsola: ['Cursola'],

    Treecko: ['Grovyle'],
    Grovyle: ['Sceptile'],

    Torchic: ['Combusken'],
    Combusken: ['Blaziken'],

    Mudkip: ['Marshtomp'],
    Marshtomp: ['Swampert'],

    Poochyena: ['Mightyena'],
    Zigzagoon: ['Linoone'],
    Linoone: ['Obstagoon'],

    Wurmple: ['Silcoon', 'Cascoon'],
    Silcoon: ['Beautifly'],
    Cascoon: ['Dustox'],

    Lotad: ['Lombre'],
    Lombre: ['Ludicolo'],

    Seedot: ['Nuzleaf'],
    Nuzleaf: ['Shiftry'],

    Taillow: ['Swellow'],
    Wingull: ['Pelipper'],

    Ralts: ['Kirlia'],
    Kirlia: ['Gardevoir', 'Gallade'],

    Surskit: ['Masquerain'],
    Shroomish: ['Breloom'],
    Slakoth: ['Vigoroth'],
    Vigoroth: ['Slaking'],

    Nincada: ['Shedinja', 'Ninjask'],
    Whismur: ['Loudred'],
    Loudred:  ['Exploud'],

    Makuhita: ['Hariyama'],
    Nosepass: ['Probopass'],
    Skitty: ['Delcatty'],
    Aron: ['Lairon'],
    Lairon: ['Aggron'],
    Meditite: ['Medicham'],
    Electrike: ['Manectric'],
    Gulpin: ['Swalot'],
    Carvanha: ['Sharpedo'],
    Wailmer: ['Wailord'],
    Numel: ['Camerupt'],
    Spoink: ['Grumpig'],
    Trapinch: ['Vibrava'],
    Vibrava: ['Flygon'],
    Cacnea: ['Cacturne'],
    Swablu: ['Altaria'],
    Barboach: ['Whiscash'],
    Corphish: ['Crawdaunt'],
    Baltoy: ['Claydol'],
    Lileep: ['Cradily'],
    Anorith: ['Armaldo'],
    Feebas: ['Milotic'],
    Shuppet: ['Banette'],
    Duskull: ['Dusclops'],
    Dusclops: ['Dusknoir'],
    Snorunt: ['Glalie', 'Froslass'],
    Spheal: ['Sealeo'],
    Sealeo: ['Walrein'],
    Clamperl: ['Huntail', 'Gorebyss'],
    Bagon: ['Shelgon'],
    Shelgon: ['Salamence'],
    Beldum: ['Metang'],
    Metang: ['Metagross'],

    Turtwig: ['Grotle'],
    Grotle: ['Torterra'],

    Chimchar: ['Monferno'],
    Monferno: ['Infernape'],

    Piplup: ['Prinplup'],
    Prinplup: ['Empoleon'],

    Starly: ['Staravia'],
    Staravia: ['Staraptor'],

    Bidoof: ['Bibarel'],
    Kricketot: ['Kricketune'],
    Shinx: ['Luxio'],
    Luxio: ['Luxray'],

    Cranidos: ['Rampardos'],
    Shieldon: ['Bastiodon'],
    Budew: ['Roselia'],
    Roselia: ['Roserade'],
    Burmy: ['Wormadam', 'Mothim'],

    Combee: ['Vespiquen'],
    Buizel: ['Floatzel'],
    Cherubi: ['Cherrim'],
    Shellos: ['Gastrodon'],
    Drifloon: ['Drifblim'],

    Buneary: ['Lopunny'],
    Glameow: ['Purugly'],
    Stunky: ['Skuntank'],

    Bronzor: ['Bronzong'],
    Gible: ['Gabite'],
    Gabite: ['Garchomp'],

    Riolu: ['Lucario'],

    Hippopotas: ['Hippowdon'],
    Skorupi: ['Drapion'],

    Croagunk: ['Toxicroak'],
    Finneon: ['Lumineon'],
    Snover: ['Abomasnow'],

    Snivy: ['Servine'],
    Servine: ['Serperior'],
    Tepig: ['Pignite'],
    Pignite: ['Emboar'],
    Oshawott: ['Dewott'],
    Dewott: ['Samurott'],

    Patrat: ['Watchog'],
    Lillipup: ['Herdier'],
    Herdier: ['Stoutland'],

    Purrloin: ['Liepard'],
    Pansage: ['Simisage'],
    Pansear: ['Simisear'],
    Panpour: ['Simipour'],
    Munna: ['Musharna'],
    Pidove: ['Tranquill'],
    Tranquill: ['Unfezant'],
    Blitzle: ['Zebstrika'],
    Roggenrola: ['Boldore'],
    Boldore: ['Gigalith'],
    Woobat: ['Swoobat'],
    Drilbur: ['Excadrill'],
    Timburr: ['Gurdurr'],
    Gurdurr: ['Conkeldurr'],
    Tympole: ['Palpitoad'],
    Palpitoad: ['Seismitoad'],
    Sewaddle: ['Swadloon'],
    Swadloon: ['Leavanny'],
    Venipede: ['Whirlipede'],
    Whirlipede: ['Scolipede'],
    Petilil: ['Lilligant'],
    Sandile: ['Krokorok'],
    Krokorok: ['Krookodile'],
    Darumaka: ['Darmanitan'],
    Dwebble: ['Crustle'],
    Scraggy: ['Scrafty'],
    Yamask: ['Cofagrigus', 'Runerigus'],
    Tirtouga: ['Carracosta'],
    Archen: ['Archeops'],
    Trubbish: ['Garbodor'],
    Zorua: ['Zoroark'],
    Minccino: ['Cinccino'],
    Gothita: ['Gothorita'],
    Gothorita: ['Gothitelle'],
    Solosis: ['Duosion'],
    Duosion: ['Reuniclus'],
    Ducklett: ['Swanna'],
    Vanillite: ['Vanillish'],
    Vanillish: ['Vanilluxe'],
    Deerling: ['Sawsbuck'],
    Karrablast: ['Escavalier'],
    Foongus: ['Amoonguss'],
    Frillish: ['Jellicent'],
    Joltik: ['Galvantula'],
    Ferroseed: ['Ferrothorn'],
    Klink: ['Klang'],
    Klang: ['Klinklang'],
    Tynamo: ['Eelektrik'],
    Eelektrik: ['Eelektross'],
    Elgyem: ['Beheeyem'],
    Litwick: ['Lampent'],
    Lampent: ['Chandelure'],
    Axew: ['Fraxure'],
    Fraxure: ['Haxorus'],
    Cubchoo: ['Beartic'],
    Shelmet: ['Accelgor'],
    Mienfoo: ['Mienshao'],
    Golett: ['Golurk'],
    Pawniard: ['Bisharp'],
    Rufflet: ['Braviary'],
    Vullaby: ['Mandibuzz'],
    Deino: ['Zweilous'],
    Zweilous: ['Hydreigon'],
    Larvesta: ['Volcarona'],

    Chespin: ['Quilladin'],
    Quilladin: ['Chesnaught'],
    Fennekin: ['Braixen'],
    Braixen: ['Delphox'],
    Froakie: ['Frogadier'],
    Frogadier: ['Greninja'],
    Bunnelby: ['Diggersby'],
    Fletchling: ['Fletchinder'],
    Fletchinder: ['Talonflame'],
    Scatterbug: ['Spewpa'],
    Spewpa: ['Vivillon'],
    Litleo: ['Pyroar'],
    'Flabébé': ['Floette'],
    Floette: ['Florges'],
    Skiddo: ['Gogoat'],
    Pancham: ['Pangoro'],
    Espurr: ['Meowstic'],
    Honedge: ['Doublade'],
    Doublade: ['Aegislash'],
    Spritzee: ['Aromatisse'],
    Swirlix: ['Slurpuff'],
    Inkay: ['Malamar'],
    Binacle: ['Barbaracle'],
    Skrelp: ['Dragalge'],
    Clauncher: ['Clawitzer'],
    Helioptile: ['Heliolisk'],
    Tyrunt: ['Tyrantrum'],
    Amaura: ['Aurorus'],
    Goomy: ['Sliggoo'],
    Sliggoo: ['Goodra'],
    Phantump: ['Trevenant'],
    Pumpkaboo: ['Gourgeist'],
    Bergmite: ['Avalugg'],
    Noibat: ['Noivern'],

    Rowlet: ['Dartrix'],
    Dartrix: ['Decidueye'],
    Litten: ['Torracat'],
    Torracat: ['Incineroar'],
    Popplio: ['Brionne'],
    Brionne: ['Primarina'],
    Pikipek: ['Trumbeak'],
    Trumbeak: ['Toucannon'],
    Yungoos: ['Gumshoos'],
    Grubbin: ['Charjabug'],
    Charjabug: ['Vikavolt'],
    Crabrawler: ['Crabominable'],
    Cutiefly: ['Ribombee'],
    Rockruff: ['Lycanroc'],
    Mareanie: ['Toxapex'],
    Mudbray: ['Mudsdale'],
    Dewpider: ['Araquanid'],
    Fomantis: ['Lurantis'],
    Morelull: ['Shiinotic'],
    Salandit: ['Salazzle'],
    Stufful: ['Bewear'],
    Bounsweet: ['Steenee'],
    Steenee: ['Tsareena'],
    Wimpod: ['Golisopod'],
    Sandygast: ['Palossand'],
    'Type: Null': ['Silvally'],
    'Jangmo-o': ['Hakamo-o'],
    'Hakamo-o': ['Kommo-o'],
    Cosmog: ['Cosmoem'],
    Cosmoem: ['Solgaleo', 'Lunala'],
    Meltan: ['Melmetal'],

    Grookey: ['Thwackey'],
    Thwackey: ['Rillaboom'],
    Scorbunny: ['Raboot'],
    Raboot: ['Cinderace'],
    Sobble: ['Drizzile'],
    Drizzile:  ['Inteleon'],
    Skwovet: ['Greedent'],
    Rookidee: ['Corvisquire'],
    Corvisquire: ['Corviknight'],
    Blipbug: ['Dottler'],
    Dottler: ['Orbeetle'],
    Nickit: ['Thievul'],
    Gossifleur: ['Eldegoss'],
    Wooloo: ['Dubwool'],
    Chewtle: ['Drednaw'],
    Yamper: ['Boltund'],
    Rolycoly: ['Carkol'],
    Carkol: ['Coalossal'],
    Applin: ['Flapple', 'Appletun'],
    Silicobra: ['Sandaconda'],
    Arrokuda: ['Barraskewda'],
    Toxel: ['Toxtricity'],
    Sizzlipede: ['Centiskorch'],
    Clobbopus: ['Grapploct'],
    Sinistea: ['Polteageist'],
    Hatenna: ['Hattrem'],
    Hattrem: ['Hattrene'],
    Impidimp: ['Morgrem'],
    Morgrem: ['Grimmsnarl'],
    Milcery: ['Alcremie'],
    Snom: ['Frosmoth'],
    Cufant: ['Copperajah'],
    Dreepy: ['Drakloak'],
    Drakloak: ['Dragapult'],
    Kubfu: ['Urshifu'],
};

const cycleThrough = (species: Species) => {
    const found: Species[] = [];
    for (const pokemon in EvolutionTree) {
        if (EvolutionTree[pokemon].includes(species)) {
            found.push(pokemon as Species);
        }
    }
    return found;
};

export const getEvolutionLine = (species: Species, linear: boolean = false): Species[] => {
    const line: Species[] = [];

    // include queries species
    line.push(species);

    const getPriors = (species) => {
        const priors = cycleThrough(species);
        if (priors.length) {
            line.push(...priors);
            priors.forEach(prior => {
                getPriors(prior);
                getNextEvo(prior);
            });
        }
    };

    const getNextEvo = (species: Species) => {
        const evolution = EvolutionTree[species];

        console.log(`evo for ${species}`, evolution, cycleThrough(species));

        if (!evolution) {
            getPriors(species);
        }
        if (evolution && evolution.length === 1) {
            line.push(evolution[0]);
            if (EvolutionTree[evolution[0]]) {
                getNextEvo(evolution[0]);
            }
        }
        if (evolution && evolution.length > 1) {
            return evolution.forEach(ev => getNextEvo(ev));
        }
    };

    getNextEvo(species);


    return uniq(line);
};



const tree = [
    ['Bulbasaur', 'Ivysaur', 'Venusaur'],
    ['Burmy', ['Mothim', 'Wormadam']],
    ['Wurmple', ['Silcoon', 'Cascoon'], ['Beautifly', 'Dustox']]
];

const getFlat = tree.map(branch => flatten(branch));
