const fs = require('fs');

const openFile = () => {

    require('electron').remote.dialog.showOpenDialog(function (fileNames) {

        if (fileNames === undefined) return;

        const fileName = fileNames[0];

        fs.readFile(fileName, 'utf-8', function (err, data) {
            document.getElementById("editor").value = data;

        });

    });

};

const implementMode1 = (data) => {
    let newData = [];

    for (let item of data) {
        if ((/^[aeiou]$/i).test(item[0]) && newData.indexOf(item) === -1) {
            newData.push(item);
        }
    }

    newData = newData.sort((x, y) => {
        if (x.length < y.length) return -1;
        if (x.length > y.length) return 1;
        if (x.toLowerCase() < y.toLowerCase()) return -1;
        if (x.toLowerCase() > y.toLowerCase()) return 1;
        return 0;
    });

    return newData;
};

const handleMode1 = () => {
    document.getElementById("editor").value = implementMode1(document.getElementById("editor").value.split('\n')).join('\n');
};

const implementMode2 = (data) => {
    const power = data.length;
    let newRowPow;
    for (let item of data) {
        if (item.indexOf('x') === -1) {
            newRowPow = Math.pow(power, item.length);
            break;
        }
    }

    data = data.map((row) => {
        if (row.indexOf('x') !== -1) {
            return `${row} - ${newRowPow}`
        } else {
            return `${row} - ${Math.pow(power, row.length)}`
        }

    });

    return data;
};

const handleMode2 = () => {
    document.getElementById("editor").value = implementMode2(document.getElementById("editor").value.split('\n')).join('\n');

};

module.exports.implementMode1 = implementMode1;
module.exports.implementMode2 = implementMode2;