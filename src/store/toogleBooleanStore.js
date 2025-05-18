import { create } from "zustand";

export const toogleBooleanStore = create((set)=> ({
  popup : false, 
  setPopup : (boolean) => set({popup : boolean}),
  
  isCatetoryModify : false,
  setIsCatetoryModify : (boolean) => set({isCatetoryModify : boolean}),
}))