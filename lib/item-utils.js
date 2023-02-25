import * as fs from "fs";
import * as path from "path";

// returns a list of the files in the directory based on the parameter
export function getItemFiles(type){
    const itemDirectory = path.join(process.cwd(),"src/public/locales",type);
    return fs.readdirSync(itemDirectory);
}

export function getItemData(itemIdentifier, type) {
    const itemsDirectory = path.join(`${process.cwd()}/src/public/locales/${type}`);
    // removes the file extension
    const itemSlug = itemIdentifier.replace(/\.js$/, "");
    const filePath = path.join(itemsDirectory, `${itemSlug}.js`);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const fileContent1 = JSON.parse(filePath)

    return {
        slug: itemSlug,
        fileContent1
    };
}

export function getAllItems(type) {
    const itemFiles = getItemsFiles(type);

    const allItems = itemFiles.map((itemFile) => {
        return getItemData(itemFile, type);
    });

    return allItems.sort((itemA, itemB) =>
        itemA.date > itemB.date ? -1 : 1
    );
}

export function getFeaturedItems(items) {
    return items.filter((item) => item.isFeatured);
}

