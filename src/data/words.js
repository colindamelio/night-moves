export const words = [
	"APPLE",
	"BAKER",
	"CAPER",
	"DINER",
	"ELBOW",
	"FABLE",
	"GIVER",
	"HABIT",
	"JOLLY",
	"KITES",
	"LUNCH",
	"MONEY",
	"NERVE",
	"OASIS",
	"PALMS",
	"QUEEN",
	"RIDER",
	"SUGAR",
	"TIGER",
	"VIRUS",
	"WASTE",
	"YACHT",
	"ZEBRA",
	"ALIEN",
	"BORED",
	"CABIN",
	"DREAM",
	"EAGER",
	"FABLE",
	"HATCH",
	"MUNCH",
	"NUDGE",
	"QUOTE",
	"SPEND",
	"UNDER",
	"ANGEL",
];

function getRandomAnswer(array) {
	return array[Math.floor(Math.random() * array.length)];
}

export const answer = getRandomAnswer(words);