class Card{
    constructor(value,suit){
        this.value = value;
        this.suit = suit;
    }
    toString(){
        let rank;
        switch(this.value){
            case 1:
           rank = "Ace";
            break;
            case 11:
           rank = "Jack"
            break;
            case 12:
           rank = "Queen"
            break;
            case 13:
           rank  = "King"
            break
            default:
           rank  = this.value
            break;
        }
        return `Card {${rank} of ${this.suit}}`
    }

}

class Deck {
    constructor(){
        this.reset();
    }

    reset(){
        let cards = [];
        let values =[];
        for(let i = 0; i <= 13; i++){
            values.push(i);
        }
        const suites = ['spades', 'hearts', 'clubs', 'diamonds'];
        suites.forEach(suit =>{
            values.forEach(value => {
            cards.push(new Card(value, suit))
            })
        })
        this.cards = cards;
    }

    draw(){
        return this.cards.shift();
    }

    shuffle(){
        this.cards = this.cards.sort(() => {
            return 0.5 - Math.random();
        });
    }
}


// const draw = new Card(11,"Spades");
// console.log(draw.toString());

const deck = new Deck();
console.log(deck.cards);
deck.shuffle();
console.log(deck.cards)