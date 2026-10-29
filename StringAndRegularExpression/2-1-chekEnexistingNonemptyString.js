if (typeof unknownVariable === "string") {
    //unknownVariable is a string
}

if(typeof unknownVariable === "string" && unknownVariable.length > 0) {
    //This is a genuine string with characters or whitespace in it
}

if (typeof unknownVariable === "string" && unknownVariable.trim().length > 0) {
    //This is a genuine string that is not empty or all whitespace
}

//the test only save if we already know unknownVariable is a string
if (unknownVariable.length > 0)


const unknownVariable = new String('test');

if (typeof unknownVariable === "string" || String.prototype.isPrototypeOf(unknownVariable)) {
    //It's a sctring primitive or a string wrapped in an object
}

if (unknownVariable) {
    /* We gdet here as long as:
    unknownVariable has been declered
    unknownVariable is not null
    unknownVariable is not the empty string
    */
}