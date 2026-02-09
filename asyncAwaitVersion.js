//Async and Await Updated version

function mowYard(name) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`${name} mowed the yard!`);
            resolve(name);
        }, 2000);
    });
}

function weedEat(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.15) {
                console.log(`${name} finished using the weed eater!`);
                resolve(name);
            } else {
                reject(`${name} fell asleep after mowing the yard.`);
            }
        }, 1500);
    });
}

function trimHedges(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.15) {
                console.log(`${name} finished trimming the hedges!`);
                resolve(name);
            } else {
                reject(`${name} fell asleep after weed eating the yard.`);
            }
        }, 1000);
    });
}

function collectWood(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.25) {
                console.log(`${name} finished collecting wood!`);
                resolve(name);
            } else {
                reject(`${name} fell asleep after trimming the hedges.`);
            }
        }, 2500);
    });
}

function waterGarden(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.1) {
                console.log(`${name} finished watering the garden!`);
                resolve(name);
            } else {
                reject(`${name} fell asleep after collecting wood.`);
            }
        }, 500);
    });
}


async function doSummerChores(name) {
    try {
        await mowYard(name);
        await weedEat(name);
        await trimHedges(name);
        await collectWood(name);
        await waterGarden(name);
        console.log(`${name} finished all summer chores!`);
    } catch (error) {
        console.log(error);
    }
}

doSummerChores("Brian");