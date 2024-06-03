const fs = require('fs').promises; // Use the promisified version of the fs module
const path = require('path');

async function createFile(fileName, content) {
    await fs.writeFile(fileName, content);
    return 'File created';
}

async function readFile(fileName) {
    const data = await fs.readFile(fileName, 'utf8');
    return data;
}

async function deleteFile(fileName) {
    await fs.unlink(fileName);
    return 'File deleted';
}

(async () => {
    const filePath = path.join(__dirname, 'example.txt');

    try {
        const createMessage = await createFile(filePath, 'This is a new file, with some text!');
        console.log(createMessage);

        const data = await readFile(filePath);
        console.log(data);

        // const deleteMessage = await deleteFile(filePath);
        // console.log(deleteMessage);
    } catch (err) {
        console.error(err);
    }
})();
