import { text } from '../../common/text';

import { LoaderPropsType } from './loader.type';

export function LoaderForm(props: LoaderPropsType) {
  const { tid, tvalue } = props;

  return <span>{text(tid, tvalue)}</span>;
}
