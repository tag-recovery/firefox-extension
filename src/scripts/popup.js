import { registerPopup } from "./popupContent";
import browser from "webextension-polyfill";

if (document.readyState !== "loading") {
  browser.storage.local.get(["expDays"]).then((result) => {
    if (result.expDays) {
      registerPopup(result.expDays);
    } else {
      browser.storage.local.set({ expDays: 3 }).then((res) => registerPopup(3));
    }
  });
}
