const isThisBackground = true;
console.log('isThisBackground', isThisBackground);

chrome.runtime.onInstalled.addListener(() => {
  alert('on Installed');
});
