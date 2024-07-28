chrome.storage.local.set({ name: 'Rudra' }).then(() => {
    console.log("Value is set");
})

chrome.storage.local.get(["name"]).then((result) => {
    console.log("Value currently is " + result.name);
})