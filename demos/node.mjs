import '../getRandomNumberFrom1To100.js';

const MAX_ATTEMPTS_COUNT = 100;
let attemptsCount = 0;
while (attemptsCount < MAX_ATTEMPTS_COUNT) {
    attemptsCount++;
    console.log('Attempt', attemptsCount.toString(), ':', getRandomNumberFrom1To100());
}
