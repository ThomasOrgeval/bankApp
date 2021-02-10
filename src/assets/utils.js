function Db() {
    const low = require('lowdb')
    const FileSync = require('lowdb/adapters/FileSync')

    const adapter = new FileSync('db.json')
    return low(adapter)
}


/*function addTransaction(label, value) {
    let db = new Db();
    db.get('transactions')
        .push({ label:label, value:value, date: new Date()})
        .write()
}*/

export function getSold() {
    let db = new Db();
    console.log(db);
    return db.get('soldTotal').value();
}