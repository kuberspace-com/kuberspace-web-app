import $ from 'jquery';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function clickExcludeButtons(containerClass, callback) {
  // regex match if . or  # in beginning
  // eslint-disable-next-line prefer-rest-params
  // console.log($(e.currentTarget[0].getClassName()));
  $(containerClass).on('click', (event: { target: { closest: (arg0: string) => null; }; })=> {
    if (event.target.closest('button') == null
    && (event.target).closest('.MuiButton-root') == null) {
      callback();
    }
  });
}
