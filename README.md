# Cassino Matheus - Development Test (Node)

	A game control, development test build by Matheus Brito.

## Requisites

- Node.js;

## Setup

- Clone the repository;
- Install dependencies (`npm install`);
- Copy `.env.example` file (`cp .env.example .env`);
- Run application (`npm run dev`);

## HTTP

### GET `/games`

Get all games from data json

#### Response 

```json
[
	{
		"id": "playngo_legacy-of-dead",
		"slug": "playngo-legacy-of-dead",
		"title": "Legacy of Dead",
		"providerName": "Play'n GO",
		"thumb": {
			"url": "//images.ctfassets.net/5acrbcz937qe/3tqUiWTXh5AbOmcyQoR7zJ/606fcd268a6a24c14ba86ad55dc8d4cd/LegacyOfDead_280x280.jpg"
		}
	}
]
```

### GET `/games/:search`

Search games by title;

#### Response 

```json
[
	{
		"id": "playngo_legacy-of-dead",
		"slug": "playngo-legacy-of-dead",
		"title": "Legacy of Dead",
		"providerName": "Play'n GO",
		"thumb": {
			"url": "//images.ctfassets.net/5acrbcz937qe/3tqUiWTXh5AbOmcyQoR7zJ/606fcd268a6a24c14ba86ad55dc8d4cd/LegacyOfDead_280x280.jpg"
		}
	}
]
```

### POST `/play`

Return the result of the spin and the coins the player won.

#### Response 

```json
{
    "coins": 0,
    "spinedReel1": [
        "lemon",
        "apple",
        "lemon",
        "cherry",
        "lemon",
        "lemon",
        "banana",
        "banana"
    ],
    "spinedReel2": [
        "lemon",
        "lemon",
        "lemon",
        "apple",
        "apple",
        "lemon",
        "cherry",
        "banana"
    ],
    "spinedReel3": [
        "lemon",
        "apple",
        "lemon",
        "banana",
        "apple",
        "cherry",
        "lemon",
        "lemon"
    ]
}
```



