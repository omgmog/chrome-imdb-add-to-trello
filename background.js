chrome.tabs.onUpdated.addListener(show_imdb_page_action);

function show_imdb_page_action(tabId, changeInfo, tab) {
    if (tab.url.indexOf('imdb.com/title') > -1) {
        chrome.pageAction.show(tabId);
    }
};
