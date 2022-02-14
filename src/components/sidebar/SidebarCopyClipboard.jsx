import { Fragment } from "react";
import Button from "../Button/Button";

function cssCopied(css) {
  navigator.clipboard.writeText(css);
  setTimeout(function () {
    alert("Copied to clipbord");
  }, 100);
}

export const SidebarCopyClipboard = ({ gradientStyles }) => {
  return (
    <Fragment>
      <Button onClick={() => cssCopied(gradientStyles)} txt="Copy CSS" big />
    </Fragment>
  );
};
