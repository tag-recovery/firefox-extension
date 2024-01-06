import {
  loadStorage,
  injectIcon,
  injectRecordEventListeners,
  grabElements,
  debounce,
  createTag,
  grabExpValue,
} from "./iconHelpers";
import storeProxy from "./store";

const elements = grabElements();
let { username, textarea, prevTextArea, dwrpTools } = elements;

export function registerIcon(expDaysValue) {
  storeProxy.expDays = expDaysValue;
  injectIcon(storeProxy.data);
  injectRecordEventListeners({ ...elements, value: [] });
  storeProxy.data = loadStorage(username, storeProxy.expDays);

  /*
  WAITS A SET AMT OF INACTIVE TIME,
  THEN SAVES TEXTAREA VALUE
  IN LOCAL STORAGE
  */
  textarea.addEventListener(
    "keyup",
    debounce((e) => {
      prevTextArea = e.target.value;
      const result = createTag(e.target.value);
      if (result.id) {
        storeProxy.data = [...storeProxy.data, result];
      } else {
        console.log(result);
      }
    }, 3500)
  );
  if (dwrpTools) {
    /*
    DETECTS USE OF DWRP TOOL BUTTONS
    AND SAVES LATEST TEXTAREA INJECTION
    TO LOCAL STORAGE
    */
    dwrpTools.forEach((btn) => {
      btn.addEventListener("click", () => {
        const result = createTag(textarea.value);
        if (result.id) {
          storeProxy.data = [...storeProxy.data, result];
        } else {
          console.log(result);
        }
      });
    });
  }
}

export { username, textarea, prevTextArea, dwrpTools };
