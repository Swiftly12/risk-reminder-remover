document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.getElementById('toggle-switch');
    const statusText = document.getElementById('status-text');

    chrome.storage.sync.get('extensionEnabled', (data) => {
        const isEnabled = data.extensionEnabled ?? true;
        toggleSwitch.checked = isEnabled;
        statusText.textContent = isEnabled ? 'Extension is enabled' : 'Extension is disabled';
    });

    toggleSwitch.addEventListener('change', () => {
        const isEnabled = toggleSwitch.checked;
        chrome.storage.sync.set({ extensionEnabled: isEnabled }, () => {
            statusText.textContent = isEnabled ? 'Extension is enabled' : 'Extension is disabled';
        });
    });
});
