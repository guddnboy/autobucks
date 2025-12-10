// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */
import { contextBridge, ipcRenderer } from 'electron';

export type Channels = 'api';

export const electronHandler = {
  openBrowser: async () => {
    console.log('openBrowser 함수 실행');
    return ipcRenderer.invoke('open-browser');
  },
  checkAll: async () => {
    console.log('checkAll 함수 실행');
    return ipcRenderer.invoke('check-all');
  },
  submit: async () => {
    console.log('submit 함수 실행');
    return ipcRenderer.invoke('submit');
  },
  closeBrowser: async () => {
    console.log('close 함수 실행');
    return ipcRenderer.invoke('close-browser');
  },
};

contextBridge.exposeInMainWorld('api', electronHandler);

export type ElectronHandler = typeof electronHandler;
