document.addEventListener("contextmenu", (event) =>
  event.preventDefault(
    swal("Oops", "Bloklangan Amaliyot!", { icon: "warning" })
  )
);
document.onkeydown = function (e) {
  if (event.keyCode == 123) {
    swal("Oops", "Bloklangan Amaliyot!","😡", { icon: "warning" });
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
    swal("Oops", "Bloklangan Amaliyot!", "😡",{ icon: "warning" });
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
    swal("Oops", "Bloklangan Amaliyot!", "😡",{ icon: "warning" });
    return false;
  }
  if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
    swal("Oops", "Bloklangan Amaliyot!", "😡",{ icon: "warning" });
    return false;
  }
};
