getRandomNumberFrom1To100 = () => { const randomNumber = performance.now() * performance.now(); const safeNumber = Number.isSafeInteger(Math.floor(randomNumber)) && Number.isSafeInteger(Math.ceil(randomNumber)) ? randomNumber : Number.MAX_SAFE_INTEGER; return safeNumber % 99 + 1; }