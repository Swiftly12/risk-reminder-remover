function removeElement(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.remove();
        console.log('Element removed');
    }
}

function removeCNFansElements() {
    removeElement('.custom-modal#keywords-modal');
}

function removeHoobuyElements() {
    removeElement('.el-overlay');
}

chrome.storage.sync.get('extensionEnabled', (data) => {
    if (data.extensionEnabled ?? true) {

        removeCNFansElements();
        removeHoobuyElements();

        const observer = new MutationObserver(() => {
            removeCNFansElements();
            removeHoobuyElements();
        });

        observer.observe(document.body, { childList: true, subtree: true });
    }
});
