import { text } from '../../common/text';

/**
 * @param {object} props
 * @param {string} props.tid
 */
export function LoaderForm(props) {
  const { tid } = props;

  return <span>{text(tid)}</span>;
}
