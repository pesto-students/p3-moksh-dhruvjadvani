const sleep = (ms) => new Promise((res, _) => setTimeout(res), ms);

const doTask1 = () => {
    sleep(1000);
    console.log("task1");
}

const doTask2 = () => {
    sleep(2000);
    console.log("task1");
}

const doTask3 = () => {
    sleep(3000);
    console.log("task1");
}

async function Asnfun() {
    await doTask1();
    await doTask2();
    await doTask3();
}

Asnfun();

function * Genfun() {
    yield doTask1();
    yield doTask2();
    yield doTask3();
}

let a= Genfun();
console.log(a.next());
console.log(a.next());
console.log(a.next());
