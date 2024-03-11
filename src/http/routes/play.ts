import { FastifyInstance } from "fastify";

// HTTP POST endpoint for play
export async function Play(app: FastifyInstance) {
    app.post('/play', async (request, reply) => {

        const { coins, spinedReel1, spinedReel2, spinedReel3 } = calculateCoins();

        return reply.status(200).send({ coins, spinedReel1, spinedReel2, spinedReel3 });

    });
}

// Function to calculate coins and return spinedReels
function calculateCoins(): { coins: number; spinedReel1: string[]; spinedReel2: string[]; spinedReel3: string[]; } {

    // Initial Reels (Equal in FS test archive)
    const reel1 = ["cherry", "lemon", "apple", "lemon", "banana", "banana", "lemon", "lemon"];
    const reel2 = ["lemon", "apple", "lemon", "lemon", "cherry", "apple", "banana", "lemon"];
    const reel3 = ["lemon", "apple", "lemon", "apple", "cherry", "lemon", "banana", "lemon"];

    //Ramdom reels
    let spinedReel1 = shuffleArray(reel1);
    let spinedReel2 = shuffleArray(reel2);
    let spinedReel3 = shuffleArray(reel3);

    //Init coin variable
    let coins = 0;

    /*
    Will compare the position [1] of corresponding elements in the reels, and calculate the rewards using the rules:
    
    Rewards
        ● 3 cherries in a row: 50 coins, 2 cherries in a row: 40 coins
        ● 3 Apples in a row: 20 coins, 2 Apples in a row: 10 coins
        ● 3 Bananas in a row: 15 coins, 2 Bananas in a row: 5 coins
        ● 3 lemons in a row: 3 coins
    */

    //IF the position has 3 equal fruits, else, verify if has 2 equals fruits in a row; 
    if (spinedReel1[1] === spinedReel2[1] && spinedReel2[1] === spinedReel3[1]) {
        switch (spinedReel1[1]) {
            case 'cherry':
                coins += 50;
                break;
            case 'apple':
                coins += 20;
                break;
            case 'banana':
                coins += 15;
                break;
            case 'lemon':
                coins += 3;
                break;
            default:
                break;
        }
    } else if (spinedReel1[1] === spinedReel2[1]) {

        switch (spinedReel1[1]) {
            case 'cherry':
                coins += 40;
                break;
            case 'apple':
                coins += 10;
                break;
            case 'banana':
                coins += 5;
                break;
            default:
                break;
        }
    } else if (spinedReel2[1] === spinedReel3[1]) {

        switch (spinedReel2[1]) {
            case 'cherry':
                coins += 40;
                break;
            case 'apple':
                coins += 10;
                break;
            case 'banana':
                coins += 5;
                break;
            default:
                break;
        }
    }

    return { coins, spinedReel1, spinedReel2, spinedReel3 };
}

// Function to shuffle an array
function shuffleArray<T>(array: T[]): T[] {
    const newArray = [...array];
    newArray.sort(() => Math.random() - 0.5);
    return newArray;
}