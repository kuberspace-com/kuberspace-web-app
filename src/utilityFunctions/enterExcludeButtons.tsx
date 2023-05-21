import $ from 'jquery';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function enterExcludeButtons(e: React.KeyboardEvent<any>, containerClass, callback) {
  // regex match if . or  # in beginning
  // eslint-disable-next-line prefer-rest-params
  // console.log($(e.currentTarget[0].getClassName()));
  if (e.key === 'Enter') {
    $(containerClass).on('keydown', (event: { target: { closest: (arg0: string) => null; }; })=> {
      if (event.target.closest('button') == null
      && (event.target).closest('.MuiButton-root') == null) {
        callback();
      }
    });
  }
}
