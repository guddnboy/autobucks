// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */
import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';

export type Channels = 'api';

export const electronHandler = {
  openBrowser: async () => {
    return ipcRenderer.invoke('open-browser');
  },
  getContents: async () => {
    return ipcRenderer.invoke('get-contents');
  },
};

contextBridge.exposeInMainWorld('api', electronHandler);

export type ElectronHandler = typeof electronHandler;
