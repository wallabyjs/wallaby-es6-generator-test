
export default function(test) {
    return test;
}

export function* tester(test) {
    // With this in the file the tests fail because of the error
    // ReferenceError: regeneratorRuntime is not defined
    // If you remove this function then it runs fine, is this really running in node with my harmony flags or is it running in the browser?
}