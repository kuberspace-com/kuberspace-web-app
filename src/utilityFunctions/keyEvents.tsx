/* eslint-disable @typescript-eslint/no-explicit-any */

function onKeyEnter(event: React.KeyboardEvent<any>, callback: ()=> void) {
  if (event.key === 'Enter') {
    callback();
  }
}

function onKeyTab(event: React.KeyboardEvent<any>, callback: ()=> void) {
  if (event.key === 'Tab') {
    callback();
  }
}

function onKeySpace(event: React.KeyboardEvent<any>, callback: ()=> void) {
  if (event.key === 'Space') {
    callback();
  }
}

export { onKeyEnter, onKeyTab, onKeySpace };
