export const reallyLongRunningFunction = (num) => {
    console.count('Calling Slow Function');
    sleepFor(2);
    return num * 2;
}

export const sleepFor = (seconds) => {
    const now = new Date().getTime();
    while(new Date().getTime() < now + (seconds * 1000)){ /* Do nothing */ }
}