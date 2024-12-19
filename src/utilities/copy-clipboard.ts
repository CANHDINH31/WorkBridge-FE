/* eslint-disable import/no-named-as-default */
import Clipboard from "clipboard";
import toast from "react-hot-toast";

const copyToClipboard = (
  textToCopy: string,
  messageSuccess = "Copy to clipboard successfully",
) => {
  const button = document.createElement("button");
  document.body.appendChild(button);

  const clipboard = new Clipboard(button, {
    text: () => textToCopy,
  });

  clipboard.on("success", () => {
    toast.success(messageSuccess);
    clipboard.destroy();
  });

  clipboard.on("error", () => {
    toast.error("Copy to clipboard failed");
    clipboard.destroy();
  });

  button.click();
};

export default copyToClipboard ;
