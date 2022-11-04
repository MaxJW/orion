import {
	classic, cliffside, digital, dragon, geometric, reptile, skulls, solidColours, sprayPaint, stripes, tiger, woodland
} from "../camo";

const goldChallengeText = 'Get 3 kills without dying 10 times';
const platinumChallengeText = null;
const polyatomicChallengeText = null;
const masteryChallenges = {
	'Gold': goldChallengeText,
	'Platinum': platinumChallengeText,
	'Polyatomic': polyatomicChallengeText,
};

export default {
	'Sakin MG38': {
		'Commando Paint': stripes["Commando Paint"],
		'Necropolis': skulls.Necropolis,
		'Fractal Mud': cliffside["Fractal Mud"],
		'Magma Digital': digital["Magma Digital"],
		...masteryChallenges
	},

	'HCR 56': {
		'Surface Tension': sprayPaint["Surface Tension"],
		'Hexed': classic.Hexed,
		'Sunset': geometric.Sunset,
		'Tessellation': dragon.Tessellation,
		...masteryChallenges
	},

	'556 Icarus': {
		'Olive': solidColours.Olive,
		'What Skulls?': skulls["What Skulls?"],
		'Night Quarry': cliffside["Night Quarry"],
		'Autumn Dazzle': geometric["Autumn Dazzle"],
		...masteryChallenges
	},

	'Raal MG': {
		'Rocky Desert': woodland["Rocky Desert"],
		'Trailblazer': dragon.Trailblazer,
		'Night Terror': reptile["Night Terror"],
		'Lodge': geometric.Lodge,
		...masteryChallenges
	},

	'RPK': {
		'Dark Rainforest': stripes["Dark Rainforest"],
		'China Lake': sprayPaint["China Lake"],
		'Asphalt': dragon.Asphalt,
		'Rupture': cliffside.Rupture,
		...masteryChallenges
	},

	'Rapp H': {
		'Desert Snake': sprayPaint["Desert Snake"],
		'Classic Digital': digital["Classic Digital"],
		'Quarry': cliffside.Quarry,
		'Blue Tiger': tiger["Blue Tiger"],
		...masteryChallenges
	},
}
