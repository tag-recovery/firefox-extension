import { registerIcon } from "./iconContent";
import browser from "webextension-polyfill";

if (document.readyState !== "loading") {
  browser.storage.local.get(["expDays"]).then((result) => {
    if (result.expDays) {
      registerIcon(result.expDays);
    } else {
      browser.storage.local.set({ expDays: 3 }).then((res) => registerIcon(3));
    }
  });
}
