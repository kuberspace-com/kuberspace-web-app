export default function required() {
  return (control, obs) => {
    var value = control.state.value;
    if (typeof value === "string") {
      if (value.length <= 0) {
        obs.next({ required: true })
      } else {
        obs.next(null);
      }
    } else if (value == null || value == undefined) {
      obs.next({ required: true })
    } else {
      obs.next(null);
    }
  }

}